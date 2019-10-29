import React, { Component } from 'react';
/*
The connect function is taking care of task 1, it is synced up to our store, 
listening to each change in the state that occurs
*/
import { connect } from 'react-redux'; // code change 
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// start of code change
/* task 2
 When a change occurs, it calls a function that we write called mapStateToProps(), and in mapStateToProps() 
 we specify exactly which slice of the state we want to provide to our component. in this case state.itesm and allow
 our componenet to have acess to them in a prop called items
*/
const mapStateToProps = (state) => {
  return { items: state.items };
};
 

/*
 task 3 Then we have to say which component in our application 
we are providing this data to: you can see that we write connect(mapStateToProps)(App)
*/
export default connect(mapStateToProps)(App);
//end of code change


/* 
w/ connect and map state to props we only have a few goals in these three blocks of code
 (a) to only re-render our App component when specific changes to the state occur, 
 and (b) to only provide the slice of the state that we need to our App component. 
 So we will need (1) a function that listens to every change in the store and then 
 (2) filters out the changes relevant to a particular component to (3) provide to that component. 
 That's exactly what's happening here. In the next paragraph, let's go through what is doing what.




/*