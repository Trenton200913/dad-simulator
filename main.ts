scene.onOverlapTile(SpriteKind.Player, assets.tile`Milk0`, function (sprite, location) {
    game.setGameOverMessage(true, "You came back with the milk")
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `],
    500,
    true
    )
    controller.moveSprite(mySprite, 200, 200)
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(false, "YOU NEVER CAME BACK WITH THE MILK }:(")
    game.gameOver(false)
})
let mySprite: Sprite = null
game.splash("Dad simulator", "(C) 2023 Goofy Ahh uncle productions Interactive")
mySprite = sprites.create(assets.image`dad`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(1000)
