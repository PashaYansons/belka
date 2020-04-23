var shopCard_1 = {
    book_author: "Илон Маск",
    book_name: "Никогда не сдамся",
    book_cost: 100

}
document.getElementById("name_1").textContent = shopCard_1.book_author;
document.getElementById("book_name_1").textContent = shopCard_1.book_name;
document.getElementById("cost_1").textContent = shopCard_1.book_cost;


var count = document.getElementById("button_1");
count.addEventListener("click", function() {
    const myList = document.getElementById("basketOpen");
    let tru = document.createElement("table");
    tru.innerHTML = '<td id = "1">' + shopCard_1.book_author + " </td> " + '<td id = "2">' + shopCard_1.book_name + " </td>" + '<td class = "third">' + shopCard_1.book_cost + " </td>";
    myList.appendChild(tru);



});
var shopCard_2 = {
    book_author: "Александра Митрошина",
    book_name: "Продвижение INSTAGRAM",
    book_cost: 199

}
var count = document.getElementById("button_2");
count.addEventListener("click", function() {
    const myList = document.getElementById("basketOpen");
    let tru = document.createElement("table");
    tru.innerHTML = '<tr>' + '<td id = "1">' + shopCard_2.book_author + " </td> " + '<td id = "2">' + shopCard_2.book_name + " </td>" + '<td class = "third">' + shopCard_2.book_cost + " </td>" + '</tr>';
    myList.appendChild(tru);

    var c = document.querySelectorAll(".third");
    var sum = 0;
    for (i = 0; i < c.length; i++) {
        sum += parseInt(c[i].innerText);
    }
    let summa = document.getElementById("table-container");
    let sumA = document.createElement("div");
    sumA.innerHTML = sum;
    summa.appendChild(sumA);

});