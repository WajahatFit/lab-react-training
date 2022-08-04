import React from 'react'
import masterCard from '../assets/images/master-card.svg'
import visa from '../assets/images/visa.png'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const last4Characters = number.substr(-4);
	const maskingCharacters = number.substr(1, number.length - 5).replace(/\d/g, '*');
  
  return (
    <div style={{backgroundColor: `${bgColor}`, color, padding:20}}>
      <img style={{width: 100}} src={type === 'Visa'? visa : masterCard} alt={owner}/>
      <p>{`${maskingCharacters}${last4Characters}`}</p>
      <p>Expires {expirationMonth}/{expirationYear}    {bank}</p>
      <p>{owner}</p>
    </div>
  )
}
