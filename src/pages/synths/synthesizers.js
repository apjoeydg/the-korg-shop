import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const SynthsPage = ({
  data: {
    allWpSynths: {edges:synthInfo}, 
    wpPage: {synthPage},
  },
  }) => {
console.log(synthInfo, synthPage );

  return (
    <Layout pageTitle="Korg synths">
      <p>A list of Korg synths will be displayed here</p>
      {synthInfo.map((item) => {
        const korg = item.node.synth;
        const slug = item.node.slug;
        return <Link to={`/synths/${slug}`}>
        <p key={item.node.id}>{korg.name}</p>
      </Link>
      })}
    </Layout>
  )
}
export const query = graphql`
  
  query  {
  wpPage(slug: {eq: "synths-page"}) {
    synthPage {
      description
      bannerFoto {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    id
    slug
  }
  allWpSynths {
    edges {
      node {
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
`

export default SynthsPage