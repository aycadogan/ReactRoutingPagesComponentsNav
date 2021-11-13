import React from 'react'

import img404 from '../img/ginger-cat-page-not-found.png'

const Error404 = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Error 404: Cat food not found</h1>
            <img className="image-404" src={img404} alt="error" />
        </div>
    )
}

export default Error404