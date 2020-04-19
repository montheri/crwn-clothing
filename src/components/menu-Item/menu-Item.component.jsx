import React from 'react'

import './menu-Item.styles.scss'

const menuItem = ({title, imageUrl}) => (
    <div style = {{backgroundImage: `URL(${imageUrl})`}}
        className = 'menu-item'>
        <div className = 'content'>
            <h1 className = 'title'>{title}</h1>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>
    </div>    
);

export default menuItem
