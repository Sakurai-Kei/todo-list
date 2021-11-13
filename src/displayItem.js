import {create} from './class.js';

const displayItem = (() => {
    function tab() {
        if(this.textContent !== "Main" & this.textContent !== "Priority") {
            // Execute Function to display all task in the selected project
            console.log(this.textContent);
            let that = this.textContent;
            const taskListContainer = document.getElementById('todoList')
            taskListContainer.textContent = "";
            let taskList = create.getTask();
            let filterTaskList = taskList.filter(task => task.pTitle == that);
            filterTaskList.forEach(task => {
                const taskModal = document.createElement('div');
                taskModal.classList.add('modal');
                const title = document.createElement('div');
                title.textContent = task.title;
                const dueDate = document.createElement('div');
                dueDate.textContent = task.dueDate;
                const detail = document.createElement('div');
                detail.textContent = task.detail;
                taskModal.appendChild(title);
                taskModal.appendChild(dueDate);
                taskModal.appendChild(detail);
                taskListContainer.appendChild(taskModal);
            })
            addTaskModal();
        }
        else {
            switch(this.textContent) {
                case "Main":
                    // Execute Function to display all task
                    console.log(this.textContent);
                    break;
                case "Priority":
                    // Execute Function to display task that must be completed this week
                    console.log(this.textContent);
                    break; 
            }
        }
    }
    function nav() {
        document.getElementById('navTabActive').classList.toggle('navTabHidden');
    }
    function addProjectModal() {
        document.getElementById('addProjectModal').style.display = 'flex';
    }

    function closeAddProjectModal() {
        document.getElementById('addProjectModal').style.display = 'none';
    }
    function clearProjectListDisplay() {
        const projectListTab = document.getElementById('projectList');
        projectListTab.textContent = "";
    }
    function displayProjectList() {
        let projectList = create.getProject();
        clearProjectListDisplay();
        const projectListTab = document.getElementById('projectList');
        projectList.forEach(project => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.classList.add('navItem');
            button.classList.add('project');
            button.textContent = project.pTitle;
            button.addEventListener('click', tab)
            li.appendChild(button);
            projectListTab.appendChild(li);
        });
    }
    function addTaskModal() {
        const taskListContainer = document.getElementById('todoList');
        const taskModal = document.createElement('div');
        taskModal.classList.add('modal');
        taskModal.classList.add('addTaskButton');
        const title = document.createElement('div');
        title.textContent = '+';
        taskModal.appendChild(title);
        taskListContainer.appendChild(taskModal);
        taskModal.addEventListener('click',() => {
            showAddTaskModal();
        })
    }
    function showAddTaskModal() {
        document.getElementById('addTaskModal').style.display = 'flex';

    }

    let checkProjectList = create.getProject();
    if(checkProjectList !== null){
        displayProjectList();
    }
    return {tab, nav, addProjectModal, closeAddProjectModal, displayProjectList, showAddTaskModal};
})();

export {displayItem};