// Box component için yazılmış default değerler aşağıdaki  gibidir
// Box Component için keywordler şu şekildedir
{
  /*
  display: display
  box-sizing : bBox
  max-width : maxWidth
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
  color: color
  position : position
  background-color : bgColor
  border-radius : borderRadius
  font-size : fontSize
  padding : padding
  flex-direction : direction
  grid-gap : gridGap
  width : width
  max-height : maxHeight
  border : border
  height : height
  min-height : minHeight
  box-shadow : shadow = "top right bottom left #color"
  top : top
  bottom : bottom
  z-index : index
  overflow-x : overflowX
  transition : transition
  grid-gap : gap
  gap : flexGap
  min-width : minWidth
  wrap : wrap !!!!! Be carefully cause it is return boolean
  grid-template-columns : gtc
  grid-template-rows : gtr
  border-bottom : bBottom
  border-top : bTop
  box-shadow : hover
  cursor : cursor
  border-width : bWidth
  flex-grow : grow
  */
}

import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: ${(props) => props.display || "flex"};
  box-sizing: ${({ bBox = true }) => (bBox ? "border-box" : "none")};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "100%"};
  padding-top: ${(props) => (!props.padding && props.pt) || "1rem"};
  padding-bottom: ${(props) => (!props.padding && props.pb) || "1rem"};
  padding-left: ${(props) => (!props.padding && props.pl) || "1rem"};
  padding-right: ${(props) => (!props.padding && props.pr) || "1rem"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-direction: ${(props) => props.direction || "row"};
  position: ${(props) => props.position || "static"};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  box-shadow: ${(props) => props.shadow || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  height: ${(props) => props.height || "100%"};
  max-height: ${(props) => props.maxHeight || "100%"};
  ${(props) => props.minHeight && `min-height:${props.minHeight}`};
  top: ${(props) => props.top || 0};
  bottom: ${(props) => props.bottom || 0};
  background-color: ${(props) => props.bgColor || "inherit"};
  color: ${(props) => props.color || "#fff"};
  ${(props) => props.border && `border: ${props.border}`};
  ${(props) => props.cursor && `cursor: ${props.cursor}`};
  ${(props) => props.index && `z-index:${props.index}`};
  ${(props) => props.overflowX && `overflow-x:${props.overflowX}`};
  ${(props) => props.transition && `transition:${props.transition}`};
  ${(props) => props.gap && `grid-gap: ${props.gap}`};
  ${(props) => props.flexGap && `gap: ${props.flexGap}`};
  ${(props) => props.minWidth && `min-width: ${props.minWidth}`};
  ${(props) =>
    props.wrap &&
    `flex-wrap: ${typeof props.wrap === "boolean" ? `wrap` : props.wrap}`};
  ${(props) =>
    props.display === "grid" &&
    props.gtc &&
    `grid-template-columns: ${props.gtc}`};
  ${(props) =>
    props.display === "grid" &&
    props.gtr &&
    `grid-template-rows: ${props.gtr}`};
  ${(props) => props.bBottom && `border-bottom: ${props.bBottom}`};
  ${(props) => props.bTop && `border-top: ${props.bTop}`};
  ${(props) =>
    props.hover &&
    `&:hover{
      cursor: pointer;
      box-shadow: ${props.hover};
    }`};
  ${(props) =>
    props.transform &&
    `&:hover{
      transform: ${props.transform};
    }`};
  ${(props) => props.flex && `flex: 0 0 auto;`};
  ${(props) => props.transition && `transition: all 0.3s ease;`};
  ${(props) => props.overflow && `overflow: auto;`};
  ${(props) => props.cursor && `&:hover{cursor: ${props.cursor}`};
  ${(props) => props.bWidth && `border-width: ${props.bWidth};`};
  ${(props) => props.grow && `flex-grow: ${props.grow};`};
`;
export default Box;
