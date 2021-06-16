import React from 'react'
import {GithubContext} from '../Context/Context'
import {GoRepo, GoGist} from 'react-icons/go'
import {FiUsers, FiUserPlus} from 'react-icons/fi'
import InfoItem from './InfoItem';
import './InfoItems.css'

function InfoItems() {

    const {githubUser} =  React.useContext(GithubContext);
    const {public_repos,followers,following,public_gists} = githubUser

    const items = [
        {
            id:1,
            icon:<GoRepo/>,
            value: public_repos,
            label:'repos',
            color:'pink'
        },
        {
            id:2,
            icon:<FiUserPlus/>,
            value: followers,
            label:'followers',
            color:'green'
        },
        {
            id:3,
            icon:<GoGist/>,
            value:public_gists,
            label:'gists',
            color:'purple'
        },
        ,
        {
            id:4,
            icon:<FiUsers/>,
            value: following ,
            label:'following',
            color:'yellow'
        }
    ]
     

    return (

        <div className="cards-container">
             {items.map(item => {
            return <InfoItem key = {item.id} {...item}/>
           })}
        </div>
    )
}

export default InfoItems;
