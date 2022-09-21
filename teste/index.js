async function user(usern){
    const response = await fetch ('https://api.github.com/users/leonfritas/repos')
    return await response.json()
    
    
}

function getUserData(){
    user().then(userData =>{
        console.log(userData)
    })
}
getUserData()

