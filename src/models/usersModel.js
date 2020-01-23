let endpoint='http://localhost:9000'

export default class usersModel{
  static register=(data)=>{
    return fetch(endpoint+'/register',{
			headers:{
        'Content-Type':'application/json'
      },
      method:"POST",
      body: JSON.stringify(data)
    })
  }
  static login=(data)=>{
    return fetch(endpoint+'/login',{
      headers: {
        'Content-Type':'application/json'
      },
      method:"POST",
      body: JSON.stringify(data)
    })
  }
  static getUserInfo=(info)=>{
    return fetch(endpoint+'/profile/'+info,{
      headers: {
        'Content-Type': 'application/json'
      },
      method: "GET",
    })
  }
  static updateUserInfo=(user,data)=>{
    return fetch(endpoint+'/profile/'+user,{
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
  }
}