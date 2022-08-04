import React from 'react'

function BoxColor({r, g, b}) {
    const BackgroundColor = {background: `rgb(${r},${g}, ${b})`}
  return (
    <div style= {BackgroundColor}>rgb({r},{g},{b})</div>
  )
}

export default BoxColor