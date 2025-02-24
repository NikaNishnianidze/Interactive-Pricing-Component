let range = document.getElementById("myRange");
let price = document.getElementById("myPrice");
let billing = document.getElementById("billingCheckbox");
let mySpan = document.querySelector("span");

range.oninput = () => {
  let value = range.value;
  if (billing.checked) {
    let yearly = range.value * 0.25;
    price.innerHTML = `$${yearly}`;
  } else {
    price.innerHTML = `$${value}.00`;
    price.style.fontSize = "32px";
  }
};

function updateRangeBackground() {
  const value = range.value;
  const percentage = ((value - range.min) / (range.max - range.min)) * 100;
  range.style.background = `linear-gradient(to right, #80fff3 ${percentage}%, #fff ${percentage}%)`;
}

range.addEventListener("input", updateRangeBackground);

updateRangeBackground();

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
