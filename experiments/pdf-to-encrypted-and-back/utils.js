function createKey() {
  var password_el = document.getElementById("password");
  if (password_el.value == "") {
    alert("Empty password");
  } else {
    const textAsBuffer = new TextEncoder().encode(password_el.value);
    window.crypto.subtle
      .digest(
        {
          name: "SHA-512",
        },
        textAsBuffer
      )
      .then(function (hashBuffer) {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const digest = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
        console.log(digest);
      })
      .catch(function (err) {
        console.error(err);
      });
  }
}
