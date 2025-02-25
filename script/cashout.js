// @ts-ignore
document
  .getElementById("Cash_out_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("cashout");
    // @ts-ignore
    const AmountNumber = document.getElementById("cash_amount").value;
    const ConvertedAmount = parseFloat(AmountNumber);
    // console.log(typeof ConvertedAmount);

    // @ts-ignore
    const AccountPIN = document.getElementById("Cash_out_pin").value;
    const convertedPin = parseInt(AccountPIN);

    // @ts-ignore
    const mainBalance = document.getElementById("main_balance").innerText;
    const convertedBalance = parseFloat(mainBalance);
    console.log(typeof convertedBalance);
    if (convertedPin === 1234) {
      const sum = convertedBalance - ConvertedAmount;
      // @ts-ignore
      document.getElementById("main_balance").innerText = sum;
    } else {
      console.log("invalid pin");
    }
  });
