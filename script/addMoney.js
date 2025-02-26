// // @ts-ignore
// document
//   .getElementById("Add_money")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     // @ts-ignore
//     const AmountNumber = document.getElementById("amount").value;
//     const ConvertedAmount = parseFloat(AmountNumber);
//     // console.log(typeof ConvertedAmount);

//     // @ts-ignore
//     const AccountPIN = document.getElementById("Account_PIN").value;
//     const convertedPin = parseInt(AccountPIN);

//     // @ts-ignore
//     const mainBalance = document.getElementById("main_balance").innerText;
//     const convertedBalance = parseFloat(mainBalance);
//     console.log(typeof convertedBalance);
//     if (convertedPin === 1234) {
//       const sum = convertedBalance + ConvertedAmount;
//       // @ts-ignore
//       document.getElementById("main_balance").innerText = sum;
//     } else {
//       console.log("invalid pin");
//     }
//   });

// @ts-ignore

// * ****** update js***********

document
  .getElementById("Add_money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const Account_PIN = getInputValueByID("Account_PIN");
    // @ts-ignore
    const account = document.getElementById("Account_number").value;

    const mainBalance = getInnerTextById("main_balance");
    console.log(mainBalance);
    if (account.length === 11) {
      if (Account_PIN === 1234) {
        const sum = mainBalance + amount;
        getInnerTextByIdAndValue("main_balance", sum);
      } else {
        console.log("invalid pin");
      }
    } else {
      console.log("account thik nai");
    }
  });
