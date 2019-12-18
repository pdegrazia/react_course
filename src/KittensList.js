import React from 'react'

import KittenListItem from './components/KittenListItem'

function KittensList() {
  return(
    <ul>
      <li><KittenListItem name="first cat" imgUrl="https://placekitten.com/200/300"/></li>
      <li><KittenListItem name="second cat" imgUrl="https://placekitten.com/400/300"/></li>
      <li><KittenListItem name="third cat" imgUrl="https://placekitten.com/200/200"/></li>
      <li><KittenListItem name="fourth cat" imgUrl="https://placekitten.com/300/300"/></li>
    </ul>
  );
}

export default KittensList