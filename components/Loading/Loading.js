import React from "react";
import Text from "../Text/Text";
import Box from "../Box/Box";
export default function Loading({ loadingSVG, loadingText }) {
  return (
    <Box
      maxHeight="700px"
      direction="column"
      width="100%"
      maxWidth="2000px"
      justify="center"
      align="center"
      bgColor="#fff"
      height="100%"
      mt="50px"
    >
      <img src={loadingSVG} alt="Loading..." />

      <Text
        mt="50px"
        uppercase
        cursor="pointer"
        fw="600"
        color="darkGreen"
        fs="1.8rem"
      >
        {loadingText}
      </Text>
    </Box>
  );
}
