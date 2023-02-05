input.onLogoEvent(TouchButtonEvent.Touched, function () {
    serial.writeLine("aaa")
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    for (let col = 0; col <= 19; col++) {
        serial.writeValue("x", col)
        for (let row = 0; row <= 14; row++) {
            strip.setMatrixColor(col, row, neopixel.colors(NeoPixelColors.Red))
            serial.writeValue("y", row)
        }
        strip.show()
        basic.pause(10)
    }
    for (let indeks = 0; indeks <= 10; indeks++) {
        strip.setBrightness(255 - indeks * 25)
        strip.show()
        basic.pause(200)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    lista = []
    for (let col = 0; col <= 300; col++) {
        lista.push(neopixel.rgb(col % 255, col * 3 % 255, col * 5 % 255))
    }
    for (let indeks = 0; indeks <= lista.length; indeks++) {
        strip.setPixelColor(indeks, lista[indeks])
    }
    strip.show()
})
let lista: number[] = []
let strip: neopixel.Strip = null
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
strip = neopixel.create(DigitalPin.P1, 300, NeoPixelMode.RGB)
let range = strip.range(0, 300)
strip.setMatrixWidth(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
serial.redirectToUSB()
serial.writeNumber(0)
basic.forever(function () {
	
})
