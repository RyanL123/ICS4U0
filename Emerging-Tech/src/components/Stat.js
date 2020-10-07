import React from "react"
import { Box, Text } from "@chakra-ui/core"

export default ({ icon, text }) => (
    <Box
        backgroundColor="blue.100"
        px="25px"
        py="20px"
        mt="50px"
        display="flex"
        flexDir="row"
        alignItems="center"
        borderLeft="10px solid"
        borderColor="blue.500"
    >
        <Box width="40px" height="40px">
            {icon}
        </Box>
        <Text color="gray.700" fontWeight="600" ml="20px" fontSize="lg">
            {text}
        </Text>
    </Box>
)
