const parents = document.querySelectorAll(".parent");
const arrows = document.querySelectorAll(".arrow");
const children = document.querySelectorAll(".child");
let i;

const parentArray = Array.from(parents)
const arrowArray = Array.from(arrows)
const childArray = Array.from(children)

for (let parent of parentArray) {
    parent.addEventListener('click', () => {
        if (parent.classList.contains("selected")) {
            parent.classList.remove("selected")
            parent.firstElementChild.classList.remove("rotated")
            // parent.nextElementSibling.style.display === "none"
            parent.nextElementSibling.classList.add("hidden")
        } else {
            for (let parentR of parentArray) {
                parentR.classList.remove("selected")
            }
            for (let arrowR of arrowArray) {
                arrowR.classList.remove("rotated")
            }
            for (let childR of childArray) {
                // childR.style.display === "none"
                childR.classList.add("hidden")
            }
            parent.classList.add("selected")
            parent.firstElementChild.classList.add("rotated")
            // parent.nextElementSibling.style.display === "block"
            parent.nextElementSibling.classList.remove("hidden")
        }
        console.log(childArray)
    })
}

for (let arrow of arrowArray) {
    arrow.addEventListener("click", () => {
        if (!arrow.classList.contains("rotated")) {
            for (let arrowR of arrowArray) {
                arrowR.classList.remove("rotated")
            }
            for (let parentR of parentArray) {
                parentR.classList.remove("selected")
            }
            for (let childR of childArray) {
                // childR.style.display === "none"
                childR.classList.add("hidden")
            }
            arrow.classList.add("rotated")
            arrow.previousElementSibling.classList.add("selected")
            // arrow.nextElementSibling.style.display === "block"
            arrow.nextElementSibling.classList.remove("hidden")
        } else {
            arrow.classList.remove("rotated")
            arrow.previousElementSibling.classList.remove("selected")
            // arrow.nextElementSibling.style.display === "none"
            arrow.nextElementSibling.classList.add("hidden")
        }
    })
}

// function modifyText() {
//     this.classList.toggle("selected");
//     let sibling = this.nextElementSibling;
//     if (sibling.style.display === "block") {
//         sibling.style.display = "none";
//     } else {
//         sibling.style.display = "block";
//     }
//     let child = this.firstElementChild;
//     child.classList.toggle("rotated")
// }

// for (i = 0; i < parents.length; i++) {
//     parents[i].addEventListener("click", modifyText)
// }


