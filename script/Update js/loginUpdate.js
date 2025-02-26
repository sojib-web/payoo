// @ts-ignore
document
  .getElementById("login_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // @ts-ignore
    const accountNumber = document.getElementById("Account_number").value;
    const updateAccountNumber = parseInt(accountNumber);
    // console.log(typeof accountNumber);
    // @ts-ignore
    const accountPIn = document.getElementById("Account_PIN").value;
    const updateAccountPIn = parseInt(accountPIn);

    // @ts-ignore
    if (accountNumber.length === 11 && updateAccountPIn === 1234) {
      window.location.href = "main.html";
    } else {
      alert("tomar account number 11 digit ase 1234 Pin ase");
    }
  });
