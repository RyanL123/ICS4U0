import React from "react"
import { Box } from "@chakra-ui/core"
import Hero from "../components/Hero"
import Intro from "../components/Intro"

const Home = () => {
    return (
        <Box backgroundColor="gray.50">
            <Hero />
            <Intro />
        </Box>
    )
}

export default Home
