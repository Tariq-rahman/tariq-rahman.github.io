import GameObject from "./gameObject.js";

export default class Bird extends GameObject{
    flyingSprites = [];
    constructor(canvas) {
        // spawn off canvas
        super(canvas, canvas.canvasWidth + 300,  20, 46, 40, true);

        this.flyingSprites.push(document.getElementById("bird-1"))
        this.flyingSprites.push(document.getElementById("bird-2"))
        this.setAnimationSprites(this.flyingSprites)
        this.setActiveSprite(this.flyingSprites[1]);
        this.animation = true;

        // Set velocity to move left
        this.setVelocity(-5,0)
        this.animationDelayCoefficient = 4;
    }
}