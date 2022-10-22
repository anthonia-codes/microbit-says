let random_number = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("MB SAYS")
    random_number = randint(1, 3)
    if (random_number == 1) {
        basic.showString("DANCE")
    } else if (random_number == 2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString("JUMPING JACKS")
    }
})
input.onButtonPressed(Button.B, function () {
    random_number = randint(1, 3)
    if (random_number == 1) {
        basic.showString("SIT")
    } else if (random_number == 2) {
        basic.showString("FROWN")
    } else {
        basic.showString("SHRUG")
    }
})
