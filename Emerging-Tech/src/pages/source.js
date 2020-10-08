import React from "react"
import { Box, Text, Icon, PseudoBox, Heading } from "@chakra-ui/core"
import { Link } from "gatsby"

const Citation = ({ link, children }) => (
    <PseudoBox color="gray.700" _hover={{ color: "blue.400" }} my="25px">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Text fontWeight="400">
                {children} {link}
                <Icon name="external-link" ml="4px" />
            </Text>
        </a>
    </PseudoBox>
)

const source = () => (
    <Box backgroundColor="gray.50" px="10vw" py="100px">
        <Link to="/">
            <Text color="gray.700" fontWeight="500">
                <Icon name="arrow-back" mr="4px" />
                Back
            </Text>
        </Link>
        <Heading textAlign="center" color="gray.700" fontWeight="600" size="lg">
            Works Cited
        </Heading>
        <Box>
            <Citation link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3175792">
                Creemers, Rogier. “China's Social Credit System: An Evolving
                Practice of Control.” SSRN, 22 May 2018,{" "}
            </Citation>
            <Citation link="https://www.zdnet.com/article/forget-public-transit-in-london-an-app-that-rewards-you-for-walking-and-cycling/">
                Halper, Mark. “Forget Public Transit: In London, an App That
                Rewards You for Walking and Cycling.” ZDNet, ZDNet, 7 May 2012,{" "}
            </Citation>
            <Citation link="https://en.wikipedia.org/wiki/Mass_surveillance_in_China">
                “Mass Surveillance in China.” Wikipedia, Wikimedia Foundation,
                27 Sept. 2020,{" "}
            </Citation>
            <Citation link="https://www.wired.com/story/china-social-credit-score-system/">
                Matsakis, Louise. “How the West Got China's Social Credit System
                Wrong.” Wired, Conde Nast,{" "}
            </Citation>
            <Citation link="https://blogs.ucl.ac.uk/assa/2019/12/09/chinas-social-credit-system-the-chinese-citizens-perspective/">
                Ucl. “China's Social Credit System: The Chinese Citizens'
                Perspective.” Anthropology of Smartphones and Smart Ageing Blog,{" "}
            </Citation>
            <Citation link="https://journals.sagepub.com/doi/10.1177/1461444819826402">
                Kostka, Genia. “China’s Social Credit Systems and Public
                Opinion: Explaining High Levels of Approval.” New Media &
                Society, vol. 21, no. 7, July 2019, pp. 1565–1593,
                doi:10.1177/1461444819826402.
            </Citation>
            <Text color="gray.700" fontWeight="500">
                *Image sources are hyperlinked. Simply click on them to view the
                source.
            </Text>
        </Box>
    </Box>
)

export default source
