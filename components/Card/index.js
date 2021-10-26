import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";

export default function Card() {
  return (
    <>
      <Box
        style={{
          background: "linear-gradient(85deg,#434343,#262626)",
        }}
        width="%100"
        maxWidth="400px"
        borderRadius="30px"
        display="flex"
        direction="column"
        shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
        height="500px"
        ml="30px"
        mt="30px"
        mb="30px"
        cursor="pointer"
        transition
        transform="translate(-.5rem,-1rem) rotate(7deg)"
        pt="0"
        pl="0"
        pr="0"
      >
        <div style={{ display: "flex" }}>
          <Text pt="30px" pl="50px" color="#d4d4d4" fs="18px" fw="bold">
            Article
          </Text>
          <Text pt="30px" color="#777" fs="20px" fw="200">
            date
          </Text>
        </div>
        <Text pt="30px" pl="50px" color="#fff" fs="22px" fw="bold">
          TitleTitleTitleTitle
        </Text>
        <div style={{ display: "flex", paddingLeft: "30px" }}>
          <Text fs="18" color="#ff7a18">
            Tags
          </Text>
          <Text fs="18" color="#ff7a18">
            Tags
          </Text>
          <Text fs="18" color="#ff7a18">
            Tags
          </Text>
          <Text fs="18" color="#ff7a18">
            Tags
          </Text>
        </div>

        <Text color="#fff" fs="20px" fw="medium">
          Description
        </Text>
      </Box>
    </>
  );
}
