import React from "react"
import { Box, Heading, Text, List } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Wrapper from "./Wrapper"
import Break from "./Break"
import Quote from "./Quote"
import Stat from "./Stat"
import Plus from "./Plus"
import Warn from "./Warn"

const Society = () => {
    const { social } = useStaticQuery(graphql`
        query {
            social: file(relativePath: { eq: "social.jpg" }) {
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
                <Heading color="gray.700" size="xl" textAlign="center">
                    The impacts on societies and cultures around the world
                </Heading>
                <Box my="50px" borderRadius="12px" overflow="hidden">
                    <a
                        href="https://media.wired.com/photos/5d3e269e71d02600081d9a00/master/w_2560%2Cc_limit/security_social-credit_859199990.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Img fluid={social.childImageSharp.fluid} />
                    </a>
                </Box>
                <Text
                    color="gray.700"
                    textAlign="justify"
                    fontSize="lg"
                    fontWeight="500"
                >
                    While many consider the implementation of the Social Credit
                    System to be only a few steps away from a dystopian society,
                    the system is actually welcomed by the majority of people
                    living in China. While searching for a full-time live-in
                    nanny, 35-year old Mrs. Liu was deeply troubled by some of
                    the stories she heard about live-in nannies.
                </Text>
                <Quote>
                    “I have been told so many bad stories about those live-in
                    nannies, from stealing to abuse… nowadays very few locals
                    are willing to do the job. Rural migrant workers are not
                    trustworthy, many of them have low suzhi (human quality)
                    without any credit. They are here in a big city, nobody can
                    tell where they come from and where they have been or what
                    they have done. Everything can be faked, fake ID, fake
                    personal stories, I have even heard of domestic agencies
                    helping workers fake a whole ‘package’ of information. If
                    something wrong happens, they can just move to a different
                    place, and nobody will know.”
                </Quote>
                <Text
                    color="gray.700"
                    textAlign="justify"
                    fontSize="lg"
                    fontWeight="500"
                >
                    With a social credit system, one can be sure of the
                    integrity and honesty of the person they're hiring without
                    worrying about the validity of their claims.
                </Text>
                <List my="20px" color="gray.700" px="50px">
                    <Plus content="Encourage participation in society and norma social behavior" />
                    <Plus content="Rewards law-abiding citizens" />
                    <Plus content="Boost public moral and establish trust" />
                </List>
                <List my="20px" color="gray.700" px="50px">
                    <Warn content="Oppression of free speech" />
                    <Warn content="Loss of individual privacy" />
                    <Warn content="Can easily be manipulated by those in power" />
                    <Warn content="Rich people can easily raise their credit by making large sums of donations to charities" />
                </List>
                <Stat
                    icon={
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="#1654a0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                        </svg>
                    }
                    text="As of 2020, there are roughly 626 million CCTV cameras in China."
                />
            </Box>
        </Wrapper>
    )
}

export default Society
