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
    const { hospital } = useStaticQuery(graphql`
        query {
            hospital: file(relativePath: { eq: "hospital.jpg" }) {
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
                    The impacts on human health
                </Heading>
                <Box my="50px" borderRadius="12px" overflow="hidden">
                    <a
                        href="https://www.euronews.com/2020/02/03/china-s-coronavirus-hospital-built-10-days-opens-its-doors-n1128531"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img fluid={hospital.childImageSharp.fluid} />
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
                    <Plus content="Those making positive contributions to society are prioritized by the healthcare system" />
                    <Plus content="Less pressure placed on the healthcare system by clearly defining the order doctors should treat patients" />
                    <Plus content="Poor families with high social credit can get discounts for their medical bills" />
                </List>
                <List my="20px" color="gray.700" px="50px">
                    <Warn content="Constantly pressured to increase one’s social credit may lead to depression and  other mental health problems" />
                </List>
                <List my="20px" color="gray.700" px="50px">
                    <Neutral content="Spread out benefits and punishments over a wide range of credit values, making changes in social credit less impactful on one’s life" />
                </List>
            </Box>
        </Wrapper>
    )
}

export default Environment
