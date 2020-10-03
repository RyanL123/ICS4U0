import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Home = () => {
    const { shanghai_fixed, shanghai_fluid } = useStaticQuery(graphql`
        query {
            shanghai_fixed: file(relativePath: { eq: "shanghai.jpg" }) {
                childImageSharp {
                    fixed(width: 1000, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            shanghai_fluid: file(relativePath: { eq: "shanghai.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, maxHeight: 900, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box backgroundColor="gray.50">
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
                    borderRadius={[null, null, "18px", "18px"]}
                >
                    <Img
                        fluid={shanghai_fluid.childImageSharp.fluid}
                        style={{ width: "1000px", height: "100%" }}
                    />
                </Box>
            </Box>
            <Box px="10vw" py="50px">
                <Heading
                    color="black"
                    textAlign={["left", "left", "center", "center"]}
                    size="xl"
                >
                    Social Credit System: Quantifying Social Behavior
                </Heading>
                <Text
                    color="black"
                    textAlign={["left", "left", "center", "center"]}
                    size="sm"
                    fontWeight="400"
                    width="100%"
                    mt="12px"
                >
                    A credit-tracking system linked to a permanent and
                    untransferable record
                </Text>
            </Box>
        </Box>
    )
}

export default Home
