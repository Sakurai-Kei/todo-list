const displayItem = (() => {
    function tab() {
        if(this.textContent !== "Main" | this.textContent !== "Priority") {
            // Execute Function to display all task in the selected project
            console.log(this.textContent);
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
    return {tab, nav, addProjectModal};
})();

export {displayItem};