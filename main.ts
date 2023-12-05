let màu_đèn = 0
NPNLCD.LcdInit()
let giờ = 0
let phút = 0
let giây = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 900) {
        if (pins.digitalReadPin(DigitalPin.P10) == 0) {
            pins.digitalWritePin(DigitalPin.P16, 0)
            if (màu_đèn == 0) {
                pins.digitalWritePin(DigitalPin.P5, 1)
                pins.digitalWritePin(DigitalPin.P8, 0)
            } else {
                pins.digitalWritePin(DigitalPin.P5, 0)
                pins.digitalWritePin(DigitalPin.P8, 1)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P16, 1)
            if (màu_đèn == 0) {
                pins.digitalWritePin(DigitalPin.P5, 1)
                pins.digitalWritePin(DigitalPin.P8, 0)
            } else {
                pins.digitalWritePin(DigitalPin.P5, 0)
                pins.digitalWritePin(DigitalPin.P8, 1)
            }
        }
    } else {
        if (pins.digitalReadPin(DigitalPin.P10) == 0) {
            pins.digitalWritePin(DigitalPin.P16, 1)
            if (màu_đèn == 0) {
                pins.digitalWritePin(DigitalPin.P5, 0)
                pins.digitalWritePin(DigitalPin.P8, 0)
            } else {
                pins.digitalWritePin(DigitalPin.P5, 0)
                pins.digitalWritePin(DigitalPin.P8, 0)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P16, 1)
            if (màu_đèn == 0) {
                pins.digitalWritePin(DigitalPin.P5, 0)
                pins.digitalWritePin(DigitalPin.P8, 0)
            } else {
                pins.digitalWritePin(DigitalPin.P5, 0)
                pins.digitalWritePin(DigitalPin.P8, 0)
            }
        }
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        màu_đèn = 1
    } else {
        màu_đèn = 0
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        giây += 1
        if (giây >= 60) {
            phút += 1
            giây = 0
        }
        if (phút >= 60) {
            giờ += 1
            phút = 0
            if (giờ >= 24) {
                giờ = 0
            }
        }
        basic.pause(1000)
    }
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        giờ = 0
        phút = 0
        giây = 0
    }
    if (giờ < 10) {
        NPNLCD.ShowNumber(0, 4, 0)
        if (giờ == 0) {
            NPNLCD.ShowNumber(0, 5, 0)
        } else {
            NPNLCD.ShowNumber(giờ, 5, 0)
        }
    } else {
        NPNLCD.ShowNumber(giờ, 4, 0)
    }
    if (phút < 10) {
        NPNLCD.ShowNumber(0, 7, 0)
        if (phút == 0) {
            NPNLCD.ShowNumber(0, 8, 0)
        } else {
            NPNLCD.ShowNumber(phút, 8, 0)
        }
    } else {
        NPNLCD.ShowNumber(phút, 7, 0)
    }
    if (giây < 10) {
        NPNLCD.ShowNumber(0, 10, 0)
        if (giây == 0) {
            NPNLCD.ShowNumber(0, 11, 0)
        } else {
            NPNLCD.ShowNumber(giây, 11, 0)
        }
    } else {
        NPNLCD.ShowNumber(giây, 10, 0)
    }
    NPNLCD.ShowString(":", 6, 0)
    NPNLCD.ShowString(":", 9, 0)
})
