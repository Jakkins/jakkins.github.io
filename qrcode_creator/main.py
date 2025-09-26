"""
1. create venv
2. which pip
pip install qrcode[pil]
"""

import qrcode
from qrcode.image.pil import PilImage  # standard PIL factory
import qrcode.image.pil as pil
import qrcode.constants as constants

data = "https://temporaryurlname.github.io"

# ERROR_CORRECT_H is maximum recovery rate (~30%)
qr = qrcode.QRCode(
    version=None,  # let the library pick the best version
    error_correction=constants.ERROR_CORRECT_H,
    border=0  # remove white border
)

qr.add_data(data)
qr.make(fit=True)

img = qr.make_image(
    fill_color="white",
    back_color=None,
    image_factory=PilImage).convert("RGBA")
img.save("qr_code_high_recovery.png")
