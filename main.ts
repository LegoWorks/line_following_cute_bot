cuteBot.trackEvent(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine, function () {
    if (line_follower == true) {
        cuteBot.motors(20, 0)
    }
})
cuteBot.trackEvent(cuteBot.MbPins.Left, cuteBot.MbEvents.LoseLine, function () {
    if (line_follower == true) {
        cuteBot.motors(0, 20)
    }
})
let line_follower = false
line_follower = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        line_follower = !(line_follower)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (line_follower == false) {
        cuteBot.stopcar()
    }
})
