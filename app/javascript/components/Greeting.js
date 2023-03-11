import React from 'react'
import { connect } from 'react-redux'
import { getGreeting } from '../actions/greetingActions'

class Greeting extends React.Component {
  componentDidMount() {
    this.props.getGreeting()
  }

  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

export default connect(mapStateToProps, { getGreeting })(Greeting)
