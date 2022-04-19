function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (index of dezDaysList) {
  let elementLi = document.createElement("li");
  let elementUl = document.getElementById("days");

  if (index == 25 || index == 25) {
    elementLi.classList = "day friday holiday";
  } else if (index == 24 || index == 31) {
    elementLi.classList = "day holiday";
  } else if (index == 4 || index == 11 || index == 18 || index == 25) {
    elementLi.classList = "day friday";
  } else {
    elementLi.className = "day";
  }
  elementLi.innerText = index;
  elementLi.addEventListener("mouseover", zoom);
  elementLi.addEventListener("mouseout", zoomOut);
  elementLi.style.backgroundColor = "rgb(238,238,238)";
  elementUl.appendChild(elementLi);
  console.log((elementLi.style.backgroundColor));
}

function createButtonHoli() {
  let elementButton = document.createElement("button");
  let elementButtonsContainer = document.getElementsByClassName("buttons-container")[0];
  elementButton.id = "btn-holiday";
  elementButton.innerText = "Feriados";
  elementButtonsContainer.appendChild(elementButton);

  elementButton.addEventListener("click", showHolidays);

  let active = false;

  function showHolidays() {
    let holidaysList = document.querySelectorAll(".holiday");

    if (active === false) {
      active = true;
    } else {
      active = false;
    }

    for (let index = 0; index < holidaysList.length; index += 1) {
      if (active === true) {
        holidaysList[index].style.backgroundColor = "black";
      } else {
        holidaysList[index].style.backgroundColor = "rgb(238,238,238)";
      }
    }
  }
}
createButtonHoli();

function createButtonFridays() {
  let active = false;
  let elementButton = document.createElement("button");
  let elementButtonsContainer = document.getElementsByClassName("buttons-container")[0];
  elementButton.id = "btn-friday";
  elementButton.innerText = "Sexta-feira";
  elementButtonsContainer.appendChild(elementButton);

  elementButton.addEventListener("click", showFridays);

  function showFridays() {
    let fridaysList = document.querySelectorAll(".friday");

    if (active === false) {
      active = true;
    } else {
      active = false;
    }

    for (let index of fridaysList) {
      if (active === false) {
        index.style.backgroundColor = "black";
      } else {
        index.style.backgroundColor = "rgb(238,238,238)";
      }
    }
  }
}

createButtonFridays();


function zoom (event){
  event.target.style.fontSize = "2.2em";
}

function zoomOut (event1){
  event1.target.style.fontSize = "1.4em";
}

document.getElementById("btn-add").addEventListener("click", addTask);

function addTask (){
  let elementTaskInput = document.getElementById("task-input").value;
  let elementDiv = document.createElement("span");
  elementDiv.innerText = elementTaskInput;
  
  if (elementTaskInput !== ""){
   (document.getElementsByClassName("my-tasks")[0]).appendChild(elementDiv);
    let corChosen = window.prompt("Escolha uma cor");
    createDivLegend(corChosen);
  } else {
    window.alert("Escreva alguma coisa");
  }

  function createDivLegend(cor){
    let elementDivMyTasks = document.getElementsByClassName("my-tasks")[0];
    let elementDiv = document.createElement("div");
    elementDiv.addEventListener("click", selectClass)
    elementDiv.className = "task";
    elementDiv.style.backgroundColor = cor;
  
    elementDivMyTasks.appendChild(elementDiv);
  
  }
}

function selectClass(event){
  let divSelected = event.target;
  divSelected.classList.toggle("selected");

}