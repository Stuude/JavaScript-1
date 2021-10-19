/* Partie Julien */
class Perso {
  constructor(name, weight, annee, equipement, shard, pv, talisman) {
      this.name = name;
      this.weight = weight;
      this.annee = annee;
      this.equipement = equipement;
      this.shard = shard;
      this.pv = pv;
      this.talisman = talisman;
  }

  anneeFormat() {
    let date = new Date();
    return date.getFullYear() - this.annee;
  }

  attaque(x){
    return x + this.weight + 15;
  }
}

let myperso = new Perso("Sorken", 50, 1950, "diamond", "MagicPsy", 100, false);

document.getElementById("name_julien").innerHTML = myperso.name;
document.getElementById("description_julien").innerHTML = "<br><strong> "+myperso.name + "</strong> attaque avec son épée de " + myperso.attaque(48) +
"<br><br><strong>" + myperso.name + "</strong> a " + myperso.anneeFormat() + " année terrestre";

/* Partie J-M */
class Avatar{
  constructor(name, weapon = "kamehameha", pv = 1000){
    this.name_jm = name;
    this.weapon = weapon;
    this.pv = pv;
    this.presentation = function(){
      var elem = document.getElementById("description_jm");
      if (elem)
        elem.innerHTML = "<b>Goku</b> est ultra <span style=\"color:green\">vif</span> et fume <span style=\"color:green\">tout l'monde</span> j'veux rien savoir";
    }
  }
  attaqueDefault(target){
    if (target.hasOwnProperty('pv'))
      target.pv -= 20;
  }
  attaqueCombine(target){
    if (target.hasOwnProperty('pv'))
      target.pv -= 35;
  }
  /*  - change la propriété quand elle existe du
          perso ciblé
      - change également ma propriété sur <p id="name_jm"> car je l'ai appelé de
          la même façon que ma variable, voir plus haut
  */
  changePropertie(target, propertie, value){
    if (target.hasOwnProperty(propertie)){
      target[propertie] = value;

      var elem = document.getElementById(propertie);
      if (elem)
        elem.innerHTML = value;
    }
  }
  destroy(target){
    if (target.hasOwnProperty('pv'))
      target.pv = 0;
  }
}

var avatar = new Avatar("Goku");
avatar.presentation();
avatar.changePropertie(avatar, "name_jm", "Goku");
avatar.destroy(myperso);

// Code personnage Michel

class random {
  constructor(name, age, equipement, passive, pv) {
            this.name = name;
            this.age = age;
            this.equipement = equipement;
            this.passive = passive;
            this.pv = pv;

            
    }
  }

let randomhero = new random("Worgen", 20, "Cloves", "Force surnaturelle", "150");
document.getElementById("Wolf").innerHTML=
"Mon personnage a " + randomhero.age + " Il s'appelle " + randomhero.name + " Et il possède " + randomhero.passive;







// classe Perso PrBe
class Bonhomme{
  constructor(nom, vie, armure, attaque, vitesse, vivant){
      this.Nom = nom
      this.vie = vie;
      this.armure = armure;
      this.attaque = attaque;
      this.vitesse = vitesse;
      this.vivant = vivant;
  }

}

var mybonhomme = new Bonhomme("Bonhomme", 100, 5, 10, 15, true);
var textbonhomme ="Ce perso s'appelle "+ mybonhomme.Nom + " Voici ses stats : " + mybonhomme.vie + "Pv " + mybonhomme.armure + " d'armure " + mybonhomme.attaque + " de dégâts.";
document.getElementById('presentation').innerHTML = textbonhomme;
