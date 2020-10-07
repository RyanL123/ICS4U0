import React from "react"
import { Box, Text } from "@chakra-ui/core"
import Wrapper from "./Wrapper"
import Break from "./Break"

export default () => (
    <Wrapper>
        <Box
            px={["10vw", "10vw", "10vw", "20px"]}
            maxWidth="1000px"
            width="100%"
        >
            <Break />
            <Text
                color="gray.700"
                textAlign="justify"
                fontSize="lg"
                fontWeight="500"
            >
                A social credit system is a system that gives a rating to
                citizens of a country based on various different factors. The
                data needed for the system to analyze can come from a variety of
                sources, including social media, bank accounts, or other public
                databases. An algorithm would then be used to generate a social
                rating based on the data collected on an individual. Those with
                high social ratings would enjoy many privileges in their
                everyday life such as discounts when buying a house or the
                ability to skip different bureaucracies. Conversely, those with
                low social ratings would be punished by having more
                inconveniences in their life, in contrast to the privileges the
                former enjoys. This system of rewarding the good and punishing
                the bad would spark competition among the society, with each
                person striving to be the best version of themselves.
            </Text>
        </Box>
    </Wrapper>
)
