import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Listing() {
    const [searchitem, setSearchitem] = useState("")
    const [SearchResult, setSearchResult] = useState("")
    const [list, setList] = useState([])

    useEffect(() => {
      (async () => {
        
        await axios.get( `http://www.omdbapi.com/?s=movie&page=${Math.floor(Math.random() * (99 - 1 + 1) + 1)}&type=movie&apikey=78ba20c2`).then((val) => {
          setList(val.data.Search)
          
        }) 
      } )();
        
    }, [])
    




    const handleChange=(e) => {
      setSearchitem(e.target.value)

    }

    const handleSubmit=(e) => {
      e.preventDefault();
      axios.get( `http://www.omdbapi.com/?s=${searchitem}&apikey=78ba20c2`).then((val) => {
        
        setSearchResult(val.data.Search)
        console.log(SearchResult);
    }) 

    }

    if(SearchResult === "" ){
      return(
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
        
      <div style={{float:"left"}} className="row">
      {list && list.map((item) =>{
        return(
          <Card style={{ width: '18rem'}} className="col-md-3 float-left" >
          <Card.Img variant="top" src={item.Poster} />
          <Card.Body>
            <Card.Title>{item.Title}</Card.Title>
            <Card.Text>
            {item.Plot}
            </Card.Text>
            <Link to={`/detail/${item.imdbID}`}>
            <Button variant="primary">Details</Button>
            </Link>
          </Card.Body>
          </Card>
        )
      } )}
    </div>  

    </div>
      )
               
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

          
        <div style={{float:"left"}} className="row">
        {
        SearchResult && SearchResult.map((SearchResult) => {
          return(

        <Card style={{ width: '18rem' }} className="col-md-3 float-left" >
          
        <Card.Img variant="top" src={SearchResult.Poster} />
        <Card.Body>
          <Card.Title>{SearchResult.Title}</Card.Title>
          <Card.Text>
          {SearchResult.Plot}
          </Card.Text>
          <Link to={`/detail/${SearchResult.imdbID}`}>
          <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
        </Card>
          )
        })
        }
        </div> 
      
    </div>
    

  )
}

export default Listing