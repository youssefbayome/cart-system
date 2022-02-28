// const delBtns = document.getElementsByClassName("delete");
// const plusBtn = document.getElementsByClassName("plus");
// const minusBtn = document.getElementsByClassName("minus");
// const favBtn = document.getElementsByClassName("bi-heart");
const table = document.querySelector(".table");
const total = document.querySelector(".total");

// for (const btn of delBtns) {
//   btn.addEventListener("click", function (e) {
//     const clickedBtn = e.target;
//     clickedBtn.parentNode.parentNode.remove();
//   });
// }

// for (const btn of plusBtn) {
//   btn.addEventListener("click", function (e) {
//     const clickedBtn = e.target; // get clicked btn
//     const currentInput = clickedBtn.nextElementSibling; // get the quantity of clicked btn
//     const currentQty = parseInt(currentInput.value); // covert string to number

//     // add one to the qunatity
//     currentInput.value = currentQty + 1;
//   });
// }

// for (const btn of minusBtn) {
//     btn.addEventListener("click", function (e) {
//       const clickedBtn = e.target; // get clicked btn
//       const currentInput = clickedBtn.previousElementSibling; // get the quantity of clicked btn
//       const currentQty = parseInt(currentInput.value); // covert string to number

//       // add one to the qunatity

//         if (currentQty < 1) {
//             return
//         }
//         currentInput.value = currentQty - 1;
//     });
// }

// // toggle favorite icon
// for (const btn of favBtn) {
//   btn.addEventListener('click', function (e) {
//     const clickedBtn = e.target;
//     clickedBtn.classList.toggle('favorite');
//     })
// };

table.addEventListener("click", (e) => {
  let clickedBtn = e.target;
  // check if delete btn
  if (clickedBtn.classList.contains("delete")) {
    clickedBtn.parentElement.parentElement.remove();
  } else if (clickedBtn.classList.contains("plus")) {
    const currentInput = clickedBtn.nextElementSibling; // get the quantity of clicked btn
    const currentQty = parseInt(currentInput.value); // covert string to number

    // add one to the qunatity

    currentInput.value = currentQty + 1;

    // get item row
    getTotal();
  } else if (clickedBtn.classList.contains("minus")) {
    const currentInput = clickedBtn.previousElementSibling; // get the quantity of clicked btn
    const currentQty = parseInt(currentInput.value); // covert string to number

    // add one to the qunatity
    currentInput.value = currentQty === 0 ? currentQty : currentQty - 1;
    // get total
    getTotal();
  } else if (clickedBtn.classList.contains("favorite")) {
    const heart = clickedBtn.querySelector(".fa-heart");
    heart.classList.toggle("color-red");
  }
  console.log(e.currentTarget);
});

function getTotal() {
  let prices = Array.from(table.querySelectorAll(".item-price"));
  let quantities = Array.from(table.querySelectorAll(".quantity"));
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    result += Number(prices[i].textContent) * Number(quantities[i].value);
  }
  total.textContent = result;
}
getTotal();
