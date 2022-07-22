/*

    ./io/input.js

    This file handles the input 
    keybindins. Simple as that.

    Copyright (c) 2022 Matthew Zhou,
    all right reserved. Licensed in MIT License.

*/

export class Input {

    constructor(inputSystem, move) {

        this.inputSystem = inputSystem;
        this.move = move;

    };

    keyPress(event) {

        // Check the keyPress event. The one I typed in main.js is "WASD". 

        // Up.
        if (event.keyCode == this.inputSystem[0]) {
            this.move.up();

        // Left.
        } else if (event.keyCode == this.inputSystem[1]) {
            this.move.left();

        // Down.
        } else if (event.keyCode == this.inputSystem[2]) {
            this.move.down();

        // Right.
        } else if (event.keyCode == this.inputSystem[3]) {
            this.move.right();

        // Other button.
        } else {};

    };

};