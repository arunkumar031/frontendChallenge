import {Component} from 'react'
import './App.css';

class App extends Component {
  state={username:'',emailId:'',msg:''}


  onChangeUsername=event=>{
    this.setState({username:event.target.value})
  }

  onChangeEmailId=event=>{
    this.setState({emailId:event.target.value})
  }

  onSubmitForm=event=>{
    event.preventDefault()
    const {username,emailId}=this.state
    if (username!=='' && emailId!==''){
      this.setState({msg:'Successfully Submitted',username:'',emailId:''})
    }else if (username===''){
      this.setState({msg:'Enter the username'})
    }else if (emailId===''){
      this.setState({msg:'Enter the email id'})
    }else{
      this.setState({msg:'Enter the username and email id'})
    }
  }

  render(){
    const {username,emailId,msg}=this.state
    return (
      <div className='form-container'>
        <form className='form' onSubmit={this.onSubmitForm}>
          <div className='input-container'>
            <label htmlFor='username'>Name</label>
            <input id='username' className='input' type='text' placeholder='Username' onChange={this.onChangeUsername} value={username} />
          </div>
          <div className='input-container'>
            <label htmlFor='email'>Email Id</label>
            <input id='email' className='input' type='text' placeholder='Email Id' onChange={this.onChangeEmailId} value={emailId} />
          </div>
          <button type='submit' className='submit-btn'>Submit</button>
        </form>
        <p className='message'>{msg}</p>
      </div>
    );
  }

  
}

export default App;
