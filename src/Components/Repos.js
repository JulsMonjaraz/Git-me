import React from 'react'
import {GithubContext} from '../Context/Context'
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import ExampleChart from './Charts/ExampleChart';
import './Repos.css'


function Repos() {

    const {repos} =  React.useContext(GithubContext);

    const languages = repos.reduce((total,item)=>{
        const {language,stargazers_count} = item
        if (!language) return total;
        if(!total[language]) {
            total[language] = {label:language,value:1,stars:stargazers_count}
        }
        else {
            total[language] = {...total[language],value: total[language].value + 1,
                stars:total[language].stars + stargazers_count}
        }
        
        return total
    },{})

    const mostUsed = Object.values(languages).sort((a,b)=>{
         return b.value - a.value
    }).slice(0,5);

    const mostPopular = Object.values(languages).sort((a,b)=>{
        return b.stars - a.stars
    }).map(item => {
        return {...item, value: item.stars}
    })

    // stars 
 
    let {stars, forks} = repos.reduce(
        (total,item) => {
           const {stargazers_count,name, forks} = item;
           total.stars[stargazers_count] = { label:name, value: stargazers_count };
           total.forks[forks] = { label: name ,value: forks };
           return total
        },
        {
            stars: {},
            forks: {},
        }
    )



   stars = Object.values(stars).slice(-5).reverse();

   forks = Object.values(forks).slice(-5).reverse();



  





    return (
        <div className="repos-container">

            <div className="chart-container">

            <ExampleChart data = {mostUsed} className = "most-used"/>

            </div>


            <div className="chart-container">

            <DoughnutChart data = {mostPopular} className = "most-popular"/>   

            </div>

            <div className="chart-container">

            <BarChart data = {forks} className = "most-popular"/>   

            </div>

         
          

        </div>
    )
}

export default Repos
