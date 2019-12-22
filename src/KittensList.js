import React from 'react'

import KittenListItem from './components/KittenListItem'
import kittiesData from './components/kittiesData'

function KittensList() {

  const kittiesList = kittiesData.map(kitty => <KittenListItem name={kitty.name} imgUrl={kitty.imgUrl}/>);

  return(
    <ul>
      {kittiesList}
    </ul>
  );
}

export default KittensList