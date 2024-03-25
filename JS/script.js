class TODO {
    constructor(title, details, priority, deadline, category, number) {
        this.title = title;
        this.details = details;
        this.priority = priority;
        this.deadline = deadline;
        this.category = category;
        this.number = number;
    }
    get_title() {
        return (this.title);
    }
    get_details() {
        return (this.details);
    }
    get_priority() {
        return (this.priority);
    }
    get_deadline() {
        return (this.deadline);
    }
    get_category() {
        return (this.category);
    }
}
let a = new Date(2024, 2, 23);
a = a.toLocaleString();
let todo = [];
let i = 0;
todo[i] = new TODO('Medicine', 'Dont forget to take medicine', 4, a, 'personal', i++);
todo[i] = new TODO('Pick up Kids', 'Dont forget to take medicine', 4, a, 'kids', i++);
console.log(todo[0]);
console.log(todo[1]);
for (x of todo) {
    print(x);
}

function display_stars(x) {
    let str = '';
    for (let j = 0; j < x; j++) {
        str = str + `<i class="fa-solid fa-star" style="color:orange;"></i>`;
    }
    return str;
}

function add() {

    let title = document.getElementById("title");
    let details = document.getElementById("details");
    let priority = document.querySelector('input[name="rating"]:checked');
    let deadline = document.getElementById("deadline");
    let category = document.getElementById("category");
    deadline = new Date(deadline.value)
    deadline = deadline.toLocaleString();

    todo[i] = new TODO(title.value, details.value, priority.value, deadline, category.value, i);
    console.log(todo[i]);
    print(todo[i++]);
    document.getElementById("modal_form").reset();
    return false;
}

function remove(num) {
    let consent = confirm(`Do you want to delete ${todo[num].title}?`);
    if (consent) {
        todo.splice(num, 1)
        document.getElementById("print-area").innerHTML = '';
        for (x of todo) {
            print(x);
        }
        console.log(todo);
    }
}

function print(item) {
    document.getElementById("print-area").innerHTML += `<div class="items container" id="item${item.number}" ondblclick="remove(${todo.indexOf(item)})">
    <div class="row" style="margin-bottom:15px">
        <div class="col-sm-12 col-md-9 col-lg-8 col-xxl-7 item-title" style="border-bottom: 1px solid rgb(196, 193, 193);">${item.title}</div>
        <div class="priority col-sm-12 col-md-3 col-lg-4 col-xxl-5"> ${item.deadline}</div>
    </div>
    <div class="row px-3">
        <div class="col-sm-12 padding_remove">${display_stars(item.priority)}</div>
    </div>
    <div class="row px-3">
        <div class="col-sm-12 padding_remove">${item.category}</div>
    </div>
    <div class="row px-3">
        <div class="col-sm-12 padding_remove">${item.details}</div>
    </div>
</div>`
}

function addZero(num) {
    let min = ''
    if (num < 10) {
        min = '0' + num;
    } else {
        min = num;
    }
    return min;
}


function getdate() {
    let sec = '';
    let d = new Date();
    let min = d.getMinutes();
    let hr = d.getHours() % 12;
    sec = d.getSeconds();
    let year = d.getFullYear();
    let mon = d.getMonth();
    let date = d.getDate();
    let day = d.getDay();
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    document.getElementById("date").innerHTML = `${week[day]}, ${date} of ${month[mon]}, ${year}`;
    document.getElementById("time").innerHTML = hr + ":" + addZero(min) + ":" + addZero(sec);
    setInterval(getdate, 1000);
}
getdate();