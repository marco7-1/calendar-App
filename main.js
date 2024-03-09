const curentdate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

// getting new data    current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"] ;


const renderCalender = () =>{
    let firstDayofWeek = new Date(currYear,currMonth,1).getDay(); // getting first day of month
    let lastDateofMonth = new Date(currYear,currMonth + 1,0).getDate(); // getting last date of month
    let lastDayofMonth = new Date(currYear,currMonth,lastDateofMonth).getDay(); // getting last day of month
    let lastDateofLastMonth = new Date(currYear,currMonth,0).getDate(); // getting last date of previous month
    let liTag = "";

    
    for (let i = firstDayofWeek; i > 0  ; i--){ // creating li of previous month last day
        liTag += `<li class="inactive">${lastDateofLastMonth - i +1}</li>`
    }



    for (let i = 1; i <= lastDateofMonth ; i++){ // creating li of all days of current month 
    // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth == new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : "" ;
        liTag += `<li class="${isToday}">${i}</li>`
    }

    
    for (let i = lastDayofMonth; i < 6  ; i++){ // creating li of next month first day
        liTag += `<li class="inactive">${i - lastDayofMonth +1}</li>`
    }
    
    
    
    curentdate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalender()

prevNextIcon.forEach(icon =>{
    icon.addEventListener("click",() => { //adding click event on both icons
// if clicked icon is prev (left) icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth -1 : currMonth +1 ;


        if(currMonth < 0 || currMonth > 11){

            date = new Date(currYear,currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else{
            date = new Date();
        }
        renderCalender()
    });
});