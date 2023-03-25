function d1 () {
    y = 15
    for (let x = 0; x <= 19; x++) {
        pix(strip, x, y, neopixel.rgb(0, 255, 0));
for (let z = 1; z <= 10 && x - z >= 0; z++) {
            pix(strip, x - z, y, neopixel.rgb(0, 250 - z * 25, 0));
        }
strip.show()
        basic.pause(200)
    }
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4000; index++) {
        strip.showRainbow(x2, x2 + 270)
        x2 += 5
        basic.pause(100)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 255, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    pix(strip, 0, 0, neopixel.rgb(255, 0, 0));
pix(strip, 1, 1, neopixel.rgb(120, 120, 0));
pix(strip, 19, 0, neopixel.rgb(0, 255, 0));
pix(strip, 19, 19, neopixel.rgb(0, 255, 255));
pix(strip, 0, 19, neopixel.rgb(0, 0, 255));
strip.show()
    d1()
})
let x2 = 0
let strip: neopixel.Strip = null
let y = 0
function pix(s: neopixel.Strip, x: number, y: number, color: number) {
    if (y % 2 == 1) {
        x = 19 - x;
    }
    strip.setPixelColor(20 * y + x, color);
}
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
strip = neopixel.create(DigitalPin.P0, 400, NeoPixelMode.RGB)
let range = strip.range(0, 400)
strip.setMatrixWidth(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
serial.redirectToUSB()
serial.writeNumber(0)
x2 = 0
