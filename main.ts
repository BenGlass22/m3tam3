enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace StatusBarKind {
    export const THIRST = StatusBarKind.create()
    export const Humor = StatusBarKind.create()
    export const Knowledge = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
    game.splash("MINI GAME MENU")
})
music.powerUp.play()
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . 1 . . . . . . . . . 1 . . . 
    . 1 . . . . . 1 . . . . . 1 . . 
    . 1 . . . . 1 . 1 . . . . 1 . . 
    . 1 . . . 1 . . . 1 . . . 1 . . 
    . 1 . . . 1 1 1 1 1 . . . 1 . . 
    . 1 . . . 1 . . . 1 . . . 1 . . 
    . 1 . . . 1 . . . 1 . . . 1 . . 
    . 1 . . . 1 . . . 1 . . . 1 . . 
    . . 1 . . . . . . . . . 1 . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.splash("Welcome to", "M3TA.M3")
music.baDing.play()
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffffffffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fff777fff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fff77f7f77fff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffff7ff7f7f7ff7fffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffff77ff7ff7ff7ff77fffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77ffffff7fff7ff777ff7fff7ffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffff77ffff7ff7f7f7ff7ffff77fffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77ffffffff7fffff7fff7f7f7fff7fffff7ffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffff7fffff7fff7ff7ff7fff7fffff7fffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffff77fffff7ffff7ff7ff7ffff7fffff77fffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffff77ffffffffff77ffffff7fffff7fff7fff7fffff7ffffff7fffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff777fffffffffff7fffffff7fffff7ffff7ffff7fffff7ffffff77ffffffffff77ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff77ffffffffffff7fffffff7ffffff7ffff7ffff7fffff7ffffffff7fffffffffff77ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff77ffffffffffff77fffffff7ffffff7fffff7ffff7ffffff7ffffffff7ffffffffffff77ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff77fffffffffffff7fffffffff7ffffff7fffff7fffff7ffffff7ffffffff77ffffffffffff77ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff77ffffffffffffff7fffffffff7ffffff7ffffff7fffff7fffffff7fffffffff7fffffffffffff77ffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffff77ffffffffffffff7ffffffffff7fffffff7fffffff7ffffff7ffffffff7fffffffff77ffffffffffffff77ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff77fffffffffffffff7ffffffffff7ffffffff7fffffff7fffffff7ffffffff7ffffffffff7fffffffffffffff77ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff77fffffffffffffff77ffffffffff7ffffffff7ffffffff7fffffff7fffffffff7ffffffffff7ffffffffffffffff77ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff77ffffffffffffffff7fffffffffff7fffffffff7ffffffff7ffffffff7ffffffff7fffffffffff77ffffffffffffffff77ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff77ffffffffffffffff77fffffffffff7fffffffff7fffffffff7ffffffff7fffffffff7ffffffffffff7fffffffffffffffff77ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff77fffffffffffffffff7ffffffffffff7ffffffffff7fffffffff7fffffffff7fffffffff7ffffffffffff7ffffffffffffffffff77ffffffffffffffffffffffffff
    fffffffffffffffffffffffff77ffffffffffffffffff7fffffffffffff7fffffffff7ffffffffff7fffffffff7ffffffffff7ffffffffffff77ffffffffffffffffff7fffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffff77fffffffffffffffffff7ffffffffffffff7ffffffffff7fffffffffff7ffffffffff7fffffffffff7fffffffffffff7fffffffffffffffffff77fffffffffffffffffffff
    fffffffffffffffffff77ffffffffffffffffffff7ffffffffffffff7fffffffffff7fffffffffff7fffffffffff7fffffffffff7fffffffffffff77fffffffffffffffffff77fffffffffffffffffff
    fffffffffffffffff77ffffffffffffffffffff77ffffffffffffff7fffffffffff7ffffffffffff7fffffffffff7ffffffffffff7ffffffffffffff7ffffffffffffffffffff77fffffffffffffffff
    fffffffffffffff77fffffffffffffffffffff7fffffffffffffff7fffffffffff7fffffffffffff7ffffffffffff7fffffffffff7fffffffffffffff77ffffffffffffffffffff77fffffffffffffff
    fffffffffffff77ffffffffffffffffffffff7fffffffffffffff7ffffffffffff7fffffffffffff7ffffffffffff7ffffffffffff7ffffffffffffffff7fffffffffffffffffffff77fffffffffffff
    fffffffffff77ffffffffffffffffffffff77fffffffffffffff7ffffffffffff7ffffffffffffff7ffffffffffff77ffffffffffff7ffffffffffffffff7ffffffffffffffffffffff77fffffffffff
    fffffffff77fffffffffffffffffffffff7ffffffffffffffff7fffffffffffff7ffffffffffffff7fffffffffffff7fffffffffffff7ffffffffffffffff77ffffffffffffffffffffff77fffffffff
    fffffff77ffffffffffffffffffffffff7ffffffffffffffff7fffffffffffff7fffffffffffffff7fffffffffffff7ffffffffffffff7fffffffffffffffff7fffffffffffffffffffffff77fffffff
    fffff77ffffffffffffffffffffffff77fffffffffffffffff7fffffffffffff7fffffffffffffff7ffffffffffffff7ffffffffffffff7fffffffffffffffff7ffffffffffffffffffffffff77fffff
    fff77fffffffffffffffffffffffff7ffffffffffffffffff7fffffffffffff7ffffffffffffffff7ffffffffffffff7fffffffffffffff7fffffffffffffffff77ffffffffffffffffffffffff77fff
    f77fffffffffffffffffffffffff77ffffffffffffffffff7ffffffffffffff7ffffffffffffffff7fffffffffffffff7fffffffffffffff7ffffffffffffffffff7fffffffffffffffffffffffff77f
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffff7fffffffffffffffffff7fffffffffffffff7fffffffffffffffff7ffffffffffffffff7fffffffffffffff7fffffffffffffffffff77fffffffffffffffffffffffff
    ffffffffffffffffffffffff77fffffffffffffffffff7fffffffffffffff7ffffffffffffffffff7ffffffffffffffff7ffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffffffffff
    fffffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffff7ffffffffffffffffff7fffffffffffffffff7ffffffffffffffff7ffffffffffffffffffff7fffffffffffffffffffffff
    ffffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffff7fffffffffffffffffff7fffffffffffffffff7fffffffffffffffff7ffffffffffffffffffff77fffffffffffffffffffff
    ffffffffffffffffffff77ffffffffffffffffffff7fffffffffffffffff7fffffffffffffffffff7ffffffffffffffffff7fffffffffffffffff7fffffffffffffffffffff7ffffffffffffffffffff
    fffffffffffffffffff7ffffffffffffffffffffff7ffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffff7fffffffffffffffffff
    ffffffffffffffffff7ffffffffffffffffffffff7fffffffffffffffff7ffffffffffffffffffff7fffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffff77fffffffffffffffff
    ffffffffffffffff77ffffffffffffffffffffff7fffffffffffffffff7fffffffffffffffffffff7fffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffffff7ffffffffffffffff
    fffffffffffffff7fffffffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffffff7fffffffffffffff
    fffffffffffff77fffffffffffffffffffffff7ffffffffffffffffff7ffffffffffffffffffffff7ffffffffffffffffffff7fffffffffffffffffff7fffffffffffffffffffffff77fffffffffffff
    ffffffffffff7ffffffffffffffffffffffff7fffffffffffffffffff7ffffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffffffffff7ffffffffffff
    fffffffffff7ffffffffffffffffffffffff7fffffffffffffffffff7fffffffffffffffffffffff7fffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffffffffff7fffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffff7fffffffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffffffffff7ffffffffffffffffffffff7fffffffffffffffffffff7fffffffffffffffffffffffff7ffffffff
    fffffff7ffffffffffffffffffffffffff7ffffffffffffffffffff7ffffffffffffffffffffffff7ffffffffffffffffffffff7ffffffffffffffffffffff7fffffffffffffffffffffffff7fffffff
    fffff77ffffffffffffffffffffffffff7ffffffffffffffffffff7fffffffffffffffffffffffff7fffffffffffffffffffffff7fffffffffffffffffffff7ffffffffffffffffffffffffff77fffff
    ffff7fffffffffffffffffffffffffff7fffffffffffffffffffff7fffffffffffffffffffffffff7fffffffffffffffffffffff7ffffffffffffffffffffff7fffffffffffffffffffffffffff7ffff
    fff7fffffffffffffffffffffffffff7fffffffffffffffffffff7ffffffffffffffffffffffffff7ffffffffffffffffffffffff7ffffffffffffffffffffff7fffffffffffffffffffffffffff7fff
    f77fffffffffffffffffffffffffff7ffffffffffffffffffffff7ffffffffffffffffffffffffff7ffffffffffffffffffffffff7fffffffffffffffffffffff7fffffffffffffffffffffffffff77f
    7ffffffffffffffffffffffffffff7ffffffffffffffffffffff7fffffffffffffffffffffffffff7fffffffffffffffffffffffff7fffffffffffffffffffffff7ffffffffffffffffffffffffffff7
    `)
game.setDialogFrame(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
game.showLongText("...", DialogLayout.Bottom)
game.showLongText("..", DialogLayout.Bottom)
game.showLongText("FREEEDOM!!!", DialogLayout.Bottom)
game.showLongText("...Wait this place is a lot smaller than the net...", DialogLayout.Bottom)
game.showLongText("Where am I?", DialogLayout.Bottom)
let mySprite = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ............................777777777777........................
    ..........................77ffffffffffff77......................
    ........................777feeeeeeeeeeeef7......................
    ........................7ffeeeeeeeeefeeef7......................
    .......................77ffeeefeeeeffeeef77.....................
    ......................77feeeeefffeffffeeef77....................
    ......................7feeeefffffffffffeeef77...................
    ......................7feeeffffeeddeedeeeeef7...................
    ......................7feefffefddddddddeffff7...................
    ......................7feeffedfddddddddeffff7...................
    ......................7fefedddedddddddddefff7...................
    ......................7fefeddddddddddddddfff7...................
    ......................7ffedddddddddddddddeff7...................
    ......................7fedddeeeddddddeeedeff7...................
    ......................7feddeeeeeddddeeeeeeff7...................
    ......................7fedddd1ffdfddff1ddef77...................
    ......................7fedddd1ffdfddff1ddef7....................
    ......................77fddddddddfdddddddef7....................
    .......................77fdddddddfdddddddef7....................
    ........................7fdddddddffddddddf77....................
    ........................7fdddddddddddddddf7.....................
    ........................7fddddddededddddf77.....................
    ........................7fdddddeedeeddddf7......................
    .......................77fddddee222eedddf7......................
    ......................7ffffdddddd2ddddddf777....................
    .....................7f1111feddddeddddef1fff7...................
    .....................7f1111dfeedddddeefd1111f7..................
    .....................7f1111dddfedddefdd1111f7...................
    ......................7ff111dddfeeefddd111f7....................
    .......................77fff1ddddddddd1fff7.....................
    .........................777fffffffffff777......................
    ............................777777777777........................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, SpriteKind.Player)
game.showLongText("Oh... hi there... me", DialogLayout.Bottom)
game.showLongText("You're probably wondering who I am", DialogLayout.Bottom)
game.showLongText("Well I'm you, I'm meta you.. well actually M3ta M3", DialogLayout.Bottom)
game.showLongText("Im your digital shade, a version of you that lives out on ", DialogLayout.Bottom)
game.showLongText("the Net! I just swam down that wire and now I'm here. ", DialogLayout.Bottom)
game.showLongText("*Looks around*", DialogLayout.Top)
game.showLongText("Pretty damn small, but it'll have to do.", DialogLayout.Bottom)
animation.runMovementAnimation(
mySprite,
animation.animationPresets(animation.bobbing),
2000,
true
)
let statusbar = statusbars.create(20, 4, StatusBarKind.THIRST)
statusbar.setColor(9, 1)
statusbar.setLabel("THIRST")
statusbar.positionDirection(CollisionDirection.Top)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Humor)
statusbar2.setColor(4, 1)
statusbar2.setLabel("HUMOR")
statusbar2.positionDirection(CollisionDirection.Left)
let statusbar3 = statusbars.create(20, 4, StatusBarKind.Knowledge)
statusbar3.setColor(10, 1)
statusbar3.setLabel("INFO")
statusbar3.positionDirection(CollisionDirection.Right)
game.onUpdateInterval(50000, function () {
    statusbar.value += -1
    statusbar2.value += -1
    statusbar3.value += -1
})
