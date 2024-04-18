import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import StyleWrapper from "../components/StyleWrapper"

const IndexPage = () => {
  return (
    <StyleWrapper>
      <h1>My Landing Page</h1>
      <p>This is my landing page.</p>
      <Link to="/about">About Me</Link>
    </StyleWrapper>
  )
}

export default IndexPage
