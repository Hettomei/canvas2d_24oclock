function AiguilleSeconde (center_x, center_y, rayon_oclock, context){
  this.center_x = center_x;
  this.center_y = center_y;
  this.rayon_oclock = rayon_oclock;
  this.context = context;

  this.seconde_to_radian = function(){
    var date = new Date();
    var secondes = date.getSeconds() + date.getMilliseconds()/1000;
    return secondes * Math.PI / 180;
  };

  this.draw = function(){
    new Aiguille(
      this.center_x,
      this.center_y,
      this.rayon_oclock - 10
    ).draw(this.context, this.seconde_to_radian())
  }

}
