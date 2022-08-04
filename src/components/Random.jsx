import React from 'react'

export default function Random({min, max}) {
  const randomNum = Math.ceil(Math.random() * (max - min + 1) + min);
  return (
    <div>
    <p>{`Random value between ${min} and ${max} => ${randomNum}`}</p> 
    </div>
  )
}
