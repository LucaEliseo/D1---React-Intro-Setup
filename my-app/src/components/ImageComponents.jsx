import { Component } from 'react'


class ClassComponent extends Component {

  render() {
    return <img src={this.props.image} alt="Image" />
  }
}

export default ClassComponent
