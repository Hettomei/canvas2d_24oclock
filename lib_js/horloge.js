window.Horloge = window.Horloge || {};

window.onload = function(){
  Horloge.init();
  Horloge.update();
  Horloge.dessine();
  Horloge.dessine_aiguille();
};

window.onresize = function(){
  Horloge.update();
  Horloge.dessine();
  Horloge.dessine_aiguille();
}

Horloge.init = function(){
  Horloge.canvas = document.getElementById('mon_canvas');
  Horloge.context = Horloge.canvas.getContext('2d');

  Horloge.rayon = function(){
    var size;
    if(Horloge.canvas.width < Horloge.canvas.height){
      size = Horloge.canvas.width / 2
    }
    else{
      size = Horloge.canvas.height / 2
    }
    return size - 5;
  }

  Horloge.dessine = function(){
    new Cadran(
      Horloge.canvas.width / 2,
      Horloge.canvas.height / 2,
      Horloge.rayon()
    ).draw(Horloge.context);
  }

  Horloge.dessine_aiguille = function(){
    Horloge.aiguille_secondes.draw();
  }

  Horloge.update = function(){
    Horloge.canvas.width  = window.innerWidth - 10;
    Horloge.canvas.height = window.innerHeight - 10;
    if(Horloge.canvas.width < 200)
      Horloge.canvas.width = 200
    if(Horloge.canvas.height < 200)
      Horloge.canvas.height = 200

    Horloge.aiguille_secondes = new AiguilleSeconde(
      Horloge.canvas.width / 2,
      Horloge.canvas.height / 2,
      Horloge.rayon(),
      Horloge.context
    );

  }
};
