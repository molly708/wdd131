document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#favchap");
  const addButton = document.querySelector("#add-chapter");
  const list = document.querySelector("#list");
  
  addButton.addEventListener("click", function () {
      const chapterName = input.value.trim();
      
      if (chapterName === "") {
          alert("Please enter a chapter name.");
          input.focus();
          return;
      }
      
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.textContent = chapterName;
      
      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", function () {
          list.removeChild(listItem);
          input.focus();
      });
      
      // Append the delete button to the list item
      listItem.appendChild(deleteButton);
      
      // Append the list item to the list
      list.appendChild(listItem);
      
      // Clear the input field
      input.value = "";
      
      // Refocus on the input field
      input.focus();
  });
});
