import React from 'react'

import './Dashboard.css'
import { GithubContext } from '../../Context/Context'
import InfoItems from '../InfoItems'
import Repos from '../Repos'
import {AiOutlineGithub} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {MdWork} from 'react-icons/md'
import {useHistory} from 'react-router-dom'





function Dashboard() {

    const history = useHistory();

    const {githubUser} = React.useContext(GithubContext) 
    const { avatar_url,html_url,name,company,blog,bio,location,twitter_username} = githubUser
    const handleReturn = () => {
      history.goBack();
    }


    return (
        <div className = "dash-container">

            <div className="img-container">
                <button className = "return-btn" onClick = {handleReturn}>Return</button>
               <img  className = "user-img"src= {avatar_url} alt=""/>
            </div>
            <p className = "user-name">{name}</p>

            <div className="gnral-info">
              <AiOutlineGithub className = "icons"/><p className = "info-item">{`@${twitter_username}`}</p>
              <ImLocation className = "icons"/><p className = "info-item">{location}</p>
              <MdWork className = "icons"/><p className = "info-item">{company}</p> 
            </div>

            <p>{bio}</p>
            
            

            <InfoItems className = "dash-items"/>
            <Repos className = "dash-repos"/>


            

        </div>
    )
}

export default Dashboard
