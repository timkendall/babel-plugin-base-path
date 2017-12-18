import React from 'react'

const ImageComponent = <img src="/icons/alert.svg" />

class CustomComponentWithSrc extends React.Component {
  render() {
    return <div src={this.props.src} />
  }
}

const render = () => (
  <div>
    <ImageComponent />
    <CustomComponentWithSrc src={"/stuff/thing.png"} />
  </div>
)