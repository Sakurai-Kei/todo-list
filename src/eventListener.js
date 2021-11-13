import {buttons} from './buttons.js';
import {displayItem} from './displayItem.js';
import {create} from './class.js';

const eventListener = (() => {
    buttons.nav.addEventListener('click', displayItem.nav);
    buttons.main.addEventListener('click', displayItem.tab);
    buttons.priority.addEventListener('click', displayItem.tab)
    buttons.project.forEach(project => {
        project.addEventListener('click', displayItem.tab);
    })
    buttons.addProject.addEventListener('click', displayItem.addProjectModal);
    // buttons.cancelProject.addEventListener('click', /* Some function */);
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
})();

export {eventListener};