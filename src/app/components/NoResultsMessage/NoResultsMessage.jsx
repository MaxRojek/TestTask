import React, { useEffect, useState } from "react";

import globalStateContext from "../../../globalContext/globalContext";
import {
  MessageTextWrapper,
  MessageWrapper,
  MessageCenter,
} from "./NoResultsMessageStyle";
import { Bag } from "react-bootstrap-icons";

const NoResultsMessage = () => {
  return (
    <MessageCenter>
      <MessageWrapper>
        <Bag color="#B9BDCF" size={35} />
        <h5>Ooops... It's empty here</h5>
        <MessageTextWrapper>
          There are no products on the list
        </MessageTextWrapper>
      </MessageWrapper>
    </MessageCenter>
  );
};
export default NoResultsMessage;
