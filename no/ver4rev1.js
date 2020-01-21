// Init
Zfont.init(Zdog);
let font = new Zdog.Font({
	src: './IHateComicSans.ttf'
});

let model = new Zdog.Illustration({
	element: ".zdog-canvas",
	dragRotate: true,
	zoom: 1,
	centered: false,
});

// Variables
canSize = 432;
objScale = 1;
//objScale = canSize/432;
eyeDepth = -48;
eyeShift = 0;
eyeHeight = 7;
eyeScale = 1;
//mouthShift = -32;
mouthShift = 14;
mouthHeight = 70;
eyeOffset = -8;

bodyRadius = 128;
headStroke = 300;
bodyStroke = 100;
headOffset = -298;

// Body
let body = new Zdog.Polygon({
	addTo: model,
	radius: bodyRadius*objScale,
	sides: 7,
	stroke: bodyStroke*objScale,
	color: '#fff',
	fill: true,
	translate: { x: canSize/2, y: (128+300+20+66)*objScale },
	//rotate: { x: -Zdog.TAU/19 },
});

// Head
let head = new Zdog.Ellipse({
	addTo: body,
	stroke: headStroke*objScale,
	color: "#FFF",
	translate: {y: headOffset*objScale },
	//rotate: { x: -Zdog.TAU/19 },
});

// Face
let face = new Zdog.Group({
	addTo: head,
	translate: { z: 148*objScale }
});

// Mouth
let mouth = new Zdog.Text({
	addTo: face,
	font: font,
	stroke: 2*objScale,
	value: ')',
	fontSize: 148/1.5*objScale,
	color: '#000',
	fill: '#000',
	textBaseline: 'middle',
	textAlign: 'center',
	rotate: { z: Zdog.TAU/4 },
	translate: { x: mouthShift*objScale, y: mouthHeight*objScale }
});

// Eyes
let eyes = new Zdog.Group({
	addTo: face,
	translate: { y: eyeOffset*objScale }
});

let leftFrameFill = new Zdog.Rect({
	addTo: eyes,
	width: 96*objScale,
	height: 54*objScale,
	translate: { x: -64*objScale },
	stroke: 0,
	color: '#FFF',
	fill: true
});

let rightFrameFill = leftFrameFill.copy({
	translate: { x: 64*objScale },
});

let leftFrame = new Zdog.Rect({
	addTo: eyes,
	width: 96*objScale,
	height: 54*objScale,
	translate: { x: -64*objScale },
	stroke: 8*objScale,
	color: '#000',
});

let rightFrame = leftFrame.copy({
	translate: { x: 64*objScale },
});

let leftEye = new Zdog.Text({
	addTo: eyes,
	font: font,
	stroke: 3*objScale,
	fontSize: 64*eyeScale*objScale,
	color: '#000',
	value: 'o',
	fill: true,
	textBaseline: 'middle',
	textAlign: 'center',
	translate: { x: (-64+eyeShift)*objScale, y: (-14-eyeHeight)*objScale, z: eyeDepth*objScale }
});

let rightEye = leftEye.copy({
	value: '-',
	stroke: 0,
	fontSize: 128*eyeScale*objScale,
	translate: { x: (64+eyeShift-2)*objScale, y: (-14-eyeHeight-3)*objScale, z: eyeDepth*objScale }
});

// Arms
/*let armDistance = -75;
let leftArmTop = new Zdog.Shape({
	addTo: body,
	path: [ { y: 0 }, { y: 150, x: -25 } ],
	stroke: 64,
	color: '#FFF',
	translate: { x: -140, y: armDistance },
});
let leftArmBottom = new Zdog.Shape({
	addTo: leftArmTop,
	path: [ { y: 0, x: -25 }, { y: 120 } ],
	stroke: 64,
	color: '#FFF',
	translate: { y: 150 },
});
let rightArmTop = leftArmTop.copy({
	path: [ { y: 0 }, { y: 150, x: 25 } ],
	translate: { x: 150, y: armDistance }
});
let rightArmBottom = leftArmBottom.copy({
	path: [ { y: 0, x: 25 }, { y: 120 } ],
	addTo: rightArmTop,
});

// Legs
let legDistance = 150;
let leftLegTop = new Zdog.Shape({
	addTo: body,
	path: [ { y: 0 }, { y: 150 } ],
	stroke: 64,
	color: '#FFF',
	translate: { x: -54, y: legDistance },
	rotate: { x: Zdog.TAU/64 }
});
let leftLegBottom = new Zdog.Shape({
	addTo: leftLegTop,
	path: [ { y: 0 }, { y: 120 } ],
	stroke: 64,
	color: '#FFF',
	translate: { y: 150 },
	rotate: { x: -Zdog.TAU/32 }
});
let rightLegTop = leftLegTop.copy({
	translate: { x: 54, y: legDistance }
});
let rightLegBottom = leftLegBottom.copy({
	addTo: rightLegTop,
});*/

// Animation
function update() {
	model.updateRenderGraph();
	requestAnimationFrame(update);
}

function svgify() {
	let svg = document.querySelector('svg');
	model.renderGraphSvg(svg);
}

update();
