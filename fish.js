/**
 * Creation of the class Fish.
 */
class Fish {
	var xPos;
	var yPos;
	var red;
	var blue;
	var green;
	var size;
	
	/** 
	 * This is the constructor for the Fish, where it sets the class variables
	 * to be equivalent to the corresponding inputs. 
	 */
	Fish(color, x, y, sz) {
		xPos = x;
		yPos = y;
		red = color[0];
		blue = color[1];
		green = color[2];
		size = sz;
	}
	
	/** 
	 * This will draw with the correct placements, along with giving the fish
	 * its proper colors.
	 */
	void fishDraw() {
		// ... 
	}
	
	/**
	 * When called, it moves the fish appropriately. 
	 */
	 void move() {
	 	// ...
	 }
}


/* Creating the Fish variable to use in setUp(). */
var fish;

/* Set up the starting the screen, what it should look whenever we refresh the page. */
void setUp() {
	fish = new Fish([255,0,0], 100, 100, "big");
}

/* Constantly refreshes the frame/canvas so that it updates what the screen should look like. */
void draw() {
	fish.drawFish();
}