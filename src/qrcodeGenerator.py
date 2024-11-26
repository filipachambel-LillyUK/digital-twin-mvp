import qrcode

link = "https://demandiq.d2mdvxdvxitg8p.amplifyapp.com/"

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

qr.add_data(link)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="transparent")

img.save("demandiq_qrcode.png")