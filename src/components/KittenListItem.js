import React from 'react'

function KittenListItem(props) {
  return(
    <li>
      <h3>{props.name}</h3>
      <img alt="alt text" width="300" height="200" src={props.imgUrl}/>
    </li>
  )
}

export default KittenListItem