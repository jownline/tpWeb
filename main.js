
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
// new DnD(canvas);
 ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue

// var rec = new Rectangle('#00CCC0', 10, 40, 30, 50, 100);
// var ligne = new Line('#00CCC0', 10, 120, 220, 100, 5);

// rec.paint(ctx);
// ligne.paint(ctx);
// tester également Dessin.

// var rec1 = new Rectangle('#00CCC0', 10, 400, 300, 150, 1100);
// var ligne1 = new Line('#00CCC0', 10, 500, 320, 1100, 115);
// var draw = new Drawing();
// draw.shapes.push(rec1);
// draw.shapes.push(ligne1);
// draw.paint(ctx);


// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

