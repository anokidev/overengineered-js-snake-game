/*

    ./game/environ.js

    This file handles the game's
    environment.

    Copyright (c) 2022 Matthew Zhou,
    all right reserved. Licensed in MIT License.

*/

class Game {

    constructor(config) {

        this.config = config;

    };

    initGame(canvas) {

        // Context.
        this.context = canvas.newContext(
            config.background,
            config.resolution
        );

        // Player.
        this.player  = canvas.newGrids(
            config.startingPosition, 
            config.startingLength,
            config.playerColor
        );

    };

    keyPressHandler(event) {

        // Check the keyPress event. The one I typed in main.js is "WASD". 

        // Up.
        if (event.keyCode == this.inputSystem[0]) {
            this.player.updateDirection("up");
            this.player.updateGrids("add", config.growthSpeed);

        // Left.
        } else if (event.keyCode == this.inputSystem[1]) {
            this.player.updateDirection("left");
            this.player.updateGrids("add", config.growthSpeed);

        // Down.
        } else if (event.keyCode == this.inputSystem[2]) {
            this.player.updateDirection("down");
            this.player.updateGrids("add", config.growthSpeed);

        // Right.
        } else if (event.keyCode == this.inputSystem[3]) {
            this.player.updateDirection("right");
            this.player.updateGrids("add", config.growthSpeed);

        // Other button.
        } else {};

    };

};