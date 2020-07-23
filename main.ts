input.onButtonPressed(Button.A, function () {
    if (x != 0) {
        led.unplot(x, 4)
        x += -1
        led.plot(x, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x != 4) {
        led.unplot(x, 4)
        x += 1
        led.plot(x, 4)
    }
})
let score = 0
let yaléa = 0
let xaléa = 0
let x = 0
x = 2
basic.forever(function () {
    led.plot(x, 4)
    basic.pause(1000)
    xaléa = randint(0, 4)
    yaléa = 0
    led.plot(xaléa, yaléa)
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        led.unplot(xaléa, yaléa)
        yaléa += 1
        led.plot(xaléa, yaléa)
        basic.pause(200)
    }
    if (xaléa == x) {
        score = score + 1
        music.ringTone(131)
    } else {
        music.ringTone(988)
        basic.pause(500)
        basic.showString("Score :")
        basic.showNumber(score)
        basic.pause(5000)
        score = 0
        basic.clearScreen()
    }
})
