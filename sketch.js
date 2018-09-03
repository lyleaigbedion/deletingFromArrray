var collectibles = [];
 
function setup() {
	createCanvas(windowWidth, windowHeight);
 
	for(var i = 0; i < 1000; i++) {
		collectibles.push(new Collectible());
	}
 
 
}
 
function draw() {
	background(255);
 
	// run thru every collectible in reverse
	for(var i = collectibles.length-1; i>=0; i--) {
		collectibles[i].update();

		var theDistance = dist(mouseX, mouseY, collectibles[i].x, collectibles[i].y);

		if(theDistance < collectibles[i].diameter / 2){
			//the mouse is inside the radius of this object
			//color changes
			collectibles[i].col = color(255,0,0);

			//remove it from array
			collectibles.splice(i,1);
		}
	}
}
 
// create a collectibles class
function Collectible() {
 
	// spawn at random location
	this.x = random(width);
	this.y = random(height);
 
	this.diameter = random(20, 50);
 
	// random blueish color
	this.col = color(50, 100, random(100,255));
 
	// internal function for object
	this.update = function() {
 
		//move section
		this.x += random(-5,5);
		this.y += random(-5,5);




		// draw section
		noStroke();
		fill(this.col);
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}