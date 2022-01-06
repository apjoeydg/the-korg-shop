import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    synthInfo,
    synthName,
    
  } from "../components/synth.module.css"
  import 'bootstrap/dist/css/bootstrap.min.css';
export const Synth = ({ synth, slug }) => {
  const synthpic = getImage(synth.synth.image.localFile)
  return (
    <Link className={wrapper} to={slug}>
      <GatsbyImage 
      className={image}
        image={synthpic}
        alt={synth.synth.image.altText}
      />
      <div className={synthInfo}>
         <p className={synthName}>{synth.synth.name}</p>
      </div>
    </Link>
  )
}

export default Synth;