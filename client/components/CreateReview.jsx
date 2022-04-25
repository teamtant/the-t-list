import React, {useState} from 'react'

const CreateReview = ({ coords }) => {
    console.log(coords)
  return (
    <div className='review-form'>
        <h1>Create Review</h1>
        <label>Provider:</label>
        <input type='text' placeholder='Enter provider'></input>
        <label>Provider Location:</label>
        <input type='text' placeholder='Enter location'></input>
        <label>Type of Service:</label>
        <input type='text' placeholder='Enter type of service'></input>
        <label>Cost:</label>
        <select>
            <option value='$'>$0 - $1,000</option>
            <option value='$$'>$1,000 - $5,000</option>
            <option value='$$$'>$5,000 - $10,000</option>
            <option value='$$$'>$10,000+</option>
        </select>
        <label>Rating:</label>
        <select>
            <option value='1'>✩</option>
            <option value='2'>✩✩</option>
            <option value='3'>✩✩✩</option>
            <option value='4'>✩✩✩✩</option>
            <option value='5'>✩✩✩✩✩</option>
        </select>        
        <label>Review:</label>
        <textarea rows='15' placeholder='Enter a review' ></textarea>
    </div>
  )
}

export default CreateReview



// fetch api (need to get this endpoint from backend)
// POST method, headers etc
// body obj {provider, coordinates, type of service, cost, rating, review description}
// send as json

// some conditional functionality to either post to existing location or post new location
