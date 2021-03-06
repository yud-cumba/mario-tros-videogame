// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`20000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000002020500000000000000000000000000000000000000000000000000000002030303030302000000000000000000000000000000000000000000000000000303030303030300000000000000000000000000000000000000000000000203030303030303030302000000000000000000000000000000000000000203030003030303030303030303020000000000000000000000000000000000030000000003030303030303030303030000000000000000000000000000020300000303030303030303030303030303020000000000000000000000000000000303030303030303030303030303030303030200000000000001010101010101010101010101010401010101010104010404010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
................................
................................
.............222................
...........2.....2..............
................................
.........2.........2............
.......22...........22..........
................................
.....2.................2........
...2...................2.2......
2222............................
................................
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.oceanDepths5,myTiles.tile4,myTiles.tile5,sprites.builtin.oceanDepths0,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000010101000000000000000000000000000000000000000000000000000002000001000000000000000000000000000000020202020202020202020202020205000101010000000000000000000000000202020202020403000000000004020005010000000000000000000000000002020202020202010101010000000402000005000000000000000000000000020606020202020200000000010000000200000005000000000101010101010101010101010101010101010404010102010101010101010101`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 . . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 . . . . . . . . 2 . 2 . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . 2 . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.dungeon.chestClosed,myTiles.tile8,myTiles.tile3,myTiles.tile2], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000010101010101010001010101010101010000000000000101010000000000000001010101010000000000010101000000000000000100010101000100010100000000000001000000000001000101010001010101010201020201000000010101010000000000010000010000000101010100010101010100000100000000000001000100000001000001010000000000010001000000010000000101010101000100010000000101000000000000010101000100000000010100000000000000010001000000000001010100000000030100010000000000000001010101010101010100000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
. . . . . . 2 2 2 . . . . . . . 
2 2 2 2 2 . . . . . 2 2 2 . . . 
. . . . 2 . 2 2 2 . 2 . 2 2 . . 
. . . . 2 . . . . . 2 . 2 2 2 . 
2 2 2 2 2 . 2 . . 2 . . . 2 2 2 
2 . . . . . 2 . . 2 . . . 2 2 2 
2 . 2 2 2 2 2 . . 2 . . . . . . 
2 . 2 . . . 2 . . 2 2 . . . . . 
2 . 2 2 . . 2 . . . 2 2 2 2 2 . 
2 . 2 . . . 2 2 . . . . . . 2 2 
2 . 2 . . . . 2 2 . . . . . . . 
2 . 2 . . . . . 2 2 2 . . . . . 
2 . 2 . . . . . . . 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,myTiles.tile4], TileScale.Sixteen);
            case "level7":
            case "level7":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level9":
            case "level9":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level8":
            case "level8":return tiles.createTilemap(hex`2300080003030303020403030303030303030302020303030303030303030303030302030303030303030303020202020303030303030202030303030303030202020202020303030303030303030303030303030203030303020203030303030302030303030303030303030303030303030303030303030202020202020202020202020303030303030303030303030303030303030303030202020202020202020202020202020203030303030303030303030303030303030302020202020202020202020202020202020203030303030303030303030303030303020202020202020202020202020202020202020203030303030303030101010101010100010101010101010101010101010101010101010101010101010101`, img`
. . . . 2 . . . . . . . . . . 2 2 . . . . . . . . . . . . . 2 . . . . 
. . . . . 2 2 2 2 . . . . . . 2 2 . . . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile9,myTiles.tile10,sprites.dungeon.collectibleBlueCrystal,myTiles.tile11], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`23000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020000020202000000000600000000000000000000000000050505050505050500000000000000000000000000010000000000000000000000000505050505050505050000000000000000000000000000000000000000000000000005050505050505050505000000000000000000000000000000000000000000000000050505050505050505050500000000000000000000000000000000000000000000000505050505050505050505050303030303030303030303030303000000000000000005050505050505050505050505030303030303030303030303030300000004040404040404040404040404040404040404040404040404040404040404040400`, img`
...................................
...................................
...........22222222................
..........222222222.222..222..222..
.........2222222222................
........22222222222................
.......222222222222................
......2222222222222................
.222222222222222222222222222222222.
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile7,myTiles.tile8,sprites.castle.tileGrass2,sprites.builtin.coral5,myTiles.tile9], TileScale.Sixteen);
            case "level10":
            case "level10":return tiles.createTilemap(hex`2300080004040404040404040404040404040404040404040404040404040404040000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000101010100010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 
. 2 . . . . . . . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
2 . . . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile9,myTiles.tile13,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
