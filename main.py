def on_button_pressed_a():
    global x
    if x != 0:
        led.unplot(x, 4)
        x += -1
        led.plot(x, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x
    if x != 4:
        led.unplot(x, 4)
        x += 1
        led.plot(x, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

yaléa = 0
xaléa = 0
x = 0
score = 0
x = 2
led.plot(x, 4)

def on_forever():
    global xaléa, yaléa, score
    xaléa = randint(0, 4)
    yaléa = 0
    led.plot(xaléa, yaléa)
    basic.pause(200)
    for index in range(4):
        led.unplot(xaléa, yaléa)
        yaléa += 1
        led.plot(xaléa, yaléa)
        basic.pause(200)
    if xaléa == x:
        score = score + 1
    else:
        basic.pause(500)
        basic.show_string("Score :")
        basic.show_number(score)
basic.forever(on_forever)
