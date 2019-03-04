//% weight=100 color=#0fbc11 icon="\u0023" block="two digit"
namespace twodigit {

    const numFont = [
        ["11", "11", "11", "11", "11"],   //0
        ["01", "01", "01", "01", "01"],   //1
        ["11", "01", "11", "10", "11"],   //2
        ["11", "01", "11", "01", "11"],   //3
        ["10", "10", "11", "01", "01"],   //4
        ["11", "10", "11", "01", "11"],   //5
        ["11", "10", "11", "11", "11"],   //6
        ["11", "01", "01", "01", "01"],   //7
        ["11", "11", "00", "11", "11"],   //8
        ["11", "11", "11", "01", "11"],   //9
        ["00", "00", "11", "00", "00"]    //-
    ]

    /**
     * show number in two digit
     * @param v describe value here, eg: 0
     */
    //% blockId=showNumber block="two digit  %v"
    export function showNumber(v: number): void {
        basic.clearScreen()
        if (v < -9) {
            basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            return
        }
        let n2 = 0
        if (v < 0) {
            n2 = 10
        } else {
            n2 = Math.floor(v % 100 / 10)
        }
        let n1 = Math.abs(Math.floor(v % 10))

        for (let y = 0; y < 5; y++) {
            if (n2 != 0) {
                for (let x = 0; x < 2; x++) {
                    if ((numFont[n2][y]).substr(x, 1) == "1") {
                        led.plot(x, y)
                    }
                }
            }
            for (let z = 3; z < 5; z++) {
                if ((numFont[n1][y]).substr(z - 3, 1) == "1") {
                    led.plot(z, y)
                }
            }
        }


    }
}
