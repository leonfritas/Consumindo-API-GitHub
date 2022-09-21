const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `
                        <div class="infouser">
                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
                            <div class="data">
                                <h1> ${user.name ?? "Não possui nome cadastrado😔"}</h1>
                                <p>${user.bio ?? "Não possui bio cadastrada😮"}</p>
                                <div class="followers"
                                    <p>${user.followers}👥Seguidores</p>
                                    <p>${user.following}👤Seguindo</p>
                                </div>
                            </div>
                        </div>
                        `

        let repositoriesItens = ''
        
        user.repositories.forEach(repo => repositoriesItens += `<li><a href ="${repo.html_url}" target="_blank">${repo.name}</a><br>
                                                                    <ul class="details"> 
                                                                       <li> ${repo.forks}🍴</li>
                                                                       <li> ${repo.stargazers_count}⭐</li>
                                                                       <li>${repo.watchers}👀</li>
                                                                       <li> ${repo.language ?? "Sem linguagem"}🌅</li>
                                                                    </ul>
                                                                </li>`)
                                                                
                                                                
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += ` <h2 class="repotitle">Repositórios</h2>
                                            <div class="repositories section">
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
                                    }

       
       
       
        let eventsItens = ''
        user.events.forEach(event => {
             if(event.type === "PushEvent" || event.type === "CreateEvent"){
                if(event.payload.commits){
                eventsItens += `<li>Nome do Repositório:<p>${event.repo.name}</p>Commit:<p>${event.payload.commits[0].message} <br><br><br></p></li>`;
                }
             }
            })
            if(user.events.length > 0){
                this.userProfile.innerHTML += `<h2 class="eventstitle">Eventos</h2>
                                                <div class="events">
                                                    <ul>${eventsItens}</ul>
                                                </div>`
                                            }

        
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<p>Usuário não encontrado</p>"
    }
}

export { screen }