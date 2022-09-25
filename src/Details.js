import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'

function Details() {
  let {id} = useParams()
  const [details, setDetails] = useState("")

  useEffect(() => {
    (async () => {
      
      await axios.get( `http://www.omdbapi.com/?i=${id}&plot=full&apikey=78ba20c2`).then((val) => {
        console.log(val);
        setDetails(val.data)
        console.log(details);
        
      }) 
    } )();
      
  }, [details,id])
  return (
    <div>

<div class="container mt-3">
    <div class="row">
        <div class="col-md-5">
            <div class="project-info-box mt-0">
                <h5>{details.Title}</h5>
                <p><b>IMDB Rating:</b> {details.imdbRating} </p>
                <p class="mb-0">{details.Plot}</p>
            </div>

            <div class="project-info-box " >
                <p><b>Director:</b> {details.Director}</p>
                <p><b>Runtime:</b> {details.Runtime}</p>
                <p><b>Release Date:</b> {details.Released}</p>
                <p><b>Rated:</b> {details.Rated}</p>
                <p class="mb-0"><b>Genre:</b>  {details.Genre}</p>
            </div>

        </div>
    <div class="col-md-7">
        <img src={details.Poster} alt="movie-poster" class="rounded" style={{height:'625px',width:'625px'}}/>
    </div>

    </div>
</div>

    </div>
  )
}

export default Details