

    

let monperso = new Personnage("Luna","Carry","Nova","Tarasque",150);
console.log("Mon Perso s'appelle "+monperso.name + " c'est un " + monperso.category + " il possede l'item " + monperso.items + " donc sa defense passe a " + monperso.defense(39) + " ce qui lui permet de survire a l'attaque");


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


// Appel de class D'exemple !
let myperso = new Perso("Sorken", 50, 1950, "diamond", "MagicPsy", 100, false);

console.log("Mon Perso a " + myperso.anneeFormat() + " Et il s'appel " + myperso.name + "et il lance une attaque avec son épée de " + myperso.attaque(48));







//   alert("Mon joueur s'appelle "+ personnage.firstName + " "+ personnage.lastName + " Il pese "+ personnage.poids+ "kg C'est un " + personnage.rank + " de l'armee du dieu Mene. C'est un " +personnage.category[0] +" ainsi qu'un "+personnage.category[1]   );

// const perso = {
//   name : "Sorken",
//   weight : 50,
//   année : 1435,
//   equipement :["diamond", "argent", "fer"],
//   shard : "MagicPsy",
//   pv :  100,
//   tasliman : false
//
// };
//
//
// let diamond = "diamond";
// let argent = "argent";
// let fer = "fer";
//
// if (perso.equipement == "diamond"){
//   weight = perso.weight + 15;
// } else if (perso.equipement == "argent"){
//   weight = perso.weight + 10;
// } else if(perso.equipement == "fer" ){
//   weight = perso.weight + 5;
// } else {
//   weight = perso.weight;
// }
//
//
//
// equipement = perso.equipement = "argent";
//
// // accesseurs
//
// alert("Mon joueur s'appel "+perso.name + ", il pese " + weight + ",il est né en l'an " + perso.année+"et possede une "+perso.equipement+"Ainsi qu'un atout de type"+perso.shard+"il un nombre de pv égale a "+perso.pv);

