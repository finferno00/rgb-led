input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P2, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.analogWritePin(AnalogPin.P0, 255)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 255)
})
pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
pins.analogWritePin(AnalogPin.P0, 255)
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P2, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 255)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 255)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
})
