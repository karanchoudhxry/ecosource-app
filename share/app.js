const form = document.querySelector('#add-idea-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('ideas').add({
        title: form.title.value,
        description: form.description.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    form.title.value = '';
    form.description.value = '';
});