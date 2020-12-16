import React, { useContext, useEffect, useState } from "react";
import {
  PageWrapper,
  ProductsWrapper,
  PagginationWrapper,
} from "./ProductsStyle";

import Navbar from "../../components/Navbar/Navbar";
import globalStateContext from "../../../globalContext/globalContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import CardModalDetails from "../../components/CardDetailsModal/CardModalDetails";
import NoResultsMessage from "../../components/NoResultsMessage/NoResultsMessage";
import PaginationComponent from "../../components/Pagination/Pagination";

export const Products = () => {
  const { isLoggedDispatcher, isMobileDispatcher } = useContext(
    globalStateContext
  );
  const [isLogged, setIsLogged] = isLoggedDispatcher; // to przyda się kiedyś
  const [isMobile, setIsMobile] = isMobileDispatcher;
  const [data, setData] = useState([]);
  const [productName, setProductName] = useState("");
  const [page, setPage] = useState("");
  const [promo, setPromo] = useState(false);
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    description: "",
    img: "",
  });

  const fetchData = async () => {
    const response = await fetch(
      `https://join-tsh-api-staging.herokuapp.com/product?search=${productName}&limit=8&page=${currentPage}&promo=${promo}&active=${active}`
    );
    const apiData = await response.json();
    setData(apiData.items);
    setPagesSize(apiData.meta.totalPages);
  };

  useEffect(() => {
    setData([]);
    fetchData();
  }, [promo, active, page, currentPage]);
  useEffect(() => {
    setCurrentPage(1);
    setData([]);
    fetchData();
  }, [productName]);

  const fetchOnclick = () => {
    setData([]);
    fetchData();
  };
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleChangeModal = (bool, id, name, description, img) => {
    setModalOpen(bool);

    setProductDetails({
      id: id,
      name: name,
      description: description,
      img: img,
    });
  };

  const displayResults = (products) => {
    if (products == 0) {
      return <NoResultsMessage />;
    } else {
      return data.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          rating={product.rating}
          promo={product.promo}
          active={product.active}
          modal={handleChangeModal}
        />
      ));
    }
  };

  return (
    <PageWrapper>
      <Navbar
        searchOnclick={fetchOnclick}
        promo={setPromo}
        active={setActive}
        searchName={setProductName}
      />
      <ProductsWrapper>{displayResults(data)}</ProductsWrapper>
      <PagginationWrapper>
        <PaginationComponent
          value={currentPage}
          range={pagesSize}
          onChange={handleChangePage}
        />
      </PagginationWrapper>
      <CardModalDetails
        id={productDetails.id}
        img={productDetails.img}
        name={productDetails.name}
        description={productDetails.description}
        open={modalOpen}
        handleOpen={handleChangeModal}
      />
    </PageWrapper>
  );
};
