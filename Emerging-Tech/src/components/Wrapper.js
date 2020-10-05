import React from "react"
import { Box } from "@chakra-ui/core"

export default ({ children }) => (
    <Box
        backgroundColor="gray.50"
        display="flex"
        flexDirection="column"
        alignItems="center"
    >
        {children}
    </Box>
)
