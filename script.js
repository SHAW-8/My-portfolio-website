

let contactButton = document.getElementById('contactButton');
let FORM_container = document.getElementsByClassName('FORM_container')[0];
let formcloseIcon = document.getElementById('formcloseIcon');

contactButton.addEventListener('click', function() {
    if (FORM_container.style.display === 'none') {
        FORM_container.style.display = 'block';
    } else {
        FORM_container.style.display = 'none';
        
    }
});

formcloseIcon.addEventListener('click', function(){
    if(FORM_container.style.display === 'block'){
        FORM_container.style.display = 'none'
    }
})


let projectButton = document.getElementById('projectButton');
let projectReturnIXicon = document.getElementById('projectReturnIXicon');
let PROJECT_PARENT_containers = document.getElementsByClassName('PROJECT-PARENT-container');

// Function to show elements with the class name 'PROJECT-PARENT-container'
function showContainers() {
    for (let i = 0; i < PROJECT_PARENT_containers.length; i++) {
        PROJECT_PARENT_containers[i].style.display = 'block';
    }
}

// Function to hide elements with the class name 'PROJECT-PARENT-container'
function hideContainers() {
    for (let i = 0; i < PROJECT_PARENT_containers.length; i++) {
        PROJECT_PARENT_containers[i].style.display = 'none';
    }
}

projectButton.addEventListener('click', showContainers);

projectReturnIXicon.addEventListener('click', function() {
    // Check the display style of the first element in the collection
    if (PROJECT_PARENT_containers.length > 0 && PROJECT_PARENT_containers[0].style.display === 'block') {
        hideContainers(); // If displayed, hide all elements
    }
});



