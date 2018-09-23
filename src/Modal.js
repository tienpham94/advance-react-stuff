import React, { Component } from "react";
import styled from "styled-components";

import Portal from "./Portal";

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: teal;
`;

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <button onClick={toggle}>Close</button>
            <div>{this.props.children}</div>
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}
