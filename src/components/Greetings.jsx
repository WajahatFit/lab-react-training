import React from 'react'

export default function Greetings({lang,children}) {
  
  function greeting (lang)
 { switch(lang) {
    case 'de':
      return `Hallo ${children}`;
    case 'es':
      return `Hola ${children}`;
      case 'fr':
        return `Bonjour ${children}`;
      case 'en':
        return `Hello ${children}`;
    default:
      return 'Language not Found. Please try Again.'
  }}
  
  return (
    <div>
        <p>{greeting(lang)}</p>
    </div>
  )
}
