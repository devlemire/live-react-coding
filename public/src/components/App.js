import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import { increase, decrease } from '../reducers/counter'
import Comp1 from './Comp1/Comp1'

class App extends Component {
   constructor() {
      super()
      this.state = {
         count: 0
      }
   }

   increase(amount) {
      this.setState({ count: this.state.count + amount })
   }

   decrease(amount) {
      this.setState({ count: this.state.count - amount })
   }

   render() {
      return (
         <div className="App">
            <h3>State Count: {this.state.count}</h3>
            <button onClick={() => this.increase(1)}>+1</button>
            <button onClick={() => this.increase(5)}>+5</button>
            <button onClick={() => this.decrease(1)}>-1</button>
            <button onClick={() => this.decrease(5)}>-5</button>

            <h3>Store Count: {this.props.count}</h3>
            <button onClick={() => this.props.increase(1)}>+1</button>
            <button onClick={() => this.props.increase(5)}>+5</button>
            <button onClick={() => this.props.decrease(1)}>-1</button>
            <button onClick={() => this.props.decrease(5)}>-5</button>

            <br />
            <br />

            <Comp1 />
         </div>
      )
   }
}

function mapStateToProps(state) {
   return state
}

export default connect(mapStateToProps, { increase, decrease })(App)
