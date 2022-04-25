import React, {useState, useInput} from 'react'

const CreateReview = ({ coords }) => {

    console.log('coords', coords)
    const handleClick = () => {

        
       
       
        // const reqBody = {
        //     clinic,
        //     service_type,
        //     cost,
        //     rating,
        //     review,
        //     latitude: markerCoords[0].lat,
        //     longitude: markerCoords[0].lng,
        //     locationID: markerCoords[1],
        // }
        
        // fetch('/api/postReview', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'Application/JSON'
        //     },
        //     body: JSON.stringify(reqBody),
        // })
        // .then((resp) => resp.json())
		// 	.then((data) =>
		// 		console.log('this is logging in post fetch request' + data)
		// 	)
    }

    // const useInput = (init) => {
    //     const [value, setValue] = useState(init);
    //     const onChange = (e) => {
    //         setValue(e.target.value);
    //     };
    //     return [value, onChange];
    // };

    // const [clinic, clinicOnChange] = useInput('')

    // console.log(coords)
  return (
    <div className='review-form'>
        <h1>Create Review</h1>
        <label>Clinic:</label>
        <input /*value={clinic} onChange={clinicOnChange}*/ type='text' placeholder='Enter clinic'></input>
        <label>Type of Service:</label>
        <input type='text' placeholder='Enter type of service'></input>
        <label>Cost:</label>
        <select>
            <option value='$'>$0 - $1,000</option>
            <option value='$$'>$1,000 - $5,000</option>
            <option value='$$$'>$5,000 - $10,000</option>
            <option value='$$$$'>$10,000+</option>
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
