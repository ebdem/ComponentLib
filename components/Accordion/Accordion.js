import React, { useState, useRef } from "react";
import styles from "./accordion.module.css";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Box from "../Box/Box";

function Accordion({
  titleColor = "#FFF",
  maxWidth,
  title,
  openIcon = <div>+</div>,
  closeIcon = <div>-</div>,
  children,
  iconPositionEnd = false,
  justify = "flex-start",
  padding,
  fontSize = "1.1rem",
  titleColorContent,
  fontSizeContent,
  buttonWidth,
  buttonMaxWidth,
  ...rest
}) {
  const [active, setActiveState] = useState(false);
  const [height, setHeightState] = useState("0px");

  const contentRef = useRef(null);

  function toggleAccordion() {
    setActiveState(!active);
    setHeightState(active ? "0px" : `${contentRef.current.scrollHeight}px`);
  }

  return (
    <Box
      display="flex"
      direction="column"
      width="100%"
      maxWidth={maxWidth ?? "100%"}
      {...rest}
    >
      <Button
        shadow="0"
        border="none"
        bg="linear-gradient(85deg,#434343,#262626)"
        type="button"
        display="flex"
        borderRadius="7px 7px 0 0 "
        width={buttonWidth}
        maxWidth={buttonMaxWidth}
        justify={justify}
        onClick={toggleAccordion}
        padding={padding}
        direction={iconPositionEnd ? "row-reverse" : "row"}
      >
        {active ? openIcon : closeIcon}
        <Text fontWeight={600} fontSize={fontSize} color={titleColor} ml="25px">
          {title}
        </Text>
      </Button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}`,
          maxWidth: `${buttonMaxWidth}`,
          background: "linear-gradient(85deg,#434343,#262626)",
          borderRadius: "0 0 7px 7px",
        }}
        className={styles.accordion__content}
      >
        <Text
          fontWeight={600}
          fontSize={fontSizeContent}
          color={titleColorContent}
          ml="25px"
        >
          {children}
        </Text>
      </div>
    </Box>
  );
}

export default Accordion;
