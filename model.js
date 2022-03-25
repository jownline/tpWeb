
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes = new Map();
}

function Shape(color, thickness,startDotX, startDotY){
    this.color = color ;
    this.thickness = thickness ;
    this.startDotX = startDotX;
    this.startDotY = startDotY;
}

function Rectangle(color, thickness,startDotX, startDotY, width, height){
    Shape.call(this, color, thickness, startDotX, startDotY); //équivalent au super de java
    this.width = width;
    this.height = height ;
}
//Rectangle.prototype = new Shape(); //indique que rectangle hérite de Shape

function Line(color, thickness, startDotX, startDotY, endDotX, endDotY){
    Shape.call(this, color, thickness, startDotX, startDotY); //équivalent au super de java
    this.endDotX = endDotX;
    this.endDotY = endDotY;
}
//Line.prototype = new Shape(); //indique que line hérite de Shape