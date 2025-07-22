import React from "react"

type AboutUs = {
  name:number,
  age?:number
}

const AboutUs = ({name , age}) => {
  return (
    <>
      <div>Hello,  {name}</div>
      <div>my age {age}</div>
    </>
  )
}

export default AboutUs