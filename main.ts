radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("pato")
})
radio.setGroup(23)
