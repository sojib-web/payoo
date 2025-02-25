// @ts-ignore
document
  .getElementById("Add_money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // @ts-ignore
    const AccountPIN = document.getElementById("Account_PIN").value;
    const convertedPin = parseInt(AccountPIN);

    // @ts-ignore
    const AmountNumber = document.getElementById("amount").value;
    const ConvertedAmount = parseFloat(AmountNumber);

    // @ts-ignore
    const mainBalance = document.getElementById("main_balance").innerText;
    const convertedBalance = parseFloat(mainBalance);

    if (ConvertedAmount && convertedPin) {
      // @ts-ignore
      if (convertedPin === 1234) {
        const sum = convertedBalance + ConvertedAmount;
        // @ts-ignore
        document.getElementById("main_balance").innerText = sum;
      } else {
        alert("Inter valid PIN");
      }
    } else {
      alert("Please enter valid amount");
    }
  });
