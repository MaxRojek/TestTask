import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import globalStateContext from "../../../globalContext/globalContext";
import {
  CardWrapper,
  ProductRateWrapper,
  ProductCardWrapper,
  ProductCardTitleWrapper,
  ProductCardImageWrapper,
  ProductCardContentWrapper,
  ProductCardImage,
  ProductCardDescription,
  ButtonWrapper,
  PromoInfo,
} from "./ProductCardStyle";
import { StarFill, Star } from "react-bootstrap-icons";

const ProductCard2 = (props) => {
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
          <ButtonWrapper>
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
          </ButtonWrapper>
        </Card.Body>
      </Card>
    </CardWrapper>
  );
};

const ProductCard = (props) => {
  const rateCalculate = (rate) => {
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(
        <StarFill key={i} style={{ margin: "5px" }} color="orange" size={13} />
      );
    }
    for (let j = 0; j < 5 - rate; j++) {
      stars.push(
        <Star key={j} style={{ margin: "5px" }} color="grey" size={13} />
      );
    }
    return stars;
  };

  return (
    <ProductCardWrapper>
      <ProductCardImageWrapper>
        <ProductCardImage available={props.active} src={props.image} />
        {props.promo ? <PromoInfo>Promo</PromoInfo> : <></>}
      </ProductCardImageWrapper>
      <ProductCardContentWrapper>
        <ProductCardTitleWrapper>{props.name}</ProductCardTitleWrapper>
        <ProductCardDescription>{props.description}</ProductCardDescription>
      </ProductCardContentWrapper>
      <ButtonWrapper>
        <ProductRateWrapper>{rateCalculate(props.rating)}</ProductRateWrapper>
        {props.active ? (
          <Button
            style={{
              width: "90%",
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
              width: "90%",
            }}
            variant="secondary"
          >
            Unavaliable
          </Button>
        )}
      </ButtonWrapper>
    </ProductCardWrapper>
  );
};

export default ProductCard;
