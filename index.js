document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;
const params = new URLSearchParams(data);

const amount = params.get('amount');
const genres = params.getAll('genres');
const medical = params.get('medical');
const thriller = params.get('thriller');
const fname = params.get('fname');
const friendchar = params.get('friendchar')
const sitcom = params.get('sitcom')

let characters;
let image;
let paragraph;

if (amount >= 1 && genres == "action-advent" && medical == "greys" && thriller == "handmaid" && friendchar == "joey" && sitcom == "parksrec") {
    characters = 'elite';
    image = 'images/blue.webp';
    paragraph = 'a great taste in the shows you watch and the characters you enjoy watching. The shows that you like show that you are adventerous and like trying new things.';
} else if (amount >= 1 && genres == "drama" && medical == "er" && thriller == "keve" && friendchar == "phoebe" && sitcom == "modfam") {
    characters = 'superb';
    image = 'images/purple.webp';
    paragraph = 'a very diverse taste in what you watch. You like venturing outside of your comfort zone to see new things.';
} else if (amount >= 1 && genres == "comedy" && medical == "scrubs" && thriller == "cminds" && friendchar == "chandler" && sitcom == "office") {
    characters = 'funny';
    image = 'images/orange.jpg';
    paragraph = 'a great sense of humor, and the shows you watch reflect on it. You look for an escape from life in the humor in shows.';
} else if (amount >= 1 && sitcom == "office") {
    characters = 'amazing';
    image = 'images/golden.jpg';
    paragraph = "a superior taste in your favorite sitcom show. The Office is relatable in some fashion to you and provides you happiness.";
} else if (amount >= 1 && genres == "horror" && medical == "chicago-med" && thriller == "ozark" && friendchar == "monica" && sitcom == "comm") {
    characters = 'okay';
    image = 'images/pink.jpg';
    paragraph = "have an interesting taste in the shows that you watch. You may only like watching shows of a certain genre and do not like to venture outside your comfort zone.";
} else if (amount == 0) {
    characters = 'boring';
    image = 'images/grey.jpg';
    paragraph = 'no enjoyment in watching TV. You may enjoy your time doing other activites like, reading, biking, or cooking.';
} else {
    characters = 'cool';
    image = 'images/yellow.webp';
    paragraph = 'a preference in TV shows that aligns with most of the population. You enjoy a mix of many different shows.';
}


function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1>You are ${characters}, ${fname}!</h1>
                           <img src="${image}"></img>
                           <p>You have ${paragraph}</p>`;
}