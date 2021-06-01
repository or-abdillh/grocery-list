const listNameEl = document.querySelector('#list-name');
const btnSubmit = document.querySelector('#submit');
const parentLists = document.querySelector('main .lists');
const listElArr = [];
let status = false;
let tmp;

function makeElement (element) {
  let listName = element.value;
  const listEl = `
    <div class="list">
      <p>${listName}</p>
       <div class="actions">
         <i class="far fa-edit" data-index="${listName}"></i>
         <i class="far fa-trash-alt" data-index="${listName}"></i>
      </div>
    </div>
    `;
  return listEl;
}

btnSubmit.addEventListener('click', () => {
  if ( status == false) {
    listElArr.push(makeElement(listNameEl));
    parentLists.innerHTML = listElArr.join('');
  } else {
    listElArr[tmp] = makeElement(listNameEl);
    parentLists.innerHTML = listElArr.join('');
    status = false;
  }
  listNameEl.value = '';
})

document.addEventListener('click', function(el) {
  let current = el.target;
  let indexEl = current.dataset.index;
  //DELETE LIST
  if (current.classList.contains('fa-trash-alt')) {
    for (const list of listElArr) {
      if (list.includes(indexEl)) {
        listElArr.splice(listElArr.indexOf(list), 1);
        parentLists.innerHTML = listElArr.join('');
      }
    }
  }
  //EDIT LIST
  if (current.classList.contains('fa-edit')) {
    for (const list of listElArr) {
      if (list.includes(indexEl)) {
        listNameEl.value = indexEl;
        tmp = listElArr.indexOf(list);
        status = true;
      }
    }
  }
})