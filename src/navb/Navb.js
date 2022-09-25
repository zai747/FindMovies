import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Navb() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">FindMovies</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navb