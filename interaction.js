
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  
	// Définir ici les attributs de la 'classe'
  let initialPositionX = 0; //Utiliser let pour des variables locales, et var pour des variables globales. const pour les constantes
  let initialPositionY = 0;
  let finalPositionX =0;
  let finalPositionY =0;
  let pressed = false;
  //this.interactor = interactor;
	// Developper les 3 fonctions gérant les événements
  DnD.prototype.press = function(evt){
    let coord  = getMousePosition(canvas, evt);
    //console.log("coordX : " + coord.x + " coordY : " + coord.y);
    this.initialPositionX = coord.x;
    this.initialPositionY = coord.y;
    this.pressed= true;
    interactor.onInteractionStart(this);
  }
  DnD.prototype.drag = function(evt){
    if(this.pressed){
      let coord  = getMousePosition(canvas, evt);
      //console.log("coordX : " + coord.x + " coordY : " + coord.y);
      this.finalPositionX = coord.x;
      this.finalPositionY = coord.y;
      interactor.onInteractionUpdate(this);
    }

  }
  DnD.prototype.drop = function(evt){
      let coord  = getMousePosition(canvas, evt);
      //console.log("coordX : " + coord.x + " coordY : " + coord.y);
      this.finalPositionX = coord.x;
      this.finalPositionY = coord.y;
      this.pressed = false;
      interactor.onInteractionEnd(this);

  }

	// Associer les fonctions précédentes aux évènements du canvas.
  
  canvas.addEventListener('mousedown', this.press, false);
  canvas.addEventListener('mousemove', this.drag, false);
  canvas.addEventListener('mouseup', this.drop, false);


};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



