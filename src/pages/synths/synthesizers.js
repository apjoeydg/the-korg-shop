import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const SynthsPage = ({data: {allWpSynths: {edges}}}) => {
  return (
    <Layout pageTitle="Korg synths">
      <p>A list of Korg synths will be displayed here</p>
      {edges.map((item) => {
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
        slug
      }
    }
  }
}


`

export default SynthsPage