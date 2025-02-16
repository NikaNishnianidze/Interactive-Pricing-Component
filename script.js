let range = document.getElementById("myRange");
let price = document.getElementById("myPrice");
let billing = document.getElementById("billingCheckbox");
let mySpan = document.querySelector("span");
let line = document.querySelector(".line");

range.oninput = () => {
  let value = range.value;
  price.innerHTML = `$${value}.00`;
  price.style.fontSize = "32px";
  line.style.width = value + "%";
};

function updatePrice() {
  if (billing.checked) {
    price.innerHTML = `$${range.value * 0.25}`;
    mySpan.innerHTML = "/year";
  } else {
    mySpan.innerHTML = "/month";
    price.innerHTML = `$${range.value}.00`;
  }
}

billing.addEventListener("change", updatePrice);
