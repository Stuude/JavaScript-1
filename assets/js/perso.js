class Perso {
    constructor(name, weight, age, equipement, shard){
      this.name = name;
      this.weight = weight;
      this.age = age;
      this.equipement = equipement;
      this.shard = shard;
    }

    age(x){
      return x = this.year;
    }
}

let date = new Date();
let year = date.getFullYear();


let myPerso = new Perso("Sorken", "50", 1430, "DiamondSword", "MagicPsy" );
document.getelementByid("history").innerHTML() = "Mon nouveau perso s'appel " + myPerso.name + "Il pese " + myPerso.weight +"Il a "+myPerso.age(year) + ", il est équipé de " + myPerso.equipement + ", et possede l'atout " + myPerso.shard



