/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Oct 2023
 * This program shows a while loop
*/

// variables
let loopCounter = 0
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// run loop
input.onButtonPressed(Button.A, function () {
  loopCounter = 4
  basic.clearScreen()
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))

  // 4 neopixels
  while (loopCounter >= 0) {
    basic.showNumber(loopCounter)
    neopixelStrip.show()
    pause(1000)

    loopCounter = loopCounter - 1
    neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
  }
})
