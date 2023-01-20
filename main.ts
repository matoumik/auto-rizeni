radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        if (value > 900) {
            wuKong.setAllMotor(-30, 30)
            stop = 0
            strip2.showColor(neopixel.colors(NeoPixelColors.White))
            strip3.showColor(neopixel.colors(NeoPixelColors.White))
            strip2.setBrightness(255)
            strip3.setBrightness(255)
            range.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (value < 100) {
            wuKong.setAllMotor(30, -30)
            stop = 0
            strip2.showColor(neopixel.colors(NeoPixelColors.Red))
            strip3.showColor(neopixel.colors(NeoPixelColors.Red))
            strip2.setBrightness(128)
            strip3.setBrightness(128)
            range.showColor(neopixel.colors(NeoPixelColors.White))
        } else {
            stop = 1
        }
    } else if (name == "x") {
        if (value > 900) {
            wuKong.setAllMotor(20, 20)
            stop2 = 0
        } else if (value < 100) {
            wuKong.setAllMotor(-20, -20)
            stop2 = 0
        } else {
            stop2 = 1
        }
    } else if (name == "act") {
        if (value == 0) {
            basic.showIcon(IconNames.SmallSquare)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        } else if (value == 1) {
            basic.showIcon(IconNames.Square)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 90)
        }
    }
    if (stop == 1 && stop2 == 1) {
        wuKong.stopAllMotor()
    }
})
let stop2 = 0
let stop = 0
let range: neopixel.Strip = null
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
radio.setGroup(42)
basic.showIcon(IconNames.Happy)
wuKong.setLightMode(wuKong.LightMode.BREATH)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let strip4 = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
strip4.showRainbow(1, 360)
range = strip.range(0, 2)
strip3.setBrightness(128)
