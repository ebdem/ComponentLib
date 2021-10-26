// Button component için yazılmış default değerler aşağıdaki  gibidir
// Button Component için keywordler şu şekildedir
{
  /*
  display: display
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
  background-color : bgColor
  border-radius : borderRadius
  font-size : fontSize
  padding : padding
  flex-direction : direction
  grid-gap : gridGap
  width : width
  border : border
  height : height
  box-shadow : shadow = "top right bottom left #color"
  */
}

import styled from "styled-components";

const Button = styled.button`
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.align || "center"};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  background: ${(props) =>
    props.bg || "linear-gradient(85deg,#434343,#262626)"};
  padding-top: ${(props) => (!props.padding && props.pt) || "1rem"};
  padding-bottom: ${(props) => (!props.padding && props.pb) || "1rem"};
  padding-left: ${(props) => (!props.padding && props.pl) || "1rem"};
  padding-right: ${(props) => (!props.padding && props.pr) || "1rem"};
  color: ${(props) => props.color || "#FFF"};
  //background-color: ${(props) => (props.disabled ? "#94C2FD" : "#0E69E0")};
  border-radius: ${(props) => props.borderRadius || "7px"};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  ${({
    disabled = false,
    bgColor = "linear-gradient(85deg,#434343,#262626)",
  }) =>
    disabled ? `background-color: #94C2FD` : `background-color: ${bgColor}`};
  ${(props) => props.justify && `justify-content:${props.justify}`};
  ${(props) => props.gridGap && `grid-gap:${props.gridGap}`};
  ${(props) => props.width && `width:${props.width}`};
  ${(props) => props.border && `border:${props.border}`};
  ${(props) => props.height && `height:${props.height}`};
  ${(props) => props.maxWidth && `max-width:${props.maxWidth}`};
  ${({ hasBoxShadow = true, shadow = "0 0 11px 0 #0E69E0" }) =>
    hasBoxShadow &&
    `
    &:hover{
      box-shadow: ${shadow}
    };
  `};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`;

export default Button;
