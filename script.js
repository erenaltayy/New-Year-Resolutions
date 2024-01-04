const newGoal = document.getElementById("newGoal");
const goalsList = document.getElementById("goalsList");
const addBtn = document.getElementById("addBtn");
const lockBtn = document.getElementById("lockBtn");
const container = document.getElementById("container");
const reviewArea = document.getElementById("reviewArea");
const displayArea = document.getElementById("displayArea");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

window.addEventListener("load", ()=>{
    if(localStorage.getItem("isLocked") === "true"){
        p1.style.display = "none";
        p2.style.display = "none";
        showGoals();
    }
    else{
        p3.style.display = "none";
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
    location.reload();

})

function showGoals(){
    const ul = document.createElement("ul");
    displayArea.appendChild(ul);
    ul.textContent = "Your goals for the New Year"

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


