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

  Horloge.size_center_to_border = function(){
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
      Horloge.size_center_to_border()
    ).draw(Horloge.context);
  }

  Horloge.seconde_to_radian = function(){
    var date = new Date();
    var secondes = date.getSeconds() + date.getMilliseconds()/1000;
    return secondes * Math.PI / 180;
  }

  Horloge.dessine_aiguille = function(){
    Horloge.aiguille_heure.draw(Horloge.context, Horloge.seconde_to_radian());
  }

  Horloge.update = function(){
    Horloge.canvas.width  = window.innerWidth - 10;
    Horloge.canvas.height = window.innerHeight - 10;

    Horloge.aiguille_heure = new Aiguille(
      Horloge.canvas.width / 2,
      Horloge.canvas.height / 2,
      Horloge.size_center_to_border(),
      10
    )

  }
};
