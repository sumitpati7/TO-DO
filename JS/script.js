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

let todo = [];
let i = 0;

function add() {
    let count = 0;
    console.log("Hello");
    let title = document.getElementById("title");
    let details = document.getElementById("details");
    let priority = document.querySelector('input[name="rating"]:checked');
    let deadline = document.getElementById("deadline");
    let category = document.getElementById("category");
    todo[i] = new TODO(title.value, details.value, priority.value, deadline.value, category.value);
    console.log(todo[i++]);
    return false;
}