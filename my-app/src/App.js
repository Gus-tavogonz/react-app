import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import replaceFriend from "./replaceFriends.json";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Counter from "./components/Counter";


import "./App.css";

function changeFriendsArray(array){
for (let i = array.length -1; i > 0; i-- ){
  let j = Math.floor(Math.random() * (i+1));
 // [array [i], array [j] = [array[j], array [i]]];
};
return array;
};



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
    clickedFriends:[],
    success:""
  };

  // state = {
  //   clicked: []
  // }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
   // const clickedFriends = update(friends, {$push: [friend.id]})
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    // this.setStare({friends:})
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({clicked: this.state.clicked.concat(id) });
    } else {
      this.handlReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      success:""
    });
    if (newScore >= this.state.topScore){
      this.setState({topScore:newScore});
    } else if (newScore=== 5){
      this.setState({ success: "Congrats!"});
    }
    this.handleShuffle();
  }
  handleReset = () => {
    this.setState({
      score:0,
      topScore: this.state.highScore,
      success:"Not good!",
      clicked:[]
    })
    this.handleShuffle();
  }

  handleShuffle = () => {
    let friendsNewArray = changeFriendsArray(friends);
    this.setState({ friends: friendsNewArray })
  }
  // addNewFriend = () => {
  //   const replaceFriend = this
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Navbar
        score={this.state.score}
        topScore={this.state.highScore}
        success={this.state.success} />
        
      
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
           
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
