import React from 'react';
import ReactDOM from 'react-dom';

function MyComponent() {
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));

