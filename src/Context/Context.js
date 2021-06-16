import React, { useState, useEffect } from 'react'
import mockUser from './MockupData/mockUser'
import mockRepo from './MockupData/mockRepo'
import mockFollowers from './MockupData/mockFollowers'
import axios from 'axios'
import { useHistory } from 'react-router'





const rootUrl = 'https://api.github.com'
const GithubContext = React.createContext();


// Provider 

const GithubProvider = ({children}) => {

    const [githubUser,setGithubUser] = useState(mockUser);
    const [repos, setrepos] = useState(mockRepo);
    const [followers, setfollowers] = useState(mockFollowers);
    const history = useHistory();
    

    

    //Search github user

    const searchUser = async(user) => {

      
        
      toggleError(false);

      if (!user) {
          toggleError(true,'Introduce un usuario')
      }
      checkRate()
      

      const response =  await axios(`${rootUrl}/users/${user}`)
      .catch(err => console.log(err))

      
        
      
     

      if (response) {
        
        
        setGithubUser(response.data);
        const {login, followers_url} =  response.data;

        // repos 
        axios(`${rootUrl}/users/${login}/repos?per_page=100`).
        then(response => {
            setrepos(response.data)
        })

         // followers
         axios(`${followers_url}?per_page=100`).
         then(response => {
             setfollowers(response.data)
         })


      }
      else {
          toggleError(true,"There is no user with that name")
      }

    }

    //Request loading

    const [request, setrequest] = useState(0);
    const [loading, setIsLoading] = useState(false)
    //Errors

    const [error, seterror] = useState({show:false,msg:""})
    //Check rate 

    const checkRate = () => {
        axios(`${rootUrl}/rate_limit`).then(({data}) => {
           let  {
               rate: {remaining},
            } = data;
            setrequest(remaining)
            if (remaining === 0) {
                toggleError(true,"Sorry you are out of requests")
            }
        }).catch(err => console.log(err))
    }

    function toggleError(show = false,msg = ""){
        seterror({show,msg})
    }
    

    useEffect(checkRate,[])

   return <GithubContext.Provider value = {{githubUser,repos,followers,request,error,searchUser,checkRate}}>
       
       {children}
       
       </GithubContext.Provider>
}

export {GithubProvider, GithubContext}
