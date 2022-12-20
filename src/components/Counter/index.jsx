import React, { Component } from 'react'
import './style.css'

export default class Counter extends Component {

  render() {
    return (
    <div className='counter-container'>
        <div className='counter-number'>{this.props.count}</div>
        <button  className='counter-decrease' onClick={()=>this.props.decrease(this.props.id)}  >-</button>
        <button  className='counter-increase' onClick={()=>this.props.increase(this.props.id)} >+</button>
    </div>
    )
  }
}
