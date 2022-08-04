import React from 'react'

export default function Rating({children}) {

    const rating = Math.ceil(parseFloat(children))
    let stars = ''
    for (let i = 0; i < 5; i++) {
        stars.length < rating ? stars +='★' : stars +='☆'
    }
    console.log(stars)
  return (
    <div className='rating--card'>

       <p>{stars}</p>

    </div>
  )
}
