import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import globalStateContext from "../../../globalContext/globalContext";
import { CardWrapper, ProductRateWrapper } from "./ProductCardStyle";
import { StarFill } from "react-bootstrap-icons";
const ProductCard = (props) => {
  const [productRating, setProductRating] = useState(props.rating);

  const rateCalculate = (rate) => {
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(
        <StarFill key={i} style={{ margin: "5px" }} color="orange" size={15} />
      );
    }
    return stars;
  };
  const handleOpenDetails = () => {
    props.modal(true);
  };

  return (
    <CardWrapper>
      <Card
        style={{
          width: "100%",
          height: "400px",
          border: "none",
        }}
      >
        <Card.Img
          style={{
            height: "170px",
            objectFit: "cover",
          }}
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "18px" }}>{props.name}</Card.Title>
          <Card.Text
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              color: "#9194A5",
            }}
          >
            {props.description}
          </Card.Text>

          <ProductRateWrapper>
            Promo: {props.promo ? <>true</> : <>false</>}
          </ProductRateWrapper>

          <ProductRateWrapper>{rateCalculate(props.rating)}</ProductRateWrapper>
          {props.active ? (
            <Button
              style={{
                marginTop: "10px",
                width: "88%",
                position: "absolute",
                bottom: "20px",
                right: "12px",
                left: "18px",
              }}
              variant="primary"
              onClick={() =>
                props.modal(
                  true,
                  props.id,

                  props.name,
                  props.description,
                  props.image
                )
              }
            >
              Show details
            </Button>
          ) : (
            <Button
              style={{
                marginTop: "10px",
                width: "88%",
                position: "absolute",
                bottom: "20px",
                right: "12px",
                left: "18px",
              }}
              variant="secondary"
            >
              Unavaliable
            </Button>
          )}
        </Card.Body>
      </Card>
    </CardWrapper>
  );
};

export default ProductCard;
