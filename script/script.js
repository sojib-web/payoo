// @ts-ignore
document
  .getElementById("login_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // @ts-ignore
    const accountNumber = document.getElementById("Account_number").value;
    // @ts-ignore
    const AccountPIN = document.getElementById("Account_PIN").value;
    const convertedPin = parseInt(AccountPIN);

    if (accountNumber.length === 11) {
      if (convertedPin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("wrong pin");
      }
    } else {
      alert("need valid account number");
    }
  });
