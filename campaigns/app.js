const campaignList = document.querySelector('#campaign-list');

// create element & render campaign
function renderCampaign(doc){
    let li = document.createElement('li');
    let link = document.createElement('a');
    let name = document.createElement('h4');
    let description = document.createElement('span');
    let coverImage = document.createElement('img');

    link.classList.add("link");
    name.classList.add("name");
    description.classList.add("description");
    coverImage.classList.add("coverImage");
    link.setAttribute("target", "_blank");

    li.setAttribute('data-id', doc.id);
    link.href = doc.data().link;
    name.textContent = doc.data().name;
    description.textContent = doc.data().description;
    coverImage.src = doc.data().cover;

    link.appendChild(coverImage);
    link.appendChild(name);
    link.appendChild(description);

    li.appendChild(link)
    campaignList.appendChild(li);
}

// getting data and updating data in realtime
db.collection('campaigns').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderCampaign(change.doc);
        } else if (change.type == 'removed'){
        }
    });
});
