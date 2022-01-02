import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const SynthPage = ({data: {allWpSynths: {edges}}}) => {
  return (
    <Layout pageTitle="Korg synths">
      <p>A list of Korg synths will be displayed here</p>
      {edges.map((item) => {
        const synth = item.node.synth;
        return <p key={item.node.id}>{synth.name} : {synth.price}</p>
      })}
    </Layout>
  )
}
export const query = graphql`
  query {
  wpSynths {
    id
  }
  allWpSynths {
    edges {
      node {
        synth {
          name
          description
          midi
          price
          usb
          voices
          weight
        }
        id
      }
    }
  }
}


`

export default SynthPage