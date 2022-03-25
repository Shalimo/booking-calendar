const date = new Date();

function renderCalendar() {
    const lastCurrentMonthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // последнее число текущего месяца
    date.setDate(1); 
    const firstDayCurrentMonth = date.getDay(); // index 2 (tue)
    // console.log(date.getDay()); //tue - первый день месяца
    const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const lastIndexCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDay();
    const nextMonthDays = 7 - lastIndexCurrentMonth;

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const curentMonth = document.querySelector(".date h1");
    const currentDate = document.querySelector(".date p");
    const currentMonthDays = document.querySelector('.days');
    const obj = {
        a: new Date().getDay() == 0,
        b: new Date().getDay() == 5
    }
    console.log(obj.b)

    curentMonth.innerHTML = month[date.getMonth()];
    currentDate.innerHTML = new Date().toLocaleDateString();
    

    let days = "";

    for (let x = firstDayCurrentMonth; x > 0; x--) {
        days += `<div class="last-month-days">${prevMonthLastDay - x + 1}</div>`
    }

    for (let i = 1; i <= lastCurrentMonthDays; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="current-day">${i}</div>`;
        } 
        if (i === 5 || i == 6 || i == 12 || i == 13 || i == 19 || i == 20 || i == 25 || i == 26 ) {
            days += `<div class="cost" value="${i}">${i}<br>30 рублей</div>`;
        } else {
            days += `<div class="cost" value="${i}">${i}<br>10 рублей</div>`;
        }  

    } 

    for (let j = 1; j <= nextMonthDays; j++) {
        
        days += `<div class="next-month-days">${j}</div>`;
        currentMonthDays.innerHTML = days;

    }
}

const prev = document.querySelector('.previous');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

next.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

export default renderCalendar;