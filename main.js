import Canvas from "render.js";
import { Game, Player, Fruit } from "game.js";
import Input from "input.js";
import Update from "update.js";

 
class SnakeGame {

    constructor(config) {

        // Config.
        this.config = config;

        // Technical stuff.
        this.canvas = new Canvas(this.config.canvasID);
        this.update = new Update(this.config.renderFPS);

        // Game stuff.
        this.game = new Game(this.config.backgroundColor);
        this.player = new Player(this.config.playerColor, this.config.playerGrowth, playerSpeed)
        this.fruit = new Fruit(this.config.fruitColor);

    };

};

// Configs.


// Run.
window.addEventListener('load', (event) => {

    let config = {

        canvasID : "canvas",
    
        backgroundColor : "#000000",
        fruitColor : "#ff3503",
    
        playerSpeed : 1,
        playerColor : "#03ff0b",
        playerGrowth : "1",
    
        renderFPS : "1",
    
        inputSystem : "WASD"
    
    };

    // Load configs.
    const main = Main(config);

    // Link events.

});