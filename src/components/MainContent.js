import React from 'react'

function MainContent() {
  const firstName = "Cristiano"
  const surname = "Ronaldo";
  return(
    <div>
      <div id="mainContent">This is the main content</div>
      <p>{firstName}</p>
      <p>{surname}</p>
    </div>
  );
}

export default MainContent