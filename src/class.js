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
    function newTask() {
        let task = new Task(pTitle, title, dueDate, detail);
        taskList.push(task);
        // Execute a function to store the newly created object in localStorage
    }
    function getProject(){
        return projectList;
    }
    function getTask() {
        return taskList;
    }
    return {newProject, newTask, getProject, getTask};
})();

export {create};