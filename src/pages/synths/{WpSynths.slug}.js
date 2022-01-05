import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 



const SynthDetailPage = ({data: {wpSynths: {synth: korg}}}) => { //destructuring 3 levels diep gebeurt hier
console.log(korg);


  const image = getImage(korg.image.localFile)
  const backpicture = getImage(korg.pictures.back.localFile)
  const toppicture = getImage(korg.pictures.top.localFile)
  const frontpicture = getImage(korg.pictures.front.localFile)
 
  return (
    <Layout pageTitle="Synth">
      <p>synth content</p>
      <div>
      <h3>{korg.name}</h3>
      <GatsbyImage image={image} alt={korg.image.altText} />
      <p>{korg.price}</p>
      <p>{korg.description}</p>
      <p>MIDI : {`${korg.midi}`}</p>
      
      <p>USB : {`${korg.usb}`}</p>
      <p>VOICES : {korg.voices}</p>
      <p>Weight : {korg.weight}</p>
      <p>Measurements : {korg.measurements}</p>
      <div>
      <GatsbyImage image={frontpicture} alt={korg.pictures.front.altText} />
      <GatsbyImage image={toppicture} alt={korg.pictures.top.altText} />
      <GatsbyImage image={backpicture} alt={korg.pictures.back.altText} />
      </div>
      
      
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