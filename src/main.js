import p5 from 'p5';

import { mySketch } from './sketch.js'
// Import CSS styles in JavaScript
// import './style.css'

console.log('Hello from JavaScript!')

// Initialize p5.js
// p5 requires two arguments: new p5(sketch function, target DOM element)
new p5(mySketch, document.getElementById('sketch'))
