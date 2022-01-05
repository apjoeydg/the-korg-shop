import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from "react"
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 



const IndexPage = ({data}) => {
 console.log('blah');
  console.log(data);


        return ( 
            <main>
            <Layout pageTitle="welcome to the-korg-shop">
                <p>Home page</p>
                
               <StaticImage src="../images/korglogo.jpg" alt="Welcome"></StaticImage>
            </Layout>
            </main>
            
        )
    }
    export const query = graphql`
  
    query  {
  wpPage(slug: {eq: "home"}) {
    homePage {
      headerhome {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        calltoaction {
          description
          link {
            url
          }
        }
      }
      featuredSynths {
        synth {
          ... on WpSynths {
            id
            synth {
              description
              measurements
              midi
              name
              price
              usb
              voices
              weight
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
                altText
              }
              pictures {
                back {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                }
                front {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                }
                top {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                }
              }
            }
            slug
          }
        }
      }
    }
  }
}
`


  
export default IndexPage