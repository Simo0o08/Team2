import React, { Component } from 'react'
import './myStyle.css'
// import { Link } from 'react-router';
class Profiles extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            Email : '',
            Profile: '',
            search:''
        }
    }
    handlenameChange=(event) =>{
this.setState({
    name : event.target.value
})

    }

    handleEmailChange=(event) =>{
        this.setState({
            Email : event.target.value
        })
    }
    handlesearchChange=(event) =>{
        this.setState({
            search : event.target.value
        })
    }
    handleProfileChange=(event) =>{
        this.setState({
            Profile : event.target.value
        })
    }
    handleSubmit=event=> {
        alert(` ${this.state.name} ${this.state.Email} ${this.state.Profile}`)
    event.preventDefault()
    }
    render(){
        return (
        <div className="dark-mode">
           <h2 className="cre">Cre</h2><h2 className="no">No</h2>
           <input type='text' className='searchTextField' placeholder="   Hello" value={this.state.search} onChange={this.handlesearchChange} />
           <button className="Search">Search</button>
           <div className="userProfile">Simran Keswani</div> 
           <div className="image"><img src="https://img.pngio.com/download-free-png-stockvader-predicted-adig-user-profile-icon-user-profile-png-880_880.png" alt="Avatar" className="avatar" /></div>
          <form onSubmit={this.handleSubmit} className="card">
              <br>
              </br>
           <h3>Profile</h3> 
              <div>
                  <label className="name">Name</label>
                  <input type='text' className='nameTextField' placeholder="     Full Name" value={this.state.name} onChange={this.handlenameChange} />
              </div>
              <div>
                  <label className='email'>Email</label>
                <input className="emailTextField" value={this.state.Email} placeholder="     Email Address" onChange={this.handleEmailChange} />
              </div>
              <div>
                  <label className="profile">Profile</label>
                  <input className="profileTextField" value={this.state.Profile} placeholder="     pic.img" onChange={this.handleProfileChange} />
                  <div  className="selectImage"><a href="/" className="sel">Select Image</a></div>
              </div>
              <div>
                  <button type="submit" className="button">Submit</button>
              </div>
          </form>
        </div>
        )
    }
} 
export default Profiles