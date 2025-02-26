function getInputValueByID(id) {
  // @ts-ignore
  const value = document.getElementById(id).value;
  //   console.log(amount);
  const ConvertedValue = parseFloat(value);
  //   console.log(ConvertedAmount);
  return ConvertedValue;
}

function getInnerTextById(id) {
  // @ts-ignore
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function getInnerTextByIdAndValue(id, value) {
  // @ts-ignore
  document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {
  // @ts-ignore
  document.getElementById(id).style.display = status;
}
