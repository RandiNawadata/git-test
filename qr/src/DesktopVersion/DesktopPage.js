import React from "react";
import DesktopContainer from "./component/DesktopContainer";
import ImageComponent from "./component/ImageComponent";
import TextComponent from "./component/TextComponent";
function DesktopPage() {
  return (
    <div>
      <DesktopContainer>
        <ImageComponent />
        <TextComponent />
      </DesktopContainer>
    </div>
  );
}

export default DesktopPage;
