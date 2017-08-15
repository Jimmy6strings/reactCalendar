import React from 'react';
import {render} from 'react-dom';
import aComponent from './aComponent.jsx';


class App extends React.Component {
  render () {
    return
        <div>
          <p> Hello React!</p>
          <aComponent />
        </div>
  }
}

render(<App/>, document.getElementById('app'));
