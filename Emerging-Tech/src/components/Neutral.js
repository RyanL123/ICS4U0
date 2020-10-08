import React from "react"
import { ListItem, ListIcon } from "@chakra-ui/core"

export default ({ content }) => (
    <ListItem my="5px" fontWeight="500" display="flex" alignItems="flex-start">
        <ListIcon icon="info" color="blue.500" mt="4px" />
        {content}
    </ListItem>
)
