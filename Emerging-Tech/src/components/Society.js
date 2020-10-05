import React from "react"
import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/core"
import Wrapper from "./Wrapper"
import Break from "./Break"

const Plus = ({ content }) => (
    <ListItem my="5px" fontWeight="500">
        <ListIcon icon="check-circle" color="green.600" />
        {content}
    </ListItem>
)

const Warn = ({ content }) => (
    <ListItem my="5px" fontWeight="500">
        <ListIcon icon="warning" color="red.600" />
        {content}
    </ListItem>
)

export default () => (
    <Wrapper>
        <Box px="20px" maxWidth="1000px" width="100%">
            <Break />
            <Heading color="gray.700" size="xl" mb="50px" textAlign="center">
                The impacts (+ and -) of the emerging technology on societies
                and cultures around the world
            </Heading>
            <Text
                color="gray.700"
                textAlign="justify"
                fontSize="lg"
                fontWeight="500"
            >
                While many consider the implementation of the Social Credit
                System to be only a few steps away from a dystopian society, the
                system is actually welcomed by the majority of people living in
                China.
            </Text>
            <List my="20px" color="gray.700" px="50px">
                <Plus content="Encourage participation in society" />
                <Plus content="Encourage normal social behavior" />
                <Plus content="Rewards law-abiding citizens" />
                <Plus content="Chinese citizens see it as a way to boost public morality and a way to establish trust" />
            </List>
            <List my="20px" color="gray.700" px="50px">
                <Warn content="Oppression of free speech" />
                <Warn content="Loss of individual privacy" />
                <Warn content="Can easily be manipulated by those in power" />
            </List>
        </Box>
    </Wrapper>
)
