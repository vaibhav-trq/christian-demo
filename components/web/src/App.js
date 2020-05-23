import React, {Component} from 'react';
import Recipes from './components/recipes';
import './App.css';

const ENVIRONMENT = process.env.NODE_ENV;



class App extends Component {
    render() {
        return (
          <div className="App">
            <center><h1 style={{color:"white"}}>Recipe List</h1></center>
            <Recipes recipes={this.state.recipes} />
          </div>
        )
    }

    state = {
      recipes: []
    };

    componentDidMount() {
        fetch('http://localhost:3001/data')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ recipes: data })
            })
            .catch(console.log)
    }
}

export default App;