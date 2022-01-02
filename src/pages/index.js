import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from "react"
import { Link } from 'gatsby'


const IndexPage = () => {
        return ( 
            <main>
            <Layout pageTitle="welcome to the-korg-shop">
                <p>Home page</p>
                <StaticImage alt="korglogo" src="../images/korglogo.jpg"></StaticImage>
            </Layout>
            </main>
            
        )
    }
  
export default IndexPage