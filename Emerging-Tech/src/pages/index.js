import React from "react"
import { Box } from "@chakra-ui/core"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Society from "../components/Society"
import Economy from "../components/Economy"
import Environment from "../components/Environment"

const Home = () => {
    return (
        <Box backgroundColor="gray.50" pb="100px">
            <Hero />
            <Intro />
            <Society />
            <Economy />
            <Environment />
        </Box>
    )
}

export default Home
