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


//#  Milestone 1 
const post = [
    {
        id : 1,
        nome : 'Phill Mangione',
        imgProfile : 'https://picsum.photos/600/300',
        data : 05/25/2021,
        descrizione : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost : 'https://picsum.photos/600/300',
        like : 'Piace a 80 persone'
    },
    {
        id : 2,
        nome : 'Phill Mangione',
        imgProfile : 'https://picsum.photos/600/300',
        data : 01/25/2020,
        descrizione : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost : 'https://picsum.photos/600/300',
        like : 'Piace a 80 persone'
    },
    {
        id : 3,
        nome : 'Phill Mangione',
        imgProfile : 'https://picsum.photos/600/300',
        data : 06/07/2022,
        descrizione : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost : 'https://picsum.photos/600/300',
        like : 'Piace a 80 persone'
    }
]