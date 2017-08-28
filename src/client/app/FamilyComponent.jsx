import React from 'react';

class FamilyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {familyCount : 0};
    this.onFamily = this.onFamily.bind(this);
  }

  onFamily () {
    let newFamilyCount = this.state.familyCount + 1;
    this.setState({familyCount: newFamilyCount});
  }

  render() {
    return (
      <div>
        Families : <span>{this.state.familyCount}</span>
        <div>
        <button onClick={this.onFamily}>Add Family!</button></div>
      </div>
    );
  }

}

export default FamilyComponent;