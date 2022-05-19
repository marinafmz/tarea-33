input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C D E F G A B C5 ", 1503)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
