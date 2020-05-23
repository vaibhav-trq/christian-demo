import React, {Component} from 'react';
import Recipes from './components/recipes';
import RecipeForm from './components/new_recipe';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <center><h1 style={{color:"white"}}>Recipe List</h1></center>
            <RecipeForm />
            <Recipes recipes={this.state.recipes} />
          </div>
        )
    }

    state = {
      recipes: []
    };

    async refreshData() {
      const res = await fetch('http://christian-demo-x11jbj-api.platter-app.com/data');
      const data = await res.json();
      this.setState({ recipes: data })
    }

    componentDidMount() {
      this.refreshData();
    }
}

export default App;