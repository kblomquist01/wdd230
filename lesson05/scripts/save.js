const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });


button.addEventListener('click', () => {
    if (input.value != '') {  
      displayList(input.value); 
      chaptersArray.push(input.value);
      setChapterList(); // update the localStorage with the new array
      input.value = ''; 
      input.focus(); 
    }
  });

  function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // remove the chapter from the array and local storage.
      input.focus();
    });
  }

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); // add chapter to local storage
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')); // get chapters from local storage
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }