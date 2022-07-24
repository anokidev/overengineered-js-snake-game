/*

    ./io/canvas.js

    This file handles the canvas.

    Copyright (c) 2022 Matthew Zhou,
    all right reserved. Licensed in MIT License.

*/

// Creates a new exception type:
function resolutionError(){ 
    Error.apply(this, arguments); this.name = "ResolutionError"; 
};

FatalError.prototype = Object.create(Error.prototype);

// Context class.
class Context {

    constructor(background, resolution, context) {

        this.context = context;

        // Set background.
        this.context.fillStyle = background;

        // Initial variable.
        this.width  = 0;
        this.height = 0;

        // Check if the resolution config is correct.
        if (resolution.length != 2) {
            throw new resolutionError("Invalid resolution config!");
        };

        // Check the width config.
        if (resolution[0] == "fit") {
            this.width = window.innerWidth;
        };

        // Check the height config.
        if (resolution[1] == "fit") {
            this.height = window.innerHeight;
        };

        // Fill the context.
        this.context.fillRect(0, 0, this.width, this.height);

    };

};

// Canvas class.
class Canvas {

    constructor(id) {

        this.canvas = document.querySelector(id);
        this.context = this.canvas.getContext("2d");

    };

    newContext(background, resolution) {

        context = new Context(background, resolution, this.context);

        return context;

    };

    newGrids(position, length, color, direction) {

        // Draw the tail part.
        this.drawGrid(position[0], position[1]);

        // Parse the length.
        if (length != 1) {
            const parsedLength = length - 1;
        } else {
            const parsedLength = 1;
        };

        // Draw the rest of the player's body.
        if (direction == "X") {
            
    
        };

    };

};