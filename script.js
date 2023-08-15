const myLibrary = []

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    function getReadStatus(){
        return this.read ? "green" : "red";
    }
}

const addBtn = document.querySelector("#add")

addBtn.addEventListener("click",(e)=>{
    
})