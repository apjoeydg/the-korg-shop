import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
const SynthDetailPage = ({data: {wpSynths: {synth: korg}}}) => {
 
  return (
    <Layout pageTitle="Synth">
      <p>synth content</p>
      <div>
      <h3>{korg.name}</h3>
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
      }
    }
  }
`

export default SynthDetailPage