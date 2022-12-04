
let calculate_btn = document.getElementById("calculate-btn");

let result = document.getElementById("result");

let calculate = () => {

    let p = Number(document.getElementById("principal").value);

    let r = Number(document.getElementById("rate").value);

    let t = Number(document.getElementById("time").value);

    let duration = document.getElementById("duration").value;

    let SI = duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;

    let amount = p + SI;

    result.innerHTML = `<div>Principal Amount: <span>$${p.toFixed(2)}</span></div>
    <div>Total Interest: <span>$${SI.toFixed(2)}</span></div>
    <div>Total Amount: <span>$${amount.toFixed(2)}</span></div>`;
};

calculate_btn.addEventListener("click", calculate);

window.addEventListener("load", calculate);