input.onButtonPressed(Button.A, function () {
    Player_1.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Player_1.change(LedSpriteProperty.Y, 1)
})
let Player_1: game.LedSprite = null
music.playMelody("C D E D F C A E ", 120)
basic.showString("Pong!")
Player_1 = game.createSprite(0, 2)
let AI = game.createSprite(2, 2)
let Ball = game.createSprite(4, 2)
basic.forever(function () {
	
})
