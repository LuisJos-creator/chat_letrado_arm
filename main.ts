radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("MENSAJE")
    if (receivedNumber == 1) {
        basic.showString("A")
    } else if (receivedNumber == 2) {
        basic.showString("B")
    } else if (receivedNumber == 3) {
        basic.showString("C")
    } else if (receivedNumber == 4) {
        basic.showString("D")
    } else if (receivedNumber == 5) {
        basic.showString("E")
    } else if (receivedNumber == 6) {
        basic.showString("F")
    } else if (receivedNumber == 7) {
        basic.showString("G")
    } else if (receivedNumber == 8) {
        basic.showString("H")
    } else if (receivedNumber == 9) {
        basic.showString("I")
    } else if (receivedNumber == 10) {
        basic.showString("J")
    } else if (receivedNumber == 11) {
        basic.showString("K")
    } else if (receivedNumber == 12) {
        basic.showString("L")
    } else if (receivedNumber == 13) {
        basic.showString("M")
    } else if (receivedNumber == 14) {
        basic.showString("M")
    } else if (receivedNumber == 15) {
        basic.showString("N")
    } else if (receivedNumber == 16) {
        basic.showLeds(`
            . # # # .
            . . . . .
            # # . . #
            # . # . #
            # . . # #
            `)
    } else if (receivedNumber == 17) {
        basic.showString("O")
    } else if (receivedNumber == 18) {
        basic.showString("P")
    } else if (receivedNumber == 19) {
        basic.showString("Q")
    } else if (receivedNumber == 20) {
        basic.showString("R")
    } else if (receivedNumber == 21) {
        basic.showString("S")
    } else if (receivedNumber == 22) {
        basic.showString("T")
    } else if (receivedNumber == 23) {
        basic.showString("U")
    } else if (receivedNumber == 24) {
        basic.showString("V")
    } else if (receivedNumber == 25) {
        basic.showString("W")
    } else if (receivedNumber == 26) {
        basic.showString("X")
    } else if (receivedNumber == 27) {
        basic.showString("Y")
    } else if (receivedNumber == 28) {
        basic.showString("Z")
    } else if (receivedNumber == 0) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    codigo = codigo - 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(codigo)
})
input.onButtonPressed(Button.B, function () {
    codigo = codigo + 1
})
let codigo = 0
radio.setGroup(1)
codigo = 1
basic.forever(function () {
    if (codigo > 28) {
        codigo = 1
    }
    if (codigo < 0) {
        codigo = 28
    }
})
basic.forever(function () {
    if (codigo == 1) {
        basic.showString("A")
    } else if (codigo == 2) {
        basic.showString("B")
    } else if (codigo == 3) {
        basic.showString("C")
    } else if (codigo == 4) {
        basic.showString("D")
    } else if (codigo == 5) {
        basic.showString("E")
    } else if (codigo == 6) {
        basic.showString("F")
    } else if (codigo == 7) {
        basic.showString("G")
    } else if (codigo == 8) {
        basic.showString("H")
    } else if (codigo == 9) {
        basic.showString("I")
    } else if (codigo == 10) {
        basic.showString("J")
    } else if (codigo == 11) {
        basic.showString("K")
    } else if (codigo == 12) {
        basic.showString("L")
    } else if (codigo == 13) {
        basic.showString("M")
    } else if (codigo == 14) {
        basic.showString("M")
    } else if (codigo == 15) {
        basic.showString("N")
    } else if (codigo == 16) {
        basic.showLeds(`
            . # # # .
            . . . . .
            # # . . #
            # . # . #
            # . . # #
            `)
    } else if (codigo == 17) {
        basic.showString("O")
    } else if (codigo == 18) {
        basic.showString("P")
    } else if (codigo == 19) {
        basic.showString("Q")
    } else if (codigo == 20) {
        basic.showString("R")
    } else if (codigo == 21) {
        basic.showString("S")
    } else if (codigo == 22) {
        basic.showString("T")
    } else if (codigo == 23) {
        basic.showString("U")
    } else if (codigo == 24) {
        basic.showString("V")
    } else if (codigo == 25) {
        basic.showString("W")
    } else if (codigo == 26) {
        basic.showString("X")
    } else if (codigo == 27) {
        basic.showString("Y")
    } else if (codigo == 28) {
        basic.showString("Z")
    } else if (codigo == 0) {
        basic.clearScreen()
    }
})
