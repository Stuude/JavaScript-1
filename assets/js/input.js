

var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Hello World!");
  document.body.appendChild(x);

function getInputValue() {
        // Selecting the input element and get its value
        let inputVal = x.value;
        // Displaying the value
        alert(inputVal);
      }
