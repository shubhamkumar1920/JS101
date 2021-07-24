const draggables = document.querySelectorAll("img");
const containers = document.querySelectorAll(".grid-item");

draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
        //console.log("drag start")
        draggable.classList.add("dragging")
    })

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    })
})

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    container.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        const draggableParent = draggable.parentNode;
        const containerChild = container.firstElementChild;
        container.replaceChild(draggable, containerChild);
        draggableParent.appendChild(containerChild);
    })
})