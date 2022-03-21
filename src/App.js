import * as React from 'react'
import * as ReactDOM from 'react-dom'


const App = () => {
  return (
    <div>
      <h1>Hello React on Repl.it!</h1>
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
