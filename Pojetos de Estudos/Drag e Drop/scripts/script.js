/* Selecting all required elements */
const dropArea = document.querySelector(".drag-area") 

/* If user Drag File Over DragArea */
dropArea.addEventListener("dragover", () => {
    console.log("File is over DragArea")
    dropArea.classList.add("active")
});

/* If user leave dragged File from DragArea */
dropArea.addEventListener("dragleave", () => {
    console.log("File is outside from DragArea")
    dropArea.classList.remove("active")
});