const ideaList = document.querySelector('#idea-list');

// create element & render ideas
function renderIdea(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let description = document.createElement('span');

    title.classList.add("title");
    title.classList.add("description");

    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data().title;
    description.textContent = doc.data().description;

    li.appendChild(title);
    li.appendChild(description);

    ideaList.appendChild(li);
}

// getting data and updating data in realtime
db.collection('ideas').orderBy("timestamp", "desc").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderIdea(change.doc);
        } else if (change.type == 'removed'){
        }
    });
});
