let twitchClientId = 'lafb7yk4edz1y5h986j0j885d1u9vf'

export default class searchModel {
  static searchUsers = (identifier) => {
    return fetch('http://localhost:9000/users/'+identifier,{
      headers: {
        'Content-Type': 'application/json'
      },
      method: "GET",
    })
  }
  static searchTwitch=(identifier)=>{
    return fetch('https://api.twitch.tv/helix/users?login=' + identifier, {
      headers: {
        'Client-ID': twitchClientId
      },
      method: "GET",
    })
  }
}