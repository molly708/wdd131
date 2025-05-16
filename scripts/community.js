// Community Thread Form
const newThreadForm = document.getElementById('newThreadForm');
const discussionsContainer = document.getElementById('discussions');

// Load stored threads from localStorage
const storedThreads = JSON.parse(localStorage.getItem('threads')) || [];
storedThreads.forEach(thread => {
  const newThread = document.createElement('div');
  newThread.classList.add('discussion');
  newThread.innerHTML = `
    <h4>${thread.title}</h4>
    <p>${thread.content}</p>
  `;
  discussionsContainer.appendChild(newThread);
});

// Event listener to handle new thread submission
newThreadForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = event.target.querySelector('input[name="title"]').value;
  const content = event.target.querySelector('textarea[name="content"]').value;

  if (title && content) {
    // Create a new thread object
    const newThread = { title, content };

    // Create a new DOM element to display the thread
    const newThreadElement = document.createElement('div');
    newThreadElement.classList.add('discussion');
    newThreadElement.innerHTML = ` 
      <h4>${title}</h4>
      <p>${content}</p>
    `;
    discussionsContainer.appendChild(newThreadElement);

    // Add the new thread to localStorage
    storedThreads.push(newThread);
    localStorage.setItem('threads', JSON.stringify(storedThreads));

    // Reset the form
    newThreadForm.reset();
  }
});