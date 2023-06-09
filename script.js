// Selecting the necessary elements from the DOM
const dragItems = document.querySelectorAll(".drag-item");
const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");
const successMessage = document.getElementById("success-message");

// Attaching event listeners to each drag item
dragItems.forEach((dragItem) => {
  dragItem.addEventListener("dragstart", dragStart);
  dragItem.addEventListener("dragend", dragEnd);
});

// Event listener for the second container to allow dropping
secondContainer.addEventListener("dragover", dragOver);
secondContainer.addEventListener("dragenter", dragEnter);
secondContainer.addEventListener("dragleave", dragLeave);
secondContainer.addEventListener("drop", dragDrop);

let draggedItem = null;

// Function to handle drag start event
function dragStart() {
  draggedItem = this;
  draggedItem.classList.add("dragging");
}

// Function to handle drag end event
function dragEnd() {
  draggedItem.classList.remove("dragging");
  draggedItem = null;
}

// Function to handle drag over event
function dragOver(e) {
  e.preventDefault();
}

// Function to handle drag enter event
function dragEnter(e) {
  e.preventDefault();
  this.style.border = "2px dashed #999";
}

// Function to handle drag leave event
function dragLeave() {
  this.style.border = "2px solid #aaa";
}

// Function to handle drop event
function dragDrop() {
  this.append(draggedItem);
  this.style.border = "2px solid #aaa";
  successMessage.style.display = "block";
}

// Function to reset the containers and hide the success message
function resetContainers() {
  while (secondContainer.firstChild) {
    secondContainer.removeChild(secondContainer.firstChild);
  }

  firstContainer.append(...dragItems);
  successMessage.style.display = "none";
}
