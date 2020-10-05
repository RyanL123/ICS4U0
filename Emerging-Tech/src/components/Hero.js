import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Wrapper from "./Wrapper"

const Hero = () => {
    const { shanghai_fluid, github } = useStaticQuery(graphql`
        query {
            shanghai_fluid: file(relativePath: { eq: "shanghai.jpg" }) {
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
                    fluid={shanghai_fluid.childImageSharp.fluid}
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
                    <Img
                        fluid={shanghai_fluid.childImageSharp.fluid}
                        style={{ width: "1000px", height: "100%" }}
                    />
                </Box>
            </Box>
            <Box px="20px" py="50px" maxWidth="1000px" width="100%">
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
                >
                    <Text color="yellow.400" fontWeight="500">
                        2020/Oct/3
                    </Text>
                    <a
                        href="https://github.com/RyanL123/ICS4U0/tree/master/Emerging%20Tech"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Img fixed={github.childImageSharp.fixed} />
                    </a>
                    <Text color="yellow.400" fontWeight="500">
                        By: Ryan Li
                    </Text>
                </Box>
            </Box>
        </Wrapper>
    )
}

export default Hero
