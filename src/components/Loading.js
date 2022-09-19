import React, { Component } from 'react'
import load from './loading.gif'
export class loading extends Component {
    
  render() {
    const mystyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"250px"
       }
    return (
      <div  style={mystyle} >
        <img src={load} alt="loading" />
      </div>
    )
  }
}

export default loading