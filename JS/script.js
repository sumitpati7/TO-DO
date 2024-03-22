class TODO {
    constructor(title, details, priority, deadline, category) {
        this.title = title;
        this.details = details;
        this.priority = priority;
        this.deadline = deadline;
        this.category = category;
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
todo[i++] = new TODO('Medicine', 'Dont forget to take medicine', 4, a, 'personal')
todo[i++] = new TODO('Pick up Kids', 'Dont forget to take medicine', 4, a, 'kids')
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
    todo[i] = new TODO(title.value, details.value, priority.value, deadline, category.value);
    console.log(todo[i]);
    print(todo[i++]);
    document.getElementById("modal_form").reset();
    return false;
}

function print(item) {
    console.log(item);
    document.getElementById("print-area").innerHTML += `<div class="items container">
    <div class="row px-3" style="height: 45px; margin-bottom:15px">
        <div class="col-sm-7 col-md-7 col-lg-7 col-xxl-7 item-title" style="border-bottom: 1px solid rgb(196, 193, 193);">${item.title}</div>
        <div class="priority col-sm-5 col-md-5 col-lg-5 col-xxl-5 d-flex justify-content-center align-items-center"> ${item.deadline}</div>
    </div>
    <div class="row px-3">
        <div class="col-12">${display_stars(item.priority)}</div>
    </div>
    <div class="row px-3">
        <div class="col-12 ">${item.category}</div>
    </div>
    <div class="row px-3">
        <div class="col-12">${item.details}</div>
    </div>
</div>`
}