class Project {
    constructor(pTitle) {
        this.pTitle = pTitle;
    }
}

class Task extends Project {
    constructor(pTitle, title, dueDate, detail) {
        super(pTitle);
        this.title = title;
        this.dueDate = dueDate;
        this.detail = detail;
    }
    // Method to return time limit before expiry
}

const create = (() => {
    let projectList = [];
    let taskList = [];
    function newProject() {
        let project = new Project(pTitle);
        projectList.push(project);
        // Execute a function to store the newly created object in localStorage
    }
    function newTask() {
        let task = new Task(pTitle, title, dueDate, detail);
        taskList.push(task);
        // Execute a function to store the newly created object in localStorage
    }
    return {newProject,newTask};
})();

export {create};