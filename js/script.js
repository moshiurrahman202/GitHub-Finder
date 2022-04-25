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
            if(data.meassge == "Not Found"){
                // Show Alart
            }else{
                // Show Profile

                // console.log(data.company);
                console.log(data);
                ui.showProfile(data);
            }
        })
        
    }else {
        // Clear Prolile
    }
});