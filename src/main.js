/*

    ./main.js

    Entrypoint. This is going to manage
    the whole game process.

    Copyright (c) 2022 Matthew Zhou,
    all right reserved. Licensed in MIT License.

*/

import Canvas from "render.js";
import Game from "environ.js";
 
class Main {

    constructor(config) {

        // Config.
        this.config = config;

        // Canvas.
        this.canvas = new Canvas(this.config.canvas.canvasID);

        // Game.
        this.game = new Game(this.config.game);

    };

    updateGame() {

        // Update the game state.
        this.game.update();

    };

    prepareGame() {

        // Event listener.
        window.addEventListener("resize", this.canvas.resize);
        window.addEventListener("keyup", this.input.keyPress);

        // When updating the canvas, call updateGame().
        this.canvas.linkUpdate(this.updateGame);

    };

    initGame() {

        // Prepare the game.
        this.prepareGame();

        // Start the engine.
        this.canvas.start();

    };

};

// Run.
window.addEventListener('load', (event) => {

    // Configs.
    let configs = {

        canvas : {
            canvasID          : "canvas",            // Canvas ID.
            renderFPS         : "1000 / 30"          // Render FPS speed.
        },

        game : {
            backgroundColor   : "#000000",           // Background color.
            fruitColor        : "#fff3503",          // Fruit color.
            startingLength    : 2,                   // Player length,
            playerColor       : "#03ff0b",           // Player color.
            growthSpeed       : 1,                   // Player growth speed.
            movementSpeed     : 1,                   // Player movement speed.
            keybindings       : [119, 97, 115, 100], // Input keybindings.
            startingPosition  : [0, 0],              // Starting position.
            startingDirection : "right",             // Starting direction.
            resolution        : ["fit", "fit"]       // Resolution.
        }

    };

    // Load configs.
    const main = Main(configs);

    // Run.
    main.initGame();

});