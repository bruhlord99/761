controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.setVolume(255)
    music.pewPew.play()
    music.rest(music.beat(BeatFraction.Breve))
    mySprite2.x += 5
    animation.runImageAnimation(
    mySprite2,
    assets.animation`myAnim0`,
    200,
    false
    )
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    200,
    false
    )
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ........ccccc...................
    ......ccbbbbbc..................
    ....ccddbbbbbbf.................
    ...cbbbddbbffbf.................
    ....ffffdbbffbff................
    .......fbbbbbbbf................
    .......fbbbbbbbff...............
    ......ffbbbbbbbbfff.............
    ......f6bbbbbb663ddcc...........
    .....cc66bbbb666dddddc..........
    .....cd36666663dddddddc.........
    .....cddd3333dbddddddbcc........
    .....cddddddddbdddddbbddc.......
    .....cddddddddbbdddbbdddbc......
    ......cddddddddbbdbbddddbbccc...
    ......ccddddddddbbbbcccccbbbcc..
    .......ccddddddddddddddbccffff..
    ........cccbddccbddddbbfff......
    ........c333bb333cbbfff.........
    ........c33cc33cc3fff...........
    `, SpriteKind.Enemy)
keyboard.modifierKey(KeyboardModifierKey.Control, KeyboardKeyEvent.Up)
keyboard.modifierKey(KeyboardModifierKey.Alt, KeyboardKeyEvent.Down)
