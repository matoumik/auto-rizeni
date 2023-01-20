def on_received_value(name, value):
    global stop, stop2
    if name == "y":
        if value > 900:
            wuKong.set_all_motor(-30, 30)
            stop = 0
        elif value < 100:
            wuKong.set_all_motor(30, -30)
            stop = 0
        else:
            stop = 1
    elif name == "x":
        if value > 900:
            wuKong.set_all_motor(20, 20)
            stop2 = 0
        elif value < 100:
            wuKong.set_all_motor(-20, -20)
            stop2 = 0
        else:
            stop2 = 1
    if stop == 1 and stop2 == 1:
        wuKong.stop_all_motor()
radio.on_received_value(on_received_value)

stop2 = 0
stop = 0
radio.set_group(42)
basic.show_icon(IconNames.HAPPY)
wuKong.set_light_mode(wuKong.LightMode.BREATH)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)