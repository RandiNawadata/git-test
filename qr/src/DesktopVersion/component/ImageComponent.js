// src/components/ImageComponent.js
import React from "react";
import qr from "../../images/image-qr-code.png";
import { imageJSON } from '../style/style';

function ImageComponent() {
  const { imageDiv, imageStyle } = imageJSON;
  
  return (
    <div style={imageDiv} data-testid="image-container">
      <img
        src={qr}
        alt="qr-code-component"
        style={imageStyle}
        data-testid="qr-image"
      />
    </div>
  );
}

export default ImageComponent;
