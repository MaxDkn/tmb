import segno

qrcode = segno.make_qr("https://tmb-n7yw.onrender.com/")
qrcode.save(
    "wide_border_qrcode.png",
    scale=5,
    border=0,
)