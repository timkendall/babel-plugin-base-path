import React from 'react';

const ImageComponent = React.createElement("img", {
  src: "https://foo.com/icons/alert.svg"
});

class CustomComponentWithSrc extends React.Component {
  render() {
    return React.createElement("div", { src: this.props.src });
  }
}

const render = () => React.createElement(
  "div",
  null,
  React.createElement(ImageComponent, null),
  React.createElement(CustomComponentWithSrc, {
    src: "https://foo.com/stuff/thing.png"
  })
);