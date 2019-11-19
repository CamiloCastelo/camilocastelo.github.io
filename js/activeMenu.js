var menuHome = document.getElementById('xyz1');
var menuSave = document.getElementById('abc2');
var menuUser = document.getElementById('hij9');

menuHome.addEventListener('mouseup', clickedHome, false);
menuSave.addEventListener('mouseup', clickedSave, false);
menuUser.addEventListener('mouseup', clickedUser, false);

var currentMenuItem = '';

function clickedHome() {
    if (menuHome === currentMenuItem) {
        return;
    };
    //alert("home menu clicked: ");
    menuHome.style.background = 'blue';
    //alert('currentMenuItem: ' + currentMenuItem);
    if (currentMenuItem !== undefined && currentMenuItem !== "") {
        //alert("it ran: ");
        currentMenuItem.style.background = '';
    }
    setCurrent(menuHome);
}

function clickedSave() {
    if (menuSave === currentMenuItem) {
        return;
    };
    //alert("home menu clicked: ");
    menuSave.style.background = '#26f';
    if (currentMenuItem !== undefined && currentMenuItem !== "") {
        //alert("it ran: ");
        currentMenuItem.style.background = '';
    }
    setCurrent(menuSave);
}

function clickedUser() {
    //alert("home menu clicked: ");
    if (menuUser === currentMenuItem) {
        return;
    };
    menuUser.style.background = 'blue';
    if (currentMenuItem !== undefined && currentMenuItem !== "") {
        //alert("it ran: ");
        currentMenuItem.style.background = '';
    }
    setCurrent(menuUser);
}

function setCurrent(argMenu) {
    //alert("set current ran: ");
    currentMenuItem = argMenu;
    //alert('currentMenuItem: ' + currentMenuItem);
};