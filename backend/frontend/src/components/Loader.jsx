import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner animation='grow' variant='success' role='status' style={{
      height: '80px',
      width: '80px',
      margin: 'auto',
      display: 'block'
    }}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
