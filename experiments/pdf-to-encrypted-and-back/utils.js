function stringToArrayBuf(str) {
  return new TextEncoder().encode(str);
}

function arrayBufToStr(buff) {
  return new TextDecoder().decode(buff);
}

const fromHexToIntArr = (hexString) =>
  Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

function arrayBufferToHexString(buffer) {
  return Array.prototype.map
    .call(new Uint8Array(buffer), (x) => ("00" + x.toString(16)).slice(-2))
    .join("");
}

async function getUserPasswordHashed() {
  var user_password_el = document.getElementById("password");
  if (user_password_el.value == "") {
    alert("Empty password");
  } else {
    const textAsBuffer = stringToArrayBuf(user_password_el.value);
    var binary_key = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
    const digest = arrayBufferToHexString(binary_key);
    document.getElementById("key").innerText = digest;
    return digest;
  }
}

/**
 * Create a CryptoKey from a password.
 * deriveKey means that this CryptoKey obj can be used to
 * derive a key with window.crypto.subtle.deriveKey.
 */
async function getCryptoKeyFromStr(password_str) {
  const password_buf = stringToArrayBuf(password_str);
  const algorithm = { name: "PBKDF2" };
  const extractable = false;
  const usages = ["deriveKey"]; // also 'deriveBits'
  return await window.crypto.subtle.importKey(
    "raw",
    password_buf,
    algorithm,
    extractable,
    usages
  );
}

/**
 * this function works only with PBKDF2 CryptoKey obj.
 */
async function deriveSymKeyFromStrCryptoObj(crypto_key_obj) {
  const salt = stringToArrayBuf("sfc");
  const iterations = 3;
  const hash = { name: "SHA-256" };
  const keyAlgorithm = { name: "AES-GCM", length: 256 };
  const keyUsages = ["encrypt", "decrypt"];
  return await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: iterations,
      hash: hash,
    },
    crypto_key_obj,
    keyAlgorithm,
    false,
    keyUsages
  );
}

async function encrypt() {
  var text_to_enc_el = document.getElementById("text_to_enc");
  if (text_to_enc_el.value == "") {
    alert("Empty text_to_enc");
  } else {
    var user_password_hashed = await getUserPasswordHashed();
    var crypto_key_obj = await getCryptoKeyFromStr(user_password_hashed);
    var sym_key = await deriveSymKeyFromStrCryptoObj(crypto_key_obj);
    const iv = stringToArrayBuf("sfc");
    const algorithm = { name: "AES-GCM", iv: iv };
    const ciphertext = await window.crypto.subtle.encrypt(
      algorithm,
      sym_key,
      stringToArrayBuf(text_to_enc_el.value)
    );
    document.getElementById("encrypt").innerText =
      arrayBufferToHexString(ciphertext);
    return arrayBufferToHexString(ciphertext);
  }
}

async function decrypt() {
  var encrypted_hex_text = await encrypt();
  var encrypted_bin = fromHexToIntArr(encrypted_hex_text);
  var user_password_hashed = await getUserPasswordHashed();
  var crypto_key_obj = await getCryptoKeyFromStr(user_password_hashed);
  var sym_key = await deriveSymKeyFromStrCryptoObj(crypto_key_obj);
  const iv = stringToArrayBuf("sfc");
  const algorithm = { name: "AES-GCM", iv: iv };
  const text_bin = await window.crypto.subtle.decrypt(
    algorithm,
    sym_key,
    encrypted_bin
  );
  var text = arrayBufToStr(text_bin);
  document.getElementById("decrypt").innerText = text;
}
