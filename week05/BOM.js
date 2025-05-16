document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#favchap");
  const addButton = document.querySelector("#add-chapter");
  const list = document.querySelector("#list");

  let chaptersArray = getChapterList() || [];

  chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

  addButton.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus;
    }
  });

    function displayList(item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
      
        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add('delete');
        deleteButton.addEventListener("click", function () {
            list.removeChild(listItem);
            input.focus();
        });
    }

    function setChapterList() {
        localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
    };

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter((item) => item !== chapter);
        setChapterList();
    }
  
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
