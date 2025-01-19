// Function to clear the calculator screen
function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  // Function to append a value to the calculator screen
  function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  // Function to calculate the result of the entered expression
  function calculate() {
    try {
      const result = eval(document.getElementById("result").value);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid calculation");
      }
      document.getElementById("result").value = result;
    } catch (e) {
      alert("Invalid Input");
      clearScreen();
    }
  }