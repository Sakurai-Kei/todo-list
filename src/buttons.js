const buttons = (() => {
    const nav = document.getElementById('navIcon');
    const main = document.getElementById('main');
    const priority = document.getElementById('priority');
    const project = Array.from(document.querySelectorAll('.project'));

    return {nav, main, priority, project};
})();

export {buttons};