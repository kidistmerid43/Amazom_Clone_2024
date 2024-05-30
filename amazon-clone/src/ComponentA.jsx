import React from 'react'
import {useColor} from './contextProvider'

function ComponentA() {
    const {colorToggler}=useColor()
  return (
    <div>
      <button onclick={colorToggler}>color toggler</button>
    </div>
  )
}

export default ComponentA
