var books = [{
        author: "Илон Маск",
        name: "Никогда не сдамся",
        cost: 100,
        id: 1,
        image: "/asserts/nikogda-ne-sdamsya-882.png"
    },
    {
        author: "Александра Митрошина",
        name: "Продвижение INSTAGRAM",
        cost: 99,
        id: 2,
        image: "/asserts/sasha.png"
    },
    {
        author: "Антуан Де Сент Экзюпери",
        name: "Маленький принц",
        cost: 101,
        id: 3,
        image: "/asserts/mark.jpg"
    },
    {
        author: "Майкл Френцезе",
        name: "Предложение",
        cost: 102,
        id: 4,
        image: "/asserts/book_item3.png"
    },
    {
        author: "Кот Учёный",
        name: "Загадки истории",
        cost: 103,
        id: 5,
        image: "/asserts/history.png"
    },
    {
        author: "Антoн Антонов-Овсеенко",
        name: "проект 'Украина'",
        cost: 104,
        id: 6,
        image: "/asserts/book_item4.png"
    },
    {
        author: "Николас Димитров",
        name: "Дилер реальности",
        cost: 105,
        id: 7,
        image: "/asserts/Dyller-realnosty_obl_3D.png"
    },
    {
        author: "Епам Епамович",
        name: "Загадки истории: великие завоеватели",
        cost: 106,
        id: 8,
        image: "/asserts/Загадки_истории_Великие_завоеватели.png"
    },
    {
        author: "Стивен Кинг",
        name: "Страна радости",
        cost: 107,
        id: 9,
        image: "/asserts/king.jpg"
    },
    {
        author: "Стивен Кинг",
        name: "Предел",
        cost: 108,
        id: 10,
        image: "/asserts/predel.png"
    },
    {
        author: "Стивен Кинг",
        name: "Зелёная миля",
        cost: 109,
        id: 11,
        image: "/asserts/green.jpg"
    },
    {
        author: "Стивен Кинг",
        name: "Доктор Сон",
        cost: 110,
        id: 12,
        image: "/asserts/son.png"
    }
];

function renderCard(book, node) {
    var card = document.createElement("div");
    card.className = "forbasket";
    card.innerHTML = ` <div class="image">
<img src="${book.image}" alt="" class="book_item">
</div>


<div class="content-container">
<p class = "book_author">${book.author}</p><span class="book_name">${book.name}</span>
</div>

<div class="buy-container">
<div class="text">
    <p class = "cost">${book.cost} </p>
</div>
<div class="button-container">
    <button  class="buy" onclick="displaycount()" data-set="1" data-id="${book.id}">Купить</button>
</div>
</div>`;

    node.appendChild(card);

}
var cardsContainer = document.querySelector(".cards-container");
books.forEach(item => renderCard(item, cardsContainer));
var basketContainer = document.getElementById("table-container");

function handlePurchase(e) {
    var v = e.target.dataset.id;
    if (v) {
        var book = books.find(item => item.id == v)
        renderCard(book, basketContainer);
        var countNum = document.getElementById("carrier");
        countNum.innerHTML++;
        var c = document.querySelectorAll("div.tablet  .cost");
        var sum = 0;
        for (i = 0; i < c.length; i++) {
            sum += parseInt(c[i].innerText);
            result.innerHTML = parseInt(sum) + " гривен";
        }

    }
}
var cardsContainer = document.querySelector(".cards-container");
cardsContainer.addEventListener('click', handlePurchase);