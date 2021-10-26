import styled from "styled-components";
import { COLORS } from "../theme/theme";

function getColor(color) {
  switch (color) {
    case "primary":
      return COLORS.darkBlue;
    case "secondary":
      return COLORS.gray;
    case "gray":
      return COLORS.darkGray;
    case "blue":
      return COLORS.primaryBlue;
    case "secondary-blue":
      return COLORS.secondaryBlue;
    case "red":
      return COLORS.red;
    case "green":
      return COLORS.green;
    case "white":
      return COLORS.white;
    default:
      return color;
  }
}

const Text = styled.span`
  display: ${(props) => props.display || "block"};
  font-size: ${(props) => props.fs || "1rem"};
  font-weight: ${(props) => props.fw || 400};
  color: ${({ color = "primary" }) => getColor(color)};
  line-height: ${(props) => props.lh || "1.2rem"};
  ${(props) => props.width && `width: ${props.width}`};
  max-width: ${(props) => props.maxWidth || "100%"};
  margin: ${(props) => props.margin || "0"};
  ${(props) =>
    (props.margin === "0" || !props.margin) && `margin-top: ${props.mt || 0}`};
  ${(props) =>
    (props.margin === "0" || !props.margin) &&
    `margin-right: ${props.mr || 0}`};
  ${(props) =>
    (props.margin === "0" || !props.margin) &&
    `margin-bottom: ${props.mb || 0}`};
  ${(props) =>
    (props.margin === "0" || !props.margin) && `margin-left: ${props.ml || 0}`};
  padding-top: ${(props) => (!props.padding && props.pt) || "1rem"};
  padding-bottom: ${(props) => (!props.padding && props.pb) || "1rem"};
  padding-left: ${(props) => (!props.padding && props.pl) || "1rem"};
  padding-right: ${(props) => (!props.padding && props.pr) || "1rem"};
  text-align: ${(props) => props.align || "left"};
  ${(props) => props.cursor && `cursor: ${props.cursor}`};
  ${(props) => props.uppercase && `text-transform: uppercase`};
  ${(props) => props.capitalize && `text-transform: capitalize`};
  ${(props) => props.fontStyle && `font-style: ${props.fontStyle}`};
  ${({ shadow = false }) => shadow && `box-shadow: 4px 3px 1px #EFF1FF;`};
  z-index: ${(props) => props.index || 0};
  text-decoration: ${(props) => props.decoration || "none"};
  ${({ hoverLine = false }) =>
    hoverLine &&
    `
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    `};
`;
export default Text;
