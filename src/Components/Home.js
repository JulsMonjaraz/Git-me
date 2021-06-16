import React, {useState} from 'react'
import './Home.css'
import {GithubContext} from '../Context/Context'
import { useHistory } from 'react-router-dom';
import {AiOutlineGithub} from 'react-icons/ai'


function Home() {

    

    const [user, setuser] = useState('')
    const  history = useHistory();
    

    const {request, error,searchUser,checkRate} =  React.useContext(GithubContext);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        checkRate();
        if (user) {
          searchUser(user);
          history.push('/dashboard')
        }        
    }
  
    return (
        <div className="search-container">
            <div className="main-container">
                <div className="hero-section">

                <h1>Git me.</h1><AiOutlineGithub className = "home-icon"/>

                </div>
            
            <form onSubmit = { e => handleSubmit(e)}>

<input 
 type="text" 
 className="search-bar"  
 value = {user} 
 onChange = {(e)=>setuser(e.target.value)}/>
 <p className="remaining-requests">{`Remainig request ${request}/60`}</p>
{
error.show ?
 (
   <p>{error.msg}</p>
 )
 : 
 (
     <span></span>
 )
}
<input  className = "search-btn"type="submit" value = "Search" /> 
</form>
            </div>
           
        </div>
    )
}

export default Home
