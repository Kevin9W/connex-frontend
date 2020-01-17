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
    .then(()=>console.log('Success from userModels'))
		.catch(error=>console.log("Failed to post data",error))
  }

}

export default usersModel