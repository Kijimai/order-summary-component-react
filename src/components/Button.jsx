import React from "react"

export const Button = ({ text, classes }) => {
  return (
    <button className={`btn ${classes}`} type="submit">
      {text}
    </button>
  )
}
