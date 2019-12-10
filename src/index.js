import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
  return (
    <div>
      <h1>Paolo</h1>
      <p>Nothing to say here</p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <MyInfo/>, 
  document.getElementById('root')
);

