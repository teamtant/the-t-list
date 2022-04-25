import React, {useState} from 'react'

const CreateReview = ({ coords }) => {

    console.log('coords', coords)
    const handleClick = () => {

        const reqBody = {
            clinic: clinic,
            service_type: service_type,
            cost: cost,
            rating: Number(rating),
            review: review,
            latitude: String(coords[0][0]),
            longitude: String(coords[0][1]),
            location_id: coords[1],
        }
        
        fetch('/api/postReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(reqBody),
        })
        .then(() => {
            window.location.reload()
        })
        // .then((resp) => resp.json())
			// .then((data) =>
			// 	console.log('this is the post req'+ data)
			// )
    }

    const useInput = (init) => {
        const [value, setValue] = useState(init);
        const onChange = (e) => {
            setValue(e.target.value);
        };
        return [value, onChange];
    };

    const [clinic, clinicOnChange] = useInput('');
    const [service_type, service_typeOnChange] = useInput('');
    const [cost, costOnChange] = useInput('');
    const [rating, ratingOnChange] = useInput('');
    const [review, reviewOnChange] = useInput('');

  return (
    <div className='review-form'>
        <h1>Create Review</h1>
        <label>Clinic:</label>
        <input value={clinic} onChange={clinicOnChange} type='text' placeholder='Enter clinic'></input>
        <label>Type of Service:</label>
        <input value={service_type} onChange={service_typeOnChange} type='text' placeholder='Enter type of service'></input>
        <label>Cost:</label>
        <input value={cost} onChange={costOnChange} type='text' placeholder='Enter cost $-$$$$'></input>
        <label>Rating:</label>
        <input value={rating} onChange={ratingOnChange} type='text' placeholder='Enter rating 1-5'></input>        
        <label>Review:</label>
        <textarea value={review} onChange={reviewOnChange} rows='15' placeholder='Enter a review' ></textarea>
        <button onClick={handleClick}>Submit Review</button>
    </div>
  )
}

export default CreateReview
