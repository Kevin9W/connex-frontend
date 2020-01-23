import React, { Component } from 'react'
import searchModel from "../models/searchModel";
import Results from "../components/Results";
import styles from "../styles/ResultsPage.module.css";

export default class ResultsPage extends Component {
  state={
    which:"users",
    userResults:[],
    twitchResults:[],
  }
  searchAll=()=>{
    if (this.props.searchQuery){
      searchModel.searchUsers(this.props.searchQuery)
        .then(response=>response.json())
        .then(data=>this.setState({userResults:data}))
      searchModel.searchTwitch(this.props.searchQuery)
        .then(response=>response.json())
        .then(data => this.setState({twitchResults:data}))
    }
  }
  componentDidMount(){
    this.searchAll()
    this.props.resetSearch()
  }
  componentDidUpdate(prevProps){
    if (this.props.searchQuery!==prevProps.searchQuery){
      this.searchAll()
    }
  }
  handleChange=(event)=>{
    this.setState({which:event.target.value})
  }
  render() {
    let sendResults=[]
    switch (this.state.which) {
      case ('users'):
        sendResults=this.state.userResults
        break
      case ('twitch'):
        sendResults=this.state.twitchResults
        break;
      case ('youtube'):

        break
      case ('oSM'):

        break
      default:
        break;
    }    
    return (
      <div className={styles.container}>
        <nav className={styles.types}>
          <select onChange={this.handleChange}>
            <option value="users">Users</option>
            <option value="twitch">Twitch</option>
        </select>
        </nav>
        <div className={styles.results}>
          {sendResults ? <Results which={this.state.which} data={sendResults} /> : "No Results ..."}
        </div>
      </div>
    )
  }
}
