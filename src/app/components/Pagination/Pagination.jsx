import React, { useEffect, useState } from "react";
import { PaginationWrapper, PageNumber, PageNav } from "./PaginationStyle";
const PaginationComponent = ({ value, onChange, range }) => {
  let pattern = null;

  switch (true) {
    case range < 7:
      pattern = [...new Array(range)].map((_, i) => i + 1);
      break;
    case value < 4:
      pattern = [1, 2, 3, 4, 5, "...", range];
      break;
    case value > range - 4:
      pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, "...", value - 1, value, value + 1, "...", range];
  }

  function changePage(n) {
    if (typeof n === "number" && n > 0 && n <= range) {
      onChange(n);
    }
  }
  function ActivePage(x, y) {
    if (x === y) {
      return true;
    }
    if (x !== y) {
      return false;
    }
  }

  return range > 1 ? (
    <PaginationWrapper>
      <PageNav
        disabled={value <= 1}
        onClick={() => changePage(range - (range - 1))}
      >
        First
      </PageNav>
      {pattern.map((label) => (
        <PageNumber
          key={value + label}
          onClick={() => changePage(label)}
          isActive={ActivePage(value, label)}
        >
          {label}
        </PageNumber>
      ))}
      <PageNav disabled={value >= range} onClick={() => changePage(range)}>
        Last
      </PageNav>
    </PaginationWrapper>
  ) : (
    <></>
  );
};

export default PaginationComponent;
