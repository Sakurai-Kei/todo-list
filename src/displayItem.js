import {create} from './class.js';

const displayItem = (() => {
    let currentTab = "Main";
    function getCurrentTab() {
        return currentTab;
    }
    function tab() {
        if(this == undefined) {
            currentTab = 'Main';
        }
        else if(this !== undefined & this.textContent !== undefined){
            currentTab = this.textContent;
        }
        if(currentTab !== "Main" & currentTab !== "Priority") {
            const taskListContainer = document.getElementById('todoList')
            taskListContainer.textContent = "";
            let taskList = create.getTask();
            let filterTaskList = taskList.filter(task => task.pTitle == currentTab);
            filterTaskList.forEach(task => {
                const taskModal = document.createElement('div');
                taskModal.classList.add('modal');
                taskModal.classList.add('task');
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
            deleteTaskButton();
            deleteProjectButton();
        }
        else {
            switch(currentTab) {
                case "Main":
                    const taskListContainer = document.getElementById('todoList')
                    taskListContainer.textContent = "";
                    let taskList = create.getTask();
                    taskList.forEach(task => {
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
                    break;
            }
        }
    }
    function nav() {
        document.getElementById('navTabActive').classList.toggle('navTabHidden');
        document.getElementById('todoList').classList.toggle('navTabHidden');
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
    function closeAddTaskModal() {
        document.getElementById('addTaskModal').style.display = 'none';
    }
    function showConfirmButton() {
        const taskListContainer = document.getElementById('todoList');
        const taskModal = document.createElement('div');
        taskModal.classList.add('modal');
        taskModal.classList.add('confirmButton');
        const title = document.createElement('div');
        title.textContent = '???';
        taskModal.appendChild(title);
        taskListContainer.appendChild(taskModal);
        taskModal.addEventListener('click',() => {
            const toBeRemoved = Array.from(document.querySelectorAll('.toBeRemoved'));
            toBeRemoved.forEach(task => {
                let taskList = create.getTask();
                let updatedTaskList = taskList.filter(oldTask => oldTask.title != task.firstChild.textContent);
                create.updateTask(updatedTaskList);
                task.remove();
            })
            deleteTaskButton();
            taskModal.remove();
            const todoList = Array.from(document.querySelectorAll('.task'));
            todoList.forEach(task => {
            task.removeEventListener('click', chooseTaskToRemove)
        })
        })
    }
    function chooseTaskToRemove() {
        this.classList.toggle('toBeRemoved');
    }
    function deletionMode() {
        const deleteTaskModal = document.querySelector('.deleteTaskButton');
        deleteTaskModal.remove();
        showConfirmButton();
        const todoList = Array.from(document.querySelectorAll('.task'));
        todoList.forEach(task => {
            task.addEventListener('click', chooseTaskToRemove)
        })
    }
    function deleteTaskButton() {
        const taskListContainer = document.getElementById('todoList');
        const deleteTaskModal = document.createElement('div');
        deleteTaskModal.classList.add('modal');
        deleteTaskModal.classList.add('deleteTaskButton');
        const title = document.createElement('div');
        title.textContent = '-';
        deleteTaskModal.appendChild(title);
        taskListContainer.appendChild(deleteTaskModal);
        deleteTaskModal.addEventListener('click', deletionMode);
    }
    function deleteProjectButton() {
        const taskListContainer = document.getElementById('todoList');
        const deleteProjectModal = document.createElement('div');
        deleteProjectModal.classList.add('modal');
        deleteProjectModal.classList.add('deleteProjectButton');
        const title = document.createElement('div');
        title.textContent = 'DEL';
        deleteProjectModal.appendChild(title);
        taskListContainer.appendChild(deleteProjectModal);
        deleteProjectModal.addEventListener('click', deleteProject)
    }
    function deleteProject() {
        let projectList = create.getProject();
        let updatedProjectList = projectList.filter(project => project.pTitle != currentTab);
        let taskList = create.getTask();
        let updatedTaskList = taskList.filter(task => task.pTitle != currentTab);
        create.updateProject(updatedProjectList);
        create.updateTask(updatedTaskList);
        currentTab = 'Main';
        tab();
        displayProjectList();
    }
    return {getCurrentTab, tab, nav, addProjectModal, closeAddProjectModal, displayProjectList, showAddTaskModal, closeAddTaskModal};
})();

export {displayItem};