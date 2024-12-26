import React from "react";
import { textJSON } from "../style/style";
import {text1 , text2} from '../../Text/Text';

function TextComponent() {
  const { textDiv, textStyles, text1Style, text2Style } = textJSON;
  return (
    <div style={textDiv}>
      <div style={textStyles}>
        <text style={text1Style} data-testid="text1Style-test">{text1}</text>
      </div>
      <div style={textStyles}>
        <text style={text2Style} data-testid="text2Style-test">{text2}</text>
      </div>
    </div>
  );
}

export default TextComponent;
