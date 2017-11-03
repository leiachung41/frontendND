// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    /* Setting the Enemy initial location.
    Setting the Enemy speed. */
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 250) + 100);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    /* Updates the Enemy location.
    Handles collision with the Player. */
    this.x += this.speed * dt;

    if (this.x >= 505) { //canvas.width = 505
        this.x = 0;
        this.speed = Math.floor((Math.random() * 100) + 50);
    }

    // handling collision with the enemies
    if( player.x >= this.x -40 && player.x <=this.x + 40 ){
        if( player.y >= this.y -40 && player.y <=  this.y+40 ){
            player.x = 200;
            player.y = 400;
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    /* Setting the Player initial location. */
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function(dt) {
    /* similar to the one for the Enemy. */
    this.y += this.speed * dt;

    if (this.y >= 606) { //canvas.width = 505
        this.y = 0;
        this.speed = Math.floor((Math.random() * 100) + 50);
    }
};
Player.prototype.render = function() {
    /* use the code from the rener method for the Enemy. */
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(allowedkeys) {
    /* should receive user input, allowedkeys
    (the key which was pressed) and the move the player
    according to that input.
    Left key should move the player to the left,
    right key to the right , up should move the player up
    and down should move the player down.
    Recall that the player cannot move off screen.
    If the player reaches the water, the game should be reset
    by moving the player back to the initial location.
    */
    if (37 in allowedkeys) { //move left
        player.x -= player.speed;
    } if (38 in allowedkeys) { //move up
        player.y -= player.speed;
    } if (39 in allowedkeys) { //move right
        player.x += player.speed;
    } if (40 in allowedkeys) { //move down
        player.y += player.speed;
    }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/* Creating sevreal new Enemies objects and placing them
in an array called allenemies. */
var allEnemies = [
    new Enemy(-100, 115),
    new Enemy(-200, 25),
    new Enemy(-100, 70),
    new Enemy(-80, 190),
    new Enemy(-50, 200)
];

/* Creating a new Player object */
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
