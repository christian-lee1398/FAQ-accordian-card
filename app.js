const parent = document.getElementsByClassName("parent");
const arrows = document.getElementsByClassName("arrow");
let i;


function modifyText() {
    this.classList.toggle("selected");
    let sibling = this.nextElementSibling;
    if (sibling.style.display === "block") {
        sibling.style.display = "none";
    } else {
        sibling.style.display = "block";
    }
    let child = this.firstElementChild;
    child.classList.toggle("rotated")
}

for (i = 0; i < parent.length; i++) {
    parent[i].addEventListener("click", modifyText)
}


