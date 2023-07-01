import React from 'react'
import { Link } from 'react-router-dom'


const NewsCard = ({ data }) => {
    return (
        <div className='newscard'>
            <Link to={data.url}>
                <img src={data.urlToImage} alt='img'></img>

                <div className='cardbody'>
                    <h2>
                        {data.title}
                    </h2>

                    <p>-{data.author}</p>
                    <p>{data.description}</p>
                </div>
            </Link>

        </div>
    )
}

export default NewsCard