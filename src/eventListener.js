import {buttons} from './buttons.js';
import {displayItem} from './displayItem.js';
import {create} from './class.js';
import {format} from 'date-fns';

const eventListener = (() => {
    buttons.nav.addEventListener('click', displayItem.nav);
    buttons.main.addEventListener('click', displayItem.tab);
    buttons.project.forEach(project => {
        project.addEventListener('click', displayItem.tab);
    })
    buttons.addProject.addEventListener('click', displayItem.addProjectModal);
    buttons.submitProject.addEventListener('click', () => {
        let pTitle = document.getElementById('pTitle').value;
        create.newProject(pTitle);
        displayItem.closeAddProjectModal();
        document.getElementById('pTitle').value = "";
        displayItem.displayProjectList();
    })
    buttons.cancelProject.addEventListener('click', () => {
        displayItem.closeAddProjectModal();
        document.getElementById('pTitle').value = "";
    })
    buttons.cancelTask.addEventListener('click', () => {
        displayItem.closeAddTaskModal()
        document.getElementById('title').value = "";
        document.getElementById('dueDate').value = "";
        document.getElementById('detail').value = "";
    })
    buttons.submitTask.addEventListener('click', () => {
        let pTitle = displayItem.getCurrentTab();
        let title = document.getElementById('title').value;
        let dueDate = format(new Date(document.getElementById('dueDate').value), 'PPPP');
        let detail = document.getElementById('detail').value;
        create.newTask(pTitle, title, dueDate, detail);
        displayItem.closeAddTaskModal();
        document.getElementById('title').value = "";
        document.getElementById('dueDate').value = "";
        document.getElementById('detail').value = "";
        displayItem.tab();
    })
    window.addEventListener('load', () => {
        let checkProjectList = create.getProject();
        if(checkProjectList !== null){
            displayItem.displayProjectList();
            displayItem.tab();
        }
    })
})();

export {eventListener};