import React, { useState } from "react";
import {
  Wrapper,
  DropDownButton,
  DropDownMenu,
  DropDownItem,
  DropDownButtonWrapper,
} from "./DropDownStyle";
const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Wrapper>
        <DropDownButtonWrapper onClick={handleOpen}>
          {props.title}
        </DropDownButtonWrapper>

        <DropDownMenu visible={open}>{props.content}</DropDownMenu>
      </Wrapper>
    </div>
  );
};

export default DropDown;
