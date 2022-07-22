/*

    ./main.js

    Entrypoint. This is going to manage
    the whole game process.

    Copyright (c) 2022 Matthew Zhou,
    all right reserved. Licensed in MIT License.

*/

// Input Output.
import Canvas from "io/render.js";
import Input from "io/input.js";

// Game.
import Environ from "game/environ.js";
import Player from "game/player.js";
import Fruit from "game/fruit.js";
 
class Main {

    constructor(config) {

        // Config.
        this.config = config;

        // Canvas.
        this.canvas = new Canvas(this.config.canvasID, this.config.renderFPS);

        // Environ.
        this.environ = new Environ();

        // Player.
        this.player = new Player(this.config.playerColor, this.config.playerGrowth, playerSpeed);

        // Fruit.
        this.fruit = new Fruit(this.config.fruitColor);

        // Input.
        this.input = new Input(this.config.inputSystem, this.player.move);

    };

    updateGame() {

        this.player.update();
        this.fruit.update();

    };

    prepareGame() {

        // Event listener.
        window.addEventListener("resize", this.canvas.resize);
        window.addEventListener("keyup", this.input.keyPress);

        // When updating the canvas, call updateGame().
        this.canvas.update(this.updateGame);

        // Load background.
        this.canvas.loadBackground(this.config.backgroundColor);

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

        canvasID : "canvas",                // Canvas ID.
    
        backgroundColor : "#000000",        // Background color.
        fruitColor : "#ff3503",             // Fruit color.
    
        playerSpeed : 1,                    // Player movement speed.
        playerColor : "#03ff0b",            // Player color.
        playerGrowth : "1",                 // Player growth speed.
    
        renderFPS : "1",                    // FPS.
    
        inputSystem : [119, 97, 115, 100]   // Keybindings. Each number represents a keyboard button.
    
    };

    // Load configs.
    const main = Main(configs);

    // Run.
    main.initGame();

});