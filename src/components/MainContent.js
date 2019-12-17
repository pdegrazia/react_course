import React from 'react'

function MainContent() {
  const firstName = "Cristiano"
  const surname = "Ronaldo";
  return(
    <div>
      <div id="mainContent">This is the main content</div>
      <p>{`${firstName} ${surname}`}</p>
    </div>
  );
}

export default MainContent