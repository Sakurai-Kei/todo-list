import {storageModule} from './localStorage.js';

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
    let storedData = storageModule.retrieveData()
    let projectListArray = storedData['projectList'];
    let taskListArray = storedData['taskList'];
    function newProject(pTitle) {
        let project = new Project(pTitle);
        projectListArray.push(project);
        storageModule.storeData('projectList', projectListArray);
    }
    function newTask(pTitle, title, dueDate, detail) {
        let task = new Task(pTitle, title, dueDate, detail);
        taskListArray.push(task);
        storageModule.storeData('taskList', taskListArray);
    }
    function getProject() {
        return projectListArray;
    }
    function getTask() {
        return taskListArray;
    }
    function updateProject(project) {
        projectListArray = project;
    }
    function updateTask(task) {
        taskListArray = task;
    }
    return {newProject, newTask, getProject, getTask, updateProject, updateTask};
})();

export {create};