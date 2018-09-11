import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
  <div>
    <ClassComponent label='Contador' initialValue={10}></ClassComponent>
  </div>
, document.getElementById('app'))