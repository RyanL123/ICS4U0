import React from "react"
import { Box, Text } from "@chakra-ui/core"

export default ({ children }) => (
    <Box
        backgroundColor="yellow.100"
        px="25px"
        py="20px"
        borderLeft="10px solid"
        borderColor="yellow.200"
        my="50px"
        mx="5vw"
    >
        <Text color="gray.700" fontWeight="500">
            {children}
        </Text>
    </Box>
)
