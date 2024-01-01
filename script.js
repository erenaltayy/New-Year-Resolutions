const newGoal = document.getElementById("newGoal");
const goalsList = document.getElementById("goalsList");
const addBtn = document.getElementById("addBtn");
const lockBtn = document.getElementById("lockBtn");
const container = document.getElementById("container");
const reviewArea = document.getElementById("reviewArea");
const displayArea = document.getElementById("displayArea");

window.addEventListener("load", ()=>{
    if(localStorage.getItem("isLocked") === "true"){
        container.style.display = "none";
        reviewArea.style.display = "block";
        showGoals();
    }
    else{
        reviewArea.style.display = "none";
    }
})

addBtn.addEventListener("click", ()=>{
    if(newGoal.value !== ""){
        const goal = newGoal.value;
        const liElement = document.createElement("li");
        liElement.textContent = goal;
        goalsList.appendChild(liElement);
        localStorage.setItem(goal, goal);
    }
})

lockBtn.addEventListener("click", ()=>{
    localStorage.setItem("isLocked", true);
    container.style.display = "none";
    reviewArea.style.display = "block";
    showGoals();

})

function showGoals(){
    const ul = document.createElement("ul");
    displayArea.appendChild(ul);

    const goals = Object.keys(localStorage);
    goals.forEach((goal) => {
        if(goal === "isLocked"){
            return;
        }
        else{
            const liElement = document.createElement("li");
            liElement.textContent = goal;
            ul.appendChild(liElement);
        }
    })
}


