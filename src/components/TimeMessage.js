import React from 'react'

function TimeMessage() {
  const currentHour = new Date().getHours();
  
  //must test this, but still I don't know, so I've done it manually
  //this generates morning
  // const currentHour = new Date(12,12,2018,11).getHours();
  //this generates afternoon
  // const currentHour = new Date(12,12,2018,11).getHours();
  //this generates evening
  // const currentHour = new Date(12,12,2018,11).getHours();

  let timeOfTheDay;

  const style = {
    fontSize: 30
  }

  if (currentHour < 12){
    timeOfTheDay = "morning";
    style.color = "#FFD700";
  } else if (currentHour < 17) {
    timeOfTheDay = "afternoon"
    style.color = "#FF0000";
  } else {
    timeOfTheDay = "evening";
    style.color = "#000080";
  }
  return(<div style={style}>{timeOfTheDay}</div>);
}

export default TimeMessage