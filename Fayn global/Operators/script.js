function calculate(operation) {
    let value1, value2, result;
  
    switch (operation) {
      case 'add':
        value1 = parseFloat(document.getElementById("addValue1").value) || 0;
        value2 = parseFloat(document.getElementById("addValue2").value) || 0;
        result = value1 + value2;
        document.getElementById("addResult").textContent = `Result: ${result}`;
        break;
  
      case 'sub':
        value1 = parseFloat(document.getElementById("subValue1").value) || 0;
        value2 = parseFloat(document.getElementById("subValue2").value) || 0;
        result = value1 - value2;
        document.getElementById("subResult").textContent = `Result: ${result}`;
        break;
  
      case 'mul':
        value1 = parseFloat(document.getElementById("mulValue1").value) || 0;
        value2 = parseFloat(document.getElementById("mulValue2").value) || 0;
        result = value1 * value2;
        document.getElementById("mulResult").textContent = `Result: ${result}`;
        break;
  
      case 'div':
        value1 = parseFloat(document.getElementById("divValue1").value) || 0;
        value2 = parseFloat(document.getElementById("divValue2").value) || 0;
        if (value2 === 0) {
          document.getElementById("divResult").textContent = "Error: Division by zero!";
          return;
        }
        result = value1 / value2;
        document.getElementById("divResult").textContent = `Result: ${result}`;
        break;
  
      default:
        console.log("Invalid operation");
    }
  }
  
  function clearBox(operation) {
   
    if (operation === 'add') {
      document.getElementById("addValue1").value = "";
      document.getElementById("addValue2").value = "";
      document.getElementById("addResult").textContent = "";
    } else if (operation === 'sub') {
      document.getElementById("subValue1").value = "";
      document.getElementById("subValue2").value = "";
      document.getElementById("subResult").textContent = "";
    } else if (operation === 'mul') {
      document.getElementById("mulValue1").value = "";
      document.getElementById("mulValue2").value = "";
      document.getElementById("mulResult").textContent = "";
    } else if (operation === 'div') {
      document.getElementById("divValue1").value = "";
      document.getElementById("divValue2").value = "";
      document.getElementById("divResult").textContent = "";
    }
  }
  