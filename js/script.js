/*
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

#  Milestone 1 
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
*/

//RECUPERO GLI ELEMENTI DAL DOM
const feed = document.querySelector('.posts-list')

//#  Milestone 1 
const post = [
    {
        id : 1,
        nome : 'Phill Mangione',
        imgProfile : 'https://picsum.photos/500/400?image=41',
        data : '05/25/2021',
        descrizione : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost : 'https://picsum.photos/600/300?image=3',
        like : 50,
    },
    {
        id : 2,
        nome : 'Betty D. Montgomery',
        imgProfile : 'https://picsum.photos/500/400?image=20',
        data : '01/25/2020',
        descrizione : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost : 'https://picsum.photos/600/300?image=100',
        like : 90,
    },
    {
        id : 3,
        nome : 'Steven M. Caldwell',
        imgProfile : 'https://picsum.photos/500/400?image=51',
        data : '06/07/2022',
        descrizione : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost : 'https://picsum.photos/600/300',
        like : 100,
    }

]


//#  Milestone 2
let posts = '';

for(let i = 0; i < post.length; i++){
    const currentPost = post[i];

    posts +=
    `<div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src="${currentPost.imgProfile}" alt="${currentPost.nome}" />
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${currentPost.nome}</div>
              <div class="post-meta__time">${currentPost.data}</div>
            </div>
          </div>
        </div>
        <div class="post__text">
            ${currentPost.descrizione}
        </div>
        <div class="post__image">
          <img src="${currentPost.imgPost}" alt="post" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <a class="like-button js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </a>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${currentPost.like}</b> persone</div>
          </div>
        </div>
      </div>`;
      
}

feed.innerHTML = posts;



//#  Milestone 3
const like = document.querySelectorAll('.like-button');

for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function() {
      like[i].classList.toggle("like-button--liked");
    });
}






