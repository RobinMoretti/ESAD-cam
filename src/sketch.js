export const mySketch = (p) => {

	let video;

	p.setup = () => {
		p.createCanvas(400, 400);
		video = p.createCapture(p.video);
		video.size(p.width, p.height);
		video.hide();
	}
	
	p.draw = () => {
		p.background(255);

		video.loadPixels();

		for (let x = 0; x < video.width; x++) {
			for (let y = 0; y < video.height; y++) {
		
			  // index into pixels array
			  let i = (x + y * video.width) * 4;
		
			  // extract red, green, blue, alpha
			  let r = video.pixels[i];
			  let g = video.pixels[i + 1];
			  let b = video.pixels[i + 2];
			  let a = video.pixels[i + 3];
		
			  // process pixel here ...
			  r = r * 3;
			  g = g * 3;
			  b = b * 3;
		
			  // write red, blue, green, alpha
			  video.pixels[i] = r;
			  video.pixels[i + 1] = g;
			  video.pixels[i + 2] = b;
			  video.pixels[i + 3] = a;
			}
		}

		let gridSize = 10;

		for (let y = 0; y < p.width - gridSize; y += gridSize) {
			for (let x = 0; x < p.height - gridSize; x += gridSize) {
				let index = (y * p.width + x) + 4;
				let pixel = video.pixels[index];
				let dia = p.map(pixel, 0, 255, gridSize, 0);
				
				p.fill(0);
				p.noStroke();
				p.circle(x + gridSize, y + gridSize, dia);
			}
		}
	}

}

