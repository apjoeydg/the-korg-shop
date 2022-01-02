import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from "react"
import { Link } from 'gatsby'
import { graphql } from 'gatsby'



const IndexPage = ({data}) => {
        return ( 
            <main>
            <Layout pageTitle="welcome to the-korg-shop">
                <p>Home page</p>
                <p>{ data.site.siteMetadata.description }</p>
                <StaticImage alt="korglogo" src="../images/korglogo.jpg"></StaticImage>
            </Layout>
            </main>
            
        )
    }
    export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
  
export default IndexPage