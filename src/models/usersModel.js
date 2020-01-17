let endpoint='http://localhost:9000'

class usersModel{
  static register=(data)=>{
    return fetch(endpoint+'/register',{
			headers:{
        'Content-Type':'application/json'
      },
      method:"POST",
      body: JSON.stringify(data)
    })
  }

}

export default usersModel