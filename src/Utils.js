import React from "react";
// import namor from "namor";
// import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    firstName: 'Jone',
    lastName: 'Mathew',
  };
};

export function makeData(len = 2) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(2).map(newPerson)
    };
  });
}
