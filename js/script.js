// Get The UI Element
let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

// Add Event Listener
searchBtn.addEventListener("click", (e) =>{
    let userText = searchUser.value;
    if(userText != ""){
        // Fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data  =>{
            if(data.message == "Not Found"){
                // Show Alart
                ui.showAlert("User Not Found!", "alert alert-danger");
            }else{
                // Show Profile
                // console.log(data);
                ui.showProfile(data);
            }
        })
        
    }else {
        // Clear Prolile
        ui.clearProfile();
    }
});