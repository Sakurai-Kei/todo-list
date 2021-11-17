const buttons = (() => {
    const nav = document.getElementById('navIcon');
    const main = document.getElementById('main');
    const project = Array.from(document.querySelectorAll('.project'));
    const addProject = document.getElementById('addProject');
    const cancelProject = document.getElementById('pCancel');
    const submitProject = document.getElementById('pSubmit');
    const cancelTask = document.getElementById('tCancel');
    const submitTask = document.getElementById('tSubmit');

    return {nav, main, project, addProject, cancelProject, submitProject, cancelTask, submitTask};
})();

export {buttons};