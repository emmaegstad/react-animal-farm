import React from 'react'
import './Main.css'
import Animal from '../Animal/Animal'
import Background from '../../background.png'
import { animals } from '../../data.js'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${Background})` }}>
      {animals.map((element) => {
        return (
          <Animal
            className=".animal .name img"
            key={element.name}
            name={element.name}
            type={element.type}
            says={element.says}
            top={element.top}
            left={element.left}
          />
        )
      })}
    </main>
  )
}
