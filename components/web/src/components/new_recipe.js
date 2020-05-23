import React from 'react'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', id: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/data', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },  
        body: JSON.stringify({
          id: this.state.id,
          name: this.state.value
        })
      });
      const j = await response.json();
      console.log(j);
      var parent = this._reactInternalFiber._debugOwner.stateNode;
      await parent.refreshData();
    } catch (error) {
      console.log(error);
      alert('Try again!');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Id:
          <input
            name="id"
            type="number"
            checked={this.state.id}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Item:
          <input
            name="value"
            type="text"
            value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RecipeForm
