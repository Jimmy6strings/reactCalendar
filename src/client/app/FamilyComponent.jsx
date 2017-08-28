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
        <form>
          <label>
            Family Name:
            <input type="text" name="name" />
          </label>
          <label>
            address:
            <input type="text" address="address" />
          </label>
          <label>
            city:
            <input type="text" city="city" />
          </label>
          <label>
            adults:
            <input type="text" adults="adults" />
          </label>
          <label>
            children:
            <input type="text" address="children" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        Families : <span>{this.state.familyCount}</span>
        <div>
        <button onClick={this.onFamily}>Add Family!</button></div>
      </div>
    );
  }

}

export default FamilyComponent;