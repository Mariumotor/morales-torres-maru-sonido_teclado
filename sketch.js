let sonidos1 = [];

function preload() {
	for (let i = 0; i < 6; i++) {
		sonidos1[i] = loadSound('sonidos/' + i + '.wav');
	}
}

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.mouseClicked(presionado);
}

function presionado() {
	let r = Math.floor(random(7));
	circle(mouseX, mouseY, 20);

	switch (r) {
		case 0:
			sonidos1[0].play();
			break;
		case 1:
			sonidos1[1].play();
			break;
		case 2:
			sonidos1[2].play();
			break;
		case 3:
			sonidos1[3].play();
			break;
		case 4:
			sonidos1[4].play();
			break;
		case 5:
			sonidos1[5].play();
			break;
		case 6:
			sonidos1[6].play();
			break;
	}
}

function draw() {}
function mouseDragged() {
	let r = Math.floor(random(7));
	circle(mouseX, mouseY, 20);

	switch (r) {
		case 0:
			sonidos1[0].play();
			break;
		case 1:
			sonidos1[1].play();
			break;
		case 2:
			sonidos1[2].play();
			break;
		case 3:
			sonidos1[3].play();
			break;
		case 4:
			sonidos1[4].play();
			break;
		case 5:
			sonidos1[5].play();
			break;
		case 6:
			sonidos1[6].play();
			break;
	}
}

function keyPressed() {
	switch (key) {
		case 'a':
			sonidos1[0].play();
			break;
		case 's':
			sonidos1[1].play();
			break;
		case 'd':
			sonidos1[2].play();
			break;
		case 'f':
			sonidos1[3].play();
			break;
		case 'g':
			sonidos1[4].play();
			break;
		case 'h':
			sonidos1[5].play();
			break;
		case 'j':
			sonidos1[6].play();
			break;
	}
}