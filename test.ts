let item = 0
input.onButtonPressed(Button.AB, function () {
    item = 0
    twodigit.showNumber(item)
})
input.onButtonPressed(Button.A, function () {
    item += -1
    if (item < 0) {
        item = 0
    }
    twodigit.showNumber(item)
})
input.onButtonPressed(Button.B, function () {
    item += 1
    if (item > 99) {
        item = 99
    }
    twodigit.showNumber(item)
})
item = 0
twodigit.showNumber(item)
basic.forever(function () {
	
})
