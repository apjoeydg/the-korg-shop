import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 



const SynthDetailPage = ({data: {wpSynths: {synth: korg}}}) => {

  const image = getImage(korg.image.localFile)
 
  return (
    <Layout pageTitle="Synth">
      <p>synth content</p>
      <div>
      <h3>{korg.name}</h3>
      <GatsbyImage image={image} alt={korg.image.altText} />
      <p>{korg.price}</p>
      <p>{korg.description}</p>
      <p>MIDI : {korg.midi}</p>
      <p>USB : {korg.usb}</p>
      <p>VOICES : {korg.voices}</p>
      <p>Weight : {korg.weight}</p>
      <p>Measurements : {korg.measurements}</p>
      
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpSynths(id: {eq: $id}) {
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
      }
      pictures {
        back {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        front {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        top {
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
`

export default SynthDetailPage