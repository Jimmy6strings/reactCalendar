import React from 'react';
import {render} from 'react-dom';
import FamilyComponent from './FamilyComponent.jsx';


class App extends React.Component {
  render () {
    return (
        <div>
            <div className="title">
              <h1>reactSchoolRolodex</h1>
            </div>
          <FamilyComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
