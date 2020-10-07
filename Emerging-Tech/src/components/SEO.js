import React from "react"
import { Helmet } from "react-helmet"

export default () => (
    <Helmet>
        <title>Social Credit System: Quantifying Social Behavior</title>
        <meta
            property="description"
            content="A credit-tracking system linked to a permanent and untransferable record"
        />
        <meta
            property="og:title"
            content="Social Credit System: Quantifying Social Behavior"
        />
        <meta
            property="og:description"
            content="A credit-tracking system linked to a permanent and untransferable record"
        />
        <meta property="og:image" content="/banner.jpg" />
        <meta
            property="twitter:title"
            content="Social Credit System: Quantifying Social Behavior"
        />
        <meta
            property="twitter:description"
            content="A credit-tracking system linked to a permanent and untransferable record"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/banner.jpg" />
    </Helmet>
)
