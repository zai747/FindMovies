import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Listing() {
    const [searchitem, setSearchitem] = useState("")
    const [SearchResult, setSearchResult] = useState("")



    const handleChange=(e) => {
      setSearchitem(e.target.value)
    }

    const handleSubmit=(e) => {
      e.preventDefault();
      axios.get( `http://www.omdbapi.com/?t=${searchitem}&apikey=78ba20c2`).then((val) => {
        setSearchResult(val.data)
        console.log(SearchResult);
    }) 

    }

    
  return (
    <div>
    <div>
       
        <Form className="d-flex p-4" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
          />
          <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
    </div>
    <div>
      {SearchResult && <Card style={{ width: '21rem',marginLeft: '40%' }}>
      <Card.Img variant="top" src={SearchResult.Poster} />
      <Card.Body>
        <Card.Title>{SearchResult.Title}</Card.Title>
        <Card.Text>
        {SearchResult.Plot}
        </Card.Text>
        <Link to={"/details"}>
        <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>}
    </div>

    </div>
  )
}

export default Listing