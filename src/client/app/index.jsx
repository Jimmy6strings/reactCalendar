import React from 'react';
import {render} from 'react-dom';
import aComponent from './aComponent.jsx';


class App extends React.Component {
  render () {
    return (
        <div>
            <div className="title">
              <h1>reactCalendar</h1>
            </div>
          <aComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
