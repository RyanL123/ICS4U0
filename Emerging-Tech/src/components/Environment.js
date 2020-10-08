import React from "react"
import { Box, Heading, Text, List } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Wrapper from "./Wrapper"
import Break from "./Break"
import Plus from "./Plus"
import Warn from "./Warn"
import Neutral from "./Neutral"

const Environment = () => {
    const { shanghai } = useStaticQuery(graphql`
        query {
            shanghai: file(relativePath: { eq: "shanghai.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, maxHeight: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Wrapper>
            <Box
                px={["10vw", "10vw", "10vw", "20px"]}
                maxWidth="1000px"
                width="100%"
            >
                <Break />
                <Heading
                    color="gray.700"
                    size="xl"
                    mb="50px"
                    textAlign="center"
                >
                    The impacts of the emerging technology on the environment
                </Heading>
                <Box my="50px" borderRadius="12px" overflow="hidden">
                    <a
                        href="https://mocah.org/526437-shanghai.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img fluid={shanghai.childImageSharp.fluid} />
                    </a>
                </Box>
                <Text
                    color="gray.700"
                    textAlign="justify"
                    fontSize="lg"
                    fontWeight="500"
                >
                    While this effect is generally neutral as many people will
                    not change their spending habits, some industries might see
                    a big change overnight due to the negative impact on one’s
                    social credit as a result of purchasing their products.
                </Text>
                <List my="20px" color="gray.700" px="50px">
                    <Plus content="Lower carbon emissions through punishing companies with a high carbon footprint" />
                    <Plus content="Rewards and motivates recycling and environmentally friendly ways of commuting" />
                </List>
                <List my="20px" color="gray.700" px="50px">
                    <Warn content="Implementation of surveillance systems could disrupt nearby ecosystems" />
                    <Warn content="Massive amounts of data processing require more computing power thus requiring an abnormal amount of electricity" />
                </List>
                <List my="20px" color="gray.700" px="50px">
                    <Neutral content="Influences and controls people’s spending habits resulting in less money spent on things such as alcohol, weapons, etc." />
                </List>
            </Box>
        </Wrapper>
    )
}

export default Environment
