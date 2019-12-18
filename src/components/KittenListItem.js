import React from 'react'

function KittenListItem(props) {
  return(
    <div>
      <h3>{props.name}</h3>
      <img alt="alt text" width="300" height="200" src={props.imgUrl}/>
    </div>
  )
}

export default KittenListItem