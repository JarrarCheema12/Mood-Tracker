// const moods = document.querySelectorAll('.mood-options'); // Select all elements with class "mood-options"

// let moodHistory = [];
// moods.forEach((mood) => {
//     mood.addEventListener('click',(mood)=>{
//         const mymood = mood.target.dataset.mood;
//         localStorage.setItem("mymood", mymood)
        
//         moodHistory.push({ mood: mymood});
        
//     })
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const moodButtons = document.querySelectorAll(".mood-btn");
//     const moodHistoryList = document.getElementById("mood-history");

//     // Load mood history from LocalStorage
//     let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

//     // Function to update history display
//     function updateMoodHistory() {
//         moodHistoryList.innerHTML = "";
//         moodHistory.forEach((entry) => {
//             const li = document.createElement("li");
//             li.textContent = `${entry.date}: ${entry.mood}`;
//             moodHistoryList.appendChild(li);
//         });
//     }

//     // Event Listener for mood selection
//     moodButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const selectedMood = button.dataset.mood;
//             const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

//             // Add new mood entry
//             moodHistory.push({ date: today, mood: selectedMood });

//             // Save to LocalStorage
//             localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

//             // Update UI
//             updateMoodHistory();
//         });
//     });

//     // Initialize the UI with saved history
//     updateMoodHistory();
// });
const listofmoods = document.getElementById('listofmoods')
let moodsArray = JSON.parse(localStorage.getItem('userData')) || []
const moods = document.querySelectorAll('.mood')
const recordsClear = document.getElementById('clear-record')
recordsClear.addEventListener('click',()=>{
    localStorage.clear()
    moodsArray = []
    listofmoods.innerHTML = ""; //
})
moodsArray.forEach((element)=>{
    let toinsert = document.createElement('li')
    let text = `mood : ${element.getmood} date : ${element.getDate}`
    toinsert.innerText = text
    listofmoods.appendChild(toinsert)
    
})
moods.forEach((mood)=> {
    mood.addEventListener('click',(e)=>{
        let getmood = e.target.dataset.mood
        let date = new Date()
        let getDate = date.toISOString().split("T")[0]
        let datatoinsert = {getmood , getDate}
        moodsArray.push(datatoinsert)
        localStorage.setItem('userData',JSON.stringify(moodsArray))
        let toinsert = document.createElement('li')
        let text = `mood : ${getmood} date : ${getDate}`
        toinsert.innerText = text
        listofmoods.appendChild(toinsert)
        
    })
     
});