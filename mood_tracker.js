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