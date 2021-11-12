const storageModule = (() => {
    function storageAvailable(type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }
    function removeData(type) {
        localStorage.removeItem(type);
    }
    function isDataAvailable() {
        let projectList = JSON.parse(localStorage.getItem("projectList"));
        let taskList = JSON.parse(localStorage.getItem("taskList"));
        if(projectList === null){
            projectList = [];
            console.log(`No projectList from previous sessions`);
        }
        else if(projectList.length === 0){
            console.log(`Leftover Empty Object Detected. Clearing localStorage`);
            removeData("projectList");
        }
        else{
            console.log(`Stored Data Found. Restoring Data`);
        }
        if(taskList === null){
            taskList = [];
            console.log(`No taskList from previous sessions`);
        }
        else if(taskList.length === 0){
            console.log(`Leftover Empty Object Detected. Clearing localStorage`);
            removeData("taskList");
        }
        else{
            console.log(`Stored Data Found. Restoring Data`);
        }
        return {projectList, taskList};
    }
    function storeData(dataName, data) {
        localStorage.setItem(dataName, JSON.stringify(data));
    }
    function retrieveData() {
        const data = isDataAvailable();
        return data
    }
    if (storageAvailable('localStorage')) {
        console.log('localStorage is available')
      }
      else {
        console.log('localStorage is not available')
      }
    return {storeData, retrieveData}
})();

export {storageModule};