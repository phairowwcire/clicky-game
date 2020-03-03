import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"; // es6 javascript 6
// var friends=require("./friends.json") es5, javascript 5

//es5 constructor
//function App()


//es6 constructor
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    scores:0,
    topScores:0
  };

//onload when you first load up the webpage, it executes componentDidMount
  componentDidMount(){
    this.state.friends.map(friend=>{
      friend.clicked=false;
      return  friend
    })
  }

 // function clickFriend(id){

 //}   //es5
 
//es6
  clickyFriend = id => {

    //friends=[{id=1, name: "phil"},{id:2,name="Eric"}]
    //friends.filter(friend=>friend.id != id), resize the original array according to the condition
    // Filter this.state.friends for friends with an id not equal to the id being removed
    
    //friends.map(friend=>friend.id==id)
    
    let newFriends = this.state.friends.map(friend => {
      
          if(friend.id===id){
             
              if(friend.clicked===false){
                   this.setState({scores: this.state.scores+1})

                   if(this.state.scores >= this.state.topScores){
                       this.setState({topScores:this.state.topScores+1})
                   }
                   friend.clicked=true
              }
              else{
                  //loss game
                  this.setState({scores:0})
              }
          }
    
          return friend
    });


    //reset game and make all clicked to false
    if(this.state.scores===0){
   newFriends =    this.state.friends.map(friend=>{

        friend.clicked=false
        return friend
      })

    
    }
    newFriends.sort(()=>Math.random()-0.5)


    // Set this.state.friends equal to the new friends array
    this.setState({ friends:newFriends });
  
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List  scores: {this.state.scores}  topScores:{this.state.topScores}  </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickyFriend={this.clickyFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
