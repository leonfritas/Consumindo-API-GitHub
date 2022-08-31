const user = {
    avatarUrl: '',
    name:'',
    bio:'',
    followers:'',
    following:'',
    userName:'',
    repositories:'',
    forks:'',
    stars:'',
    watchers:'',
    language:'',
    events:'',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.userName = gitHubUser.login
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks
        this.stars = repositories.stargazers_count
        this.watchers = repositories.watchers
        this.language = repositories.language

    },
    setEvents(events){
        this.events = events
    }
}


export { user }