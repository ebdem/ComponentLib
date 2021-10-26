// Input component için yazılmış default değerler aşağıdaki  gibidir
// Input Component için keywordler şu şekildedir
{
  /*
  max-width : maxWidth
  fullWidth : fullWidth ---> be carefully cause it have default value so if you write this you should not got a value
  align-items : align
  justify-content: justify
  margin-top : mt
  margin-bottom : mb
  margin-right : mr
  margin-left : ml
  padding-left : pl
  padding-right : pr
  padding-top : pt
  padding-bottom : pb
  color: color !!!for Placeholder
  background-color : bgColor
  border-radius : borderRadius
  font-size : fontSize
  width : width
  border : border
  box-shadow : shadow = "top right bottom left #color"
  */
}

import React from "react";
import styled from "styled-components";

const Input = styled.input`
  text-align: ${(props) => props.align || "left"};
  justify-content: ${(props) => props.justify || "flex-start"};
  width: ${(props) => props.width || "120px"};
  padding: ${({ pt = "14px", pr = "20px", pb = "12px", pl = "20px" }) =>
    `${pt} ${pr} ${pb} ${pl}`};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "7px"};
  background-color: ${(props) => props.bgColor || "#fff"};
  ${({ opacity }) => opacity && `opacity: ${opacity}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  font-size: ${(props) => props.fontSize || "14px"};
  ${({ ml }) => ml && `margin-left: ${ml}`};
  ${({ mr }) => mr && `margin-right: ${mr}`};
  ${({ mt }) => mt && `margin-top: ${mt}`};
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
  ${({ shadow = false }) => shadow && `box-shadow: 4px 3px 1px #EFF1FF;`};
  ${({ border = false }) => border && `border:${border} || 1px solid #EFF1FF;`};
  ${({ fullWidth = false }) => fullWidth && `width: 100%;`};
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: ${(props) => props.fontSize || "7px"};
    line-height: 19px;
    font-weight: 400;
    color: ${(props) => props.color || "#948a9a"};
  }
`;

export default Input;
