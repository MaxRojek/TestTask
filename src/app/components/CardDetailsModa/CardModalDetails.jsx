import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import globalStateContext from "../../../globalContext/globalContext";
import {
  ModaldWrapper,
  ImageWrapper,
  ContentModalWrapper,
  TextModalWrapper,
} from "./CardModalDetailsStyle";
import { Modal } from "react-bootstrap";

const CardModalDetails = (props) => {
  const [open, setOpen] = useState(props.open);
  const [productId, setProductId] = useState(props.open);

  const [data, setData] = useState();

  const handleChangeOpen = () => {
    props.handleOpen(false);
    setOpen(false);
  };

  return (
    <>
      <Modal
        centered
        show={props.open}
        onhide={handleChangeOpen}
        animation={false}
        style={{ padding: "10px", borderRadius: "8px" }}
      >
        <ModaldWrapper>
          <Modal.Header
            style={{
              color: "transparent",
              borderBottom: "none",
              width: "100%",
              position: "relative",
              top: "5px",
              zIndex: "+1",
              borderRadius: "8px",
            }}
            onClick={handleChangeOpen}
            closeButton
          ></Modal.Header>
          <ImageWrapper src={props.img} />
          <ContentModalWrapper>
            <h4>{props.name}</h4>
            <TextModalWrapper>{props.description}</TextModalWrapper>
          </ContentModalWrapper>
        </ModaldWrapper>
      </Modal>
    </>
  );
};

export default CardModalDetails;
