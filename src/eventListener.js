import {buttons} from './buttons.js';
import {displayItem} from './displayItem.js';

const eventListener = (() => {
    buttons.main.addEventListener('click', displayItem.tab);
    buttons.priority.addEventListener('click', displayItem.tab)
    buttons.project.forEach(project => {
        project.addEventListener('click', displayItem.tab)
    })
})();

export {eventListener};