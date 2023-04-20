controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.overlapsWith(player2)) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
        info.changeScoreBy(-1)
    }
})
info.onScore(10, function () {
    game.gameOver(true)
})
let player2: Sprite = null
let player1: Sprite = null
info.setLife(3)
game.setGameOverMessage(true, "YOU WIN!! :D")
game.setGameOverEffect(true, effects.clouds)
info.setScore(0)
scene.setBackgroundImage(assets.image`background`)
player1 = sprites.create(assets.image`player`, SpriteKind.Player)
player1.setPosition(72, 91)
player2 = sprites.create(assets.image`monke`, SpriteKind.Enemy)
player2.setVelocity(100, 85)
player2.setBounceOnWall(true)
