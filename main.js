const calculateTemp = () => {

const numberTemp = document.getElementById('temp').value;

const tempSelected = document.getElementById('temp_diff');
const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

const celToFah = (cel) => {
  let fahrenheit = Math.round((cel * 9/5) + 32);
  return fahrenheit;
}

const fehToCel = (fehr) => {
  let celcius = Math.round((fehr - 32) * 5/9);
  return celcius;
}

let result;

if (valueTemp == 'cel') {
  result = celToFah(numberTemp);
  document.getElementById('resultContainer').innerHTML = `= ${result}° Fahrenheit`;
}else {
  result = fahToCel(numberTemp);
  document.getElementById('resultContainer').innerHTML = `= ${result}° Celcius`;
}
}
