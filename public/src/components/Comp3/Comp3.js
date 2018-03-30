import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comp3 extends Component {
   render() {
      return <span>{this.props.count}</span>
   }
}

function mapStateToProps(state) {
   return state
}

export default connect(mapStateToProps)(Comp3)
