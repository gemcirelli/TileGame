/*!
 * Handler
 * Version: 1.0.0
 * Date: 2015/08/29
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 */
define(['Class'],function(Class){

    var game,world;

    var Handler = Class.extend({
        init:function(_game){
            game = _game;
        },
        getWidth:function(){
            return game.getWidth();
        },
        getHeight:function(){
            return game.getHeight();
        },
        getKeyManager:function(){
            return game.getKeyManager();
        },
        getMouseManager:function(){
          return game.getMouseManager();
        },
        getGameCamera:function(){
            return game.getGameCamera();
        },
        getWorld:function() {
            return world;
        },
        getDisplay:function(){
            return game.getDisplay();
        },
        setWorld:function(_world){
            world = _world;
        },
        click:function(_btn){
            game.click(_btn);
        }
    });

    return Handler;
});