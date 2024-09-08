const noteContainer = document.getElementById("note-container");
const inputForm = document.getElementById("inputform");

function saveNotes() {
  const notes = [];
  const noteElements = noteContainer.children;
  for (let i = 0; i < noteElements.length; i++) {
    const note = {
      title: noteElements[i].children[0].textContent,
      description: noteElements[i].children[1].textContent,
    };
    notes.push(note);
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    const notes = JSON.parse(storedNotes);
    notes.forEach((note) => {
      const newNote = document.createElement("div");
      newNote.className = "note";
      const title = document.createElement("h2");
      title.textContent = note.title;
      newNote.appendChild(title);
      const description = document.createElement("p");
      description.textContent = note.description;
      newNote.appendChild(description);
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "X";
      removeButton.className = "closeBtn";
      removeButton.addEventListener("click", () => {
        noteContainer.removeChild(newNote);
        saveNotes();
      });
      newNote.appendChild(removeButton);
      noteContainer.appendChild(newNote);
    });
  }
}

loadNotes();

document.getElementById("addbutton").addEventListener("click", () => {
  inputForm.style.display = "flex";
  inputForm.classList.add("show");
});

document.getElementById("add").addEventListener("click", () => {
  const note = document.createElement("div");
  note.className = "note";
  let title = document.createElement("h2");
  title.textContent = document.getElementById("title").value;
  note.appendChild(title);
  noteContainer.appendChild(note);
  let description = document.createElement("p");
  description.textContent = document.getElementById("content").value;
  note.appendChild(description);
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  note.appendChild(removeButton);
  removeButton.className = "closeBtn";
  removeButton.addEventListener("click", () => {
    noteContainer.removeChild(note);
    saveNotes();
  });
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  if (inputForm.style.display = "flex") {
    inputForm.style.display = "none";
  } else {
    inputForm.style.display = "flex";
  }
  saveNotes();
});
