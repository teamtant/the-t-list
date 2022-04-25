import React, {useState} from 'react'

const CreateReview = ({ coords }) => {

    const handleClick = () => {
        console.log('hello')
    }
    console.log(coords)
  return (
    <div className='review-form'>
        <h1>Create Review</h1>
        <label>Clinic:</label>
        <input type='text' placeholder='Enter clinic'></input>
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
        <button onClick={handleClick}>Submit Review</button>
    </div>
  )
}

export default CreateReview
