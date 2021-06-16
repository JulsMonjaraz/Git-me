import React from 'react'
import './InfoItem.css'

const InfoItem = ({icon,label,value,color}) => {
    return (
        <div className="item-container">
            <div className="item-icon-container">
             <span className = {`item-icon ${color}`}>{icon}</span>
            </div>
            <div className="item-text-container">
              <h3 className = "item-value">{value}</h3>
              <p className = "item-label">{label}</p>
            </div>
        </div>
    )
}

export default InfoItem
