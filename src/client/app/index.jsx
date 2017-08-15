import React from 'react';
import {render} from 'react-dom';
import LikesComponent from './LikesComponent.jsx';


class App extends React.Component {
  render () {
    return (
        <div>
            <div className="title">
              <h1>reactCalendar</h1>
            </div>
          <LikesComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
