// @ts-ignore
document
  .getElementById("Add_money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // @ts-ignore
    const AmountNumber = document.getElementById("amount").value;
    const ConvertedAmount = parseFloat(AmountNumber);
    // console.log(typeof ConvertedAmount);

    // @ts-ignore
    const AccountPIN = document.getElementById("Account_PIN").value;
    const convertedPin = parseInt(AccountPIN);

    // @ts-ignore
    const mainBalance = document.getElementById("main_balance").innerText;
    const convertedBalance = parseFloat(mainBalance);
    console.log(typeof convertedBalance);
    if (convertedPin === 1234) {
      const sum = convertedBalance + ConvertedAmount;
      // @ts-ignore
      document.getElementById("main_balance").innerText = sum;
    } else {
      console.log("invalid pin");
    }
  });

// @ts-ignore
