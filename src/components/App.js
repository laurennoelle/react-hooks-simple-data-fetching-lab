import React, {useEffect, useState} from 'react'

const API = 'https://dog.ceo/api/breeds/image/random'

function App() {
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then(data => setImage(data.message))
    }, [])

    if (!image) {
        return <h2>Loading...</h2>
    }
  return (
    <div>
        <p>
            <img src={image} alt="A Random Dog" />
        </p>
    </div>
  )
}

export default App
