import React, { Component } from 'react'
import './myStyle.css'
import {Link} from 'react-router-dom';
import SelectImg from './SelectImg';

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
        <div>
           <h2 className="cre">Cre</h2><h2 className="no">No</h2>
           <input type='text' className='searchTextField1' placeholder="   Hello" value={this.state.search} onChange={this.handlesearchChange} />
           <button className="Search1">Search</button>
           <Link to="Profiles" style={{textDecoration:"none"}}>
           <div className="userProfile">Simran Keswani</div>
           <div className="image"><img src="https://img.pngio.com/download-free-png-stockvader-predicted-adig-user-profile-icon-user-profile-png-880_880.png" alt="Avatar" className="avatar" /></div>
      </Link>
      <Link to="/" style={{textDecoration:"none",color:"black"}}><button className="logout">Logout</button></Link>
      
          <form onSubmit={this.handleSubmit} className="card">
           <h1 className="profileTitle">Profile </h1>
              <div>
               <label className="name">  <b> Name</b> </label>
                  <input type='text' className='nameTextField' placeholder="     Full Name" value={this.state.name} onChange={this.handlenameChange} />
              </div>
              <div>
                <label className='email'>  <b>Email </b></label>
                <input className="emailTextField" value={this.state.Email} placeholder="     Email Address" onChange={this.handleEmailChange} />
              </div>
              <div>
                  <label className="profile"><b>Profile</b></label>
                  {/* <input className="profileTextField" value={this.state.Profile} placeholder="     pic.img" onChange={this.handleProfileChange} /> */}
                  {/* <div  className="selectImage"><Link to="/" className="sel">Select Image</Link></div> */}
                  <SelectImg />
              </div>
              <div>
               <Link to="/HomePage" style={{textDecoration:"none"}}>  <button type="submit" className="button">Submit</button> </Link> 
              </div>
          </form>
        </div>
        )
    }
} 
export default Profiles