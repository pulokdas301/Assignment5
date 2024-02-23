
const allBtn = document.getElementsByClassName("add-btn");


for (const btne of allBtn) {
    btne.addEventListener("click", function (event) {
        const result = event.target.innerText;

        const selectedArea = document.getElementById("selected-players-container");

        const div = document.createElement("div");
        div.classList.add("flex");

        div.classList.add("justify-between");
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        p1.innerText = result
        p2.innerText = "Economoy";
        p3.innerText = "550";
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedArea.appendChild(div);

        updatePrice(price)
        updateGrandValue();
    })
}


function updateGrandValue(status) {
    const totalCost = getClick("total-cost");
    if (status == undefined) {

        document.getElementById("grand-cost").innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        if (couponCode == "NEW15") {
            const discount = totalCost * 0.2;
            document.getElementById("grand-cost").innerText = totalCost - discount;
        }
        else {
            alert("please enter a valid coupon code");
        }
    }

}


function updatePrice(value) {

    const totalCost = getClick("total-cost");
    const sum = totalCost + value
    document.getElementById("total-cost").innerText = sum;
}
const price = getClick("seat-price");
// const seatCount = getClick("seat-Count");
// const seatLeft = getClick("seats-left");

function getClick(id) {
    const totalNumber = document.getElementById(id).innerText;
    const totalPrice = parseInt(totalNumber);
    return totalPrice;
}


