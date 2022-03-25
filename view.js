
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Shape.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    
};

Rectangle.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.rect(this.startDotX, this.startDotY, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.startDotX, this.startDotY);
    ctx.lineTo(this.endDotX, this.endDotY);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx, canvas) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

function updateShapeList(index, shape){
    document.getElementById('shapeList').insertAdjacentHTML('beforeend', toDom(shape,index))
}

function toDom(shape, index){
    if(shape && typeof shape == 'object'){
        let innerHtml = `<li id="liRemove${index}">`
        if(shape.constructor === Rectangle){
            innerHtml += '<span style="color:' + shape.color + '">/</span> Rectangle'

        }else if(shape.constructor === Line){
            innerHtml += '<span style="color:' + shape.color + '">/</span> Line'
        }
        innerHtml +=`
        <button type="button" class="btn-default remove" id="remove${index}">
            <span class="glyphicon glyphicon-remove-sign"></span>
        </button>`
        return innerHtml + '</li>'
    }
    
}