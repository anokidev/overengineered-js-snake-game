/*

    ./io/canvas.js

    This file handles the canvas.

    Copyright (c) 2022 Matthew Zhou,
    all right reserved. Licensed in MIT License.

*/

class Main {

    constructor() {

        // Canvas and context.
        this.canvas = document.querySelector("#canvas");
        this.context = this.canvas.getContext("2d");

        // Set size.
        this.context.canvas.width = window.innerWidth;
        this.context.canvas.height = window.innerHeight;

        // Size alias.
        this.contextWidth = this.context.canvas.width;
        this.contextHeight = this.context.canvas.height;

        // Fill the canvas.
        this.context.fillRect(0, 0, this.contextWidth, this.contextHeight);

        // Divide the canvas into grids.
        this.gridWidth = this.contextWidth / 10;
        this.gridHeight = this.contextHeight / 10;

    };

    background(color) {

        // Set background.
        this.context.fillStyle = color;

    };

    run(backgroundColor) {

        // Initialize the context.
        this.background(backgroundColor);

    };

};