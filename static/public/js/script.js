// script file
const addHobbyButton = document.querySelector('#add-hobby');

//Adds a new hobby field on the Create and Edit pages for profiles
function addField (){addHobbyButton
    const hobbyListDiv = document.querySelector('#hobby-list');
    const addedHobbyField = document.querySelector('#hobbies').cloneNode(true);
    addedHobbyField.value = "";
    hobbyListDiv.insertBefore(addedHobbyField, addHobbyButton);
}

addHobbyButton.addEventListener('click', addField);