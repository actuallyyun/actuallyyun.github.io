//Display datatime
var dt = new Date()
document.getElementById("datetime").innerHTML = dt.toGMTString()


//Global variables
const form = document.getElementById('form')
const input = document.getElementById('input')
const todayUL = document.getElementById('todays')
const todays = JSON.parse(localStorage.getItem('todays'))
//For each item in the list, call addToday function.
if (todays) {
    todays.forEach(today => addToday(today))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToday()
})

function addToday(today) {
    let todayText = input.value

    if (today) {
        todayText = today.text
    }
    //Dynamically generate an unordered list
    if (todayText) {
        const todayEachList = document.createElement('li')
        if (today && today.completed) {
            todayEachList.classList.add('completed')
        }

        todayEachList.innerText = todayText

        // Add left click to complete eventlistener
        todayEachList.addEventListener('click', () => {
            todayEachList.classList.toggle('completed')
            updateList()
        })
        // Add right click to remove eventlistener
        todayEachList.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todayEachList.remove()
            updateList()
        })

        todayUL.appendChild(todayEachList)
        input.value = ''
        updateList()
    }
}

function updateList() {
    todayAllList = document.querySelectorAll('li')

    const todays = []

    todayAllList.forEach(today => {
        today.push({
            text: today.innerText,
            completed: today.classList.contains('completed')
        })
    })

    localStorage.setItem('todays', JSON.stringify(todays))
}
