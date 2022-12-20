import Counter from './components/Counter';
import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state ={
    counters:[
        {id:0,count:0,steps:2},
        {id:1,count:0,steps:4},
        {id:2,count:0,steps:6},
        {id:3,count:0,steps:10},
    ],
    total:0,
}

  increase = (id)=>{
    this.setState({counters:this.state.counters.map((counter)=>{
      if(counter.id === id){
        return {...counter,count:counter.count+counter.steps}
      }
      return counter;
    })})
  }

  decrease = (id)=>{
    this.setState({counters:this.state.counters.map((counter)=>{
      if(counter.id === id){
        if(counter.count>0){
          return {...counter,count:counter.count-counter.steps}
        }
      }
      return counter;
    })})
  }
  
  render(){
    return (
      <div className="App">
        <div className='container'>
          {this.state.counters.map((counter)=>{
            return <Counter key={counter.id} {...counter} increase={this.increase} decrease={this.decrease} />
          })}
          <h1>Total amount: {this.state.counters.reduce(
            (accumulator, currentValue) => accumulator + currentValue.count,0
            )}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
