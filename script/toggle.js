// // @ts-ignore
// document.getElementById("cash_out").style.display = "none";
// // @ts-ignore
// document.getElementById("add-money-box").addEventListener("click", function () {
//   //   console.log("herjt");
//   // @ts-ignore
//   document.getElementById("cash_out").style.display = "none";
//   // @ts-ignore
//   document.getElementById("add_Money").style.display = "block";
// });

// // @ts-ignore
// document.getElementById("cash_out_box").addEventListener("click", function () {
//   //   console.log("herjt");
//   // @ts-ignore
//   document.getElementById("cash_out").style.display = "block";
//   // @ts-ignore
//   document.getElementById("add_Money").style.display = "none";
// });

// @ts-ignore
document.getElementById("cash_out").style.display = "none";
// @ts-ignore
document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add_Money", "block");
  handleToggle("cash_out", "none");
});

// @ts-ignore
document.getElementById("cash_out_box").addEventListener("click", function () {
  handleToggle("add_Money", "none");
  handleToggle("cash_out", "block");
});
