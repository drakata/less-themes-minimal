import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

const Landing = () => (
  <Layout location={location}>
    <Meta site={siteMetadata} title="Home" />
    <div>
      <section className="text-center"> Hello</section>
    </div>
  </Layout>
)
export default Landing
