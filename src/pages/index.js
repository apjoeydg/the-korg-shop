import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
} from "../page.module.css"


const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.headerhome.picture.localFile)

  


        return ( 
            
          <Layout>
          <div className={header}>
          <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.headerhome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePage.headerhome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePage.callToAction.link}>
            {homePage.callToAction.description}
          </a>
        </div>
        <div>
          <GatsbyImage
          className={headerPicture}
            image={image}
            alt={homePage.headerhome.picture.altText}
          />
        </div>
          </div>
        </Layout>
            
            
        )
    }
    
export const query = graphql`
  query  {
  wpPage {
    homePage {
      fieldGroupName
      headerhome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      callToAction {
        description
        link
      }
      featuredSynths {
        description
        name
        synth {
          ... on WpSynths {
            id
            slug
            synth {
              description
              measurements
              name
              midi
              price
              usb
              voices
              weight
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`
  
export default IndexPage