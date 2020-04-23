var countNum = document.getElementById("carrier")
const countBtn = document.querySelectorAll(".buy");
for (var i = 0; i < countBtn.length; i++) {
    countBtn[i].addEventListener('click', function(event) {
        countNum.innerHTML++;
    });
}