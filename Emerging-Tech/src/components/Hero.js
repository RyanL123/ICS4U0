import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Wrapper from "./Wrapper"

const Hero = () => {
    const { worlds, github } = useStaticQuery(graphql`
        query {
            worlds: file(relativePath: { eq: "worlds.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, maxHeight: 900, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            github: file(relativePath: { eq: "github.png" }) {
                childImageSharp {
                    fixed(width: 32, height: 32, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Wrapper>
            <Box
                width="100%"
                height="500px"
                display={["none", "none", "inherit", "inherit"]}
            >
                <BackgroundImage
                    fluid={worlds.childImageSharp.fluid}
                    style={{
                        width: "100%",
                        height: "100%",
                        filter: "brightness(30%)",
                    }}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                px={[null, null, "20px", "20px"]}
                mt={[null, null, "-400px", "-400px"]}
                width="100%"
                height={["500px", "500px", "600px", "600px"]}
            >
                <Box
                    overflow="hidden"
                    borderRadius={[null, null, "12px", "12px"]}
                >
                    <a
                        href="https://www.talkesport.com/news/lol/league-of-legends-worlds-2020-primer-begins-sept-25th-in-china/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img
                            fluid={worlds.childImageSharp.fluid}
                            style={{ width: "1000px", height: "100%" }}
                        />
                    </a>
                </Box>
            </Box>
            <Box
                px={["10vw", "10vw", "10vw", "20px"]}
                py="50px"
                maxWidth="1000px"
                width="100%"
            >
                <Heading
                    color="gray.700"
                    textAlign={["left", "left", "center", "center"]}
                    size="xl"
                    fontWeight="700"
                >
                    Social Credit System: Quantifying Social Behavior
                </Heading>
                <Text
                    color="gray.700"
                    textAlign={["left", "left", "center", "center"]}
                    size="sm"
                    fontWeight="500"
                    width="100%"
                    mt="12px"
                    height="auto"
                >
                    A credit-tracking system linked to a permanent and
                    untransferable record
                </Text>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    mt="50px"
                    alignItems="center"
                >
                    <Text color="yellow.400" fontWeight="500">
                        2020/Oct/3
                    </Text>
                    <a
                        href="https://github.com/RyanL123/ICS4U0/tree/master/Emerging-Tech"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img fixed={github.childImageSharp.fixed} />
                    </a>
                    <Link to="/source">
                        <Box width="40px" height="40px">
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="black"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                ></path>
                            </svg>
                        </Box>
                    </Link>
                    <Text color="yellow.400" fontWeight="500">
                        By: Ryan Li
                    </Text>
                </Box>
            </Box>
        </Wrapper>
    )
}

export default Hero
