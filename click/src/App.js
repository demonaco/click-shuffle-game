import React, { Component, Fragment } from 'react';
import './App.css';
import BadgeCard from './components/BadgeCard/index';
import Bootstrap from "./components/Bootstrap/index";
import Badges from "./Badges.json";
import { render } from 'react-dom';


class App extends Component {
  state = {
    badges:Badges,
    clickedItems: [],
    score: 0,
    clicked: false
  };

  stopGame = (badges) => {
    
     if (this.state.clickedItems.includes(badges)) {
     alert("You clicked the same badge twice! Please try again")
     this.setState({score : 0})
     }else{
      this.state.clickedItems.push(badges);
     }
  }



  handleIncrement = (event) => {
    
    console.log("inside function")
    this.setState({ score: this.state.score + 1 });
    // this.setState({ clicked: true })
    // if (this.state.clicked == true){
    //   alert("Sorry you lost the game")
    // }
    if (this.state.score === 7) {
      alert("You win! Onwards to the Elite Four!");
      this.setState({ score: 0 })
      
    }
  }

  componentDidMount() {

    let newArr = this.state.badges.sort(function (a, b) { return 0.5 - Math.random() })
    console.log("------")
    console.log(newArr)
    this.setState({
      Badges: newArr
    })
  }

  shuffleFun = () => {
    let newArr = this.state.badges.sort(function (a, b) { return 0.5 - Math.random() })
    console.log("------")
    console.log(newArr)
    this.setState({
      Badges: newArr
    })
  }


  multiFunc = (e) => {
   
    let clickedId = e.target.id
  
    this.shuffleFun();

    this.handleIncrement();
    this.stopGame(clickedId);
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="navcontainer">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Gotta click 'em all!
  </a>
            <p className="yourScore">
              Current Score: {this.state.score}
            </p>
            <p>
            </p>
          </nav>
        </div>
        <Bootstrap
        />
        {this.state.badges.map(c =>
          <BadgeCard
            image={c.image} id={c.id} onClick={this.multiFunc}
          />
        )}
  
      </React.Fragment>
    );
  }
}

export default App;
