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
        console.log('Nav Bar Clicked');
        document.getElementById('navTabActive').classList.toggle('navTabHidden');
    }
    return {tab, nav};
})();

export {displayItem};