const buttons = (() => {
    const main = document.getElementById('main');
    const priority = document.getElementById('priority');
    const project = Array.from(document.querySelectorAll('.project'));

    return {main, priority, project};
})();

export {buttons};