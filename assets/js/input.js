import { Perso } from './perso.js';
// let newHero = new Perso("YollowMan", "50", 1943, "DiamondSword", "MagicPsy")
// console.log(newHero);


//champ text
var inputed = document.createElement("INPUT");
  inputed.setAttribute("type", "text");
  inputed.setAttribute("value", "Hello World!");
  document.body.appendChild(inputed);
//button d'envoi
var button  = document.createElement("BUTTON");
button.setAttribute("type", "button");
button.setAttribute("id", "btnTest");
button.innerHTML = "ClickMe";
button.onclick = function(e) {getInputValue();};
document.body.appendChild(button);

// <button type="button" onclick="getInputValue();">Get Value</button>


// récuperation des données et generation des
function getInputValue() {
        // selection de la valeur du champ texte
        let inputVal = inputed.value;
        // Affichage de la valeur 
        let newHero = new Perso (inputVal, 50, 1920, "Une Licorne", "des fleurs");
        alert("le nouveau Hero s'appelle "+newHero.name);
        var article = document.createElement("article");
        document.body.appendChild(article);
        article.innerHTML = newHero.name;

      }
