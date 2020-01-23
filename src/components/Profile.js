import React, { Component } from 'react'
import styles from '../styles/Profile.module.css'
import usersModel from '../models/usersModel.js'

export default class Profile extends Component {
  state={
    description:"",
    tags:"",
    public:0,
    edit:false,
    data:null,
  }
  fetchData=()=>{
    usersModel.getUserInfo(this.props.user_login)
      .then(response=>response.json())
      .then(data=>this.setState({data,
        public:data.data.public, 
        description: data.data.description,
        tags: data.data.tags,
        }))
  }
  handleChange=(event)=>{
    if (event.target.type==='checkbox'){
      this.setState({ [event.target.name]: Number(event.target.checked) })
    }
    else{
      this.setState({[event.target.name]:event.target.value})
    }
  }
  handleEdit=()=>{
    this.setState({ edit: true })
  }
  handleCancel = () => {
    this.setState({ edit: false })
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    let tags = this.state.tags.replace(/\s+/g, '').split(",")
    usersModel.updateUserInfo(this.props.user_login,{
      description:this.state.description,
      public:this.state.public,
      tags:tags,
      id:this.state.data.data.id,
    })
      .then(status=>console.log(status))
    this.fetchData()
    this.setState({ edit: false })
  }
  componentDidMount(){
    this.fetchData()
  }
  render() {
    let user=null 
    let content=null
    let date=null
    if (this.state.data){
      user = this.state.data.data
      let tags=this.state.tags
      if (this.state.tags.length>1){
       tags=tags.join(', ')
      }
      let dateReg = new Date(user.date_registered)
      date = dateReg.getMonth()+1+'-'+dateReg.getFullYear()
      if (this.state.edit){
        content=(
          <form onSubmit={this.handleSubmit}>
            <h2>{user.user_login}</h2>
            <div>
              <label className={styles.textbox}>Description</label>
              <textarea rows='5' cols='50' name="description" defaultValue={user.description} onChange={this.handleChange}/>
              <p>Keep tags seperated with ' , '</p>
              <input name="tags" defaultValue={tags} onChange={this.handleChange}></input>
              <input type="checkbox" name="public" onClick={this.handleChange} defaultChecked={this.state.public}/>             
              <label>Public</label>
            </div>
            <p>Date Created: {date}</p>
            <div className={styles.buttons}>
              <button onClick={this.handleCancel}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        )
      }
      else{
        content=(
          <>
            <h2>{user.user_login}</h2>
            <label>Description</label>
            <div>
              <p className={styles.description}>{user.description}</p>
            </div>
            <p>Tags: {tags}</p>
            <p>Date Created: {date}</p>
            <p>Profile: {user.public?'Public':'Private'}</p>
            <div className={styles.buttons}>
              <button onClick={this.handleEdit}>Edit</button>
            </div>
          </>
        )
      }
        
    }
    return (
      <div className={styles.container}>
        {user?
        content
        :"Loading ..."}
      </div>
    )
  }
}
