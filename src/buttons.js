const buttons = (() => {
    const nav = document.getElementById('navIcon');
    const main = document.getElementById('main');
    const priority = document.getElementById('priority');
    const project = Array.from(document.querySelectorAll('.project'));
    const addProject = document.getElementById('addProject');
    const cancelProject = document.getElementById('pCancel');
    const submitProject = document.getElementById('pSubmit');

    return {nav, main, priority, project, addProject, cancelProject, submitProject};
})();

export {buttons};