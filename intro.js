//let submit = document.querySelector("#submit")
let button = document.querySelector("#button")
let form = document.querySelector(".form")
let container = document.querySelector("#container")
let click = true
button.addEventListener("click", function () {
    form.style.visibility = "visible"
})

function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.printBookDetails = function () {
        console.log(`This book ${name} written by ${author} in ${year}`)
    }
}

let listOfBooks = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const book = new Book(form.BookName.value, form.Aurthor.value, form.Year.value);
    listOfBooks.push(book);
    addCard(listOfBooks.length - 1)
    form.style.visibility = "hidden"
    form.BookName.value = ""
    form.Aurthor.value = ""
    form.Year.value = ""


})

function addCard(index) {
    let card = document.createElement("div")
    card.style.boxShadow = "2px 4px 10px"
    card.style.width = "auto"
    card.style.backgroundColor = "gray"


    let bookName = document.createElement("h1")
    card.appendChild(bookName)
    bookName.textContent = listOfBooks[index].name


    let author = document.createElement("h1")
    card.appendChild(author)
    author.textContent = listOfBooks[index].author
    
    
    let year = document.createElement("h1")
    card.appendChild(year)
    year.textContent = listOfBooks[index].year


    let removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    card.appendChild(removeButton)


    removeButton.addEventListener("click", function () {
        container.removeChild(card)
    })

    let readButton = document.createElement("button")
    readButton.textContent = "read"
    readButton.style.backgroundColor = "green"
    card.appendChild(readButton);


    readButton.addEventListener("click", function () {
        
        if (click === true) {
            readButton.textContent = "Not read"
            readButton.style.backgroundColor = "red"
            click = false
        }
        else {
            readButton.textContent = "read"
            readButton.style.backgroundColor = "green"
            click = true
        }
    })

    container.appendChild(card)
}

















