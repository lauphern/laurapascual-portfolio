import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const Resume = props => {
  return(
    <SwaggerUI url="https://resume-api.vercel.app/definition.yaml"/>
  )
}

export default Resume;