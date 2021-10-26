// Text-Area component için yazılmış default değerler aşağıdaki  gibidir
// Text-Area Component için keywordler şu şekildedir
{
  /*
  rows : rows example----> rows={20}
  line-height : lineHeight
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
  height : height
  border : border
  box-shadow : shadow = "top right bottom left #color"
  */
}
import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea.attrs((props) => ({ rows: props.rows || 12 }))`
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `justify-content: ${align}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  resize: none;
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  ${({ ml }) => ml && `margin-left: ${ml}`};
  ${({ mr }) => mr && `margin-right: ${mr}`};
  ${({ mt }) => mt && `margin-top: ${mt}`};
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
  padding: ${({ pt = "14px", pr = "20px", pb = "12px", pl = "20px" }) =>
    `${pt} ${pr} ${pb} ${pl}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  border-radius: ${(props) => props.borderRadius || "7px"};
  background-color: ${(props) => props.bgColor || "#fff"};
  ${({ shadow = false }) =>
    shadow &&
    `box-shadow: #EFF1FF 0px 2px 4px, #EFF1FF 0px 7px 13px -3px, #EFF1FF 0px -3px 0px inset;`};
  ${({ border = false }) => border && `border: ${border};`};
  ${({ fullWidth = false }) => fullWidth && `width: 100%;`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`};
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    color: #948a9a;
  }
`;
export default TextArea;
