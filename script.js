const books = document.querySelector('.books'),
        book = document.querySelectorAll('.book'),
        adv = document.querySelector('.adv'),
        linkBook = document.getElementsByTagName('a'),
        chaptersBooks =document.getElementsByTagName('ul'),
        chapter = document.getElementsByTagName('li');
document.body.style.backgroundImage = "url('../image/you-dont-know-js.jpg')"

books.append(book[1]);//первая
books.append(book[0]);//вторая 
books.append(book[4]);// тертья
books.append(book[3]);//четвертая
books.append(book[5]);// пятая
books.append(book[2]);//шестая

adv.remove();

linkBook[2].innerHTML ='Книга 3. this и Прототипы Объектов';

chaptersBooks[1].prepend(chapter[16]);
chaptersBooks[1].prepend(chapter[9]);
chaptersBooks[1].prepend(chapter[16]);
chaptersBooks[1].prepend(chapter[15]);
chaptersBooks[1].prepend(chapter[14]);
chaptersBooks[1].prepend(chapter[14]);
chaptersBooks[1].prepend(chapter[16]);
chaptersBooks[1].prepend(chapter[16]);
chaptersBooks[1].prepend(chapter[16]);
chaptersBooks[1].prepend(chapter[16]);
chaptersBooks[1].prepend(chapter[16]);

chaptersBooks[4].prepend(chapter[46]);
chaptersBooks[4].prepend(chapter[45]);
chaptersBooks[4].prepend(chapter[43]);
chaptersBooks[4].prepend(chapter[45]);
chaptersBooks[4].prepend(chapter[45]);
chaptersBooks[4].prepend(chapter[43]);
chaptersBooks[4].prepend(chapter[45]);
chaptersBooks[4].prepend(chapter[45]);
chaptersBooks[4].prepend(chapter[46]);
chaptersBooks[4].prepend(chapter[46]);
chaptersBooks[4].prepend(chapter[46]);

const  newChapter = document.createElement('li');
newChapter.textContent ='Глава 8: За пределами ES6';

chapter[55].after(newChapter);


