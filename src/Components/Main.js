import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

import "../CSS/card.css";
import { Link } from 'react-router-dom';

const Main = () => {
    const [news, setnews] = useState([]);

    const [news1, setnews1] = useState([]);


    const [search, setsearch] = useState("");




    const getnews = async () => {
        try {
            const url = "https://newsapi.org/v2/top-headlines?q=" + search + "&country=us&apiKey=453c0e6b406e42dfaaa70059f1df8e77"
            const url2 = "https://newsapi.org/v2/top-headlines?q=sports&country=&apiKey=453c0e6b406e42dfaaa70059f1df8e77"

            const x = await axios.get(url);
            const y = await axios.get(url2);

            setnews(x.data.articles);
            console.log(y.data);

            setnews1(y.data.articles);

        }
        catch (er) {
            console.log(er);


        }

    }

    useEffect(() => {
        getnews();
    }, [search])

    return (

        <>

            <div>

                <div className='search'>
                    <p onClick={() => { setsearch("")}}>All</p>

                    <p onClick={() => { setsearch("sports")}}>Sports</p>
                    <p onClick={() => { setsearch("entertainment")}}>Entertainment</p>
                    <p onClick={() => { setsearch("market")}}>Market</p>

                    <div>

                        <input className='input' value={search} onChange={(e) => setsearch(e.target.value)} placeholder='Search news'></input>
                        <button onClick={() => getnews()}> Search</button>
                    </div>

                </div>

                <div className='container'>

            {news1.length>0?
                <div className='card1'>
                    <img src={news1[0].urlToImage} alt='image'></img>

                    <h1>{news1[0].title}</h1>
                    <p>-{news1[0].author}</p>

                    <Link to={news1[0].url}></Link>

                    <hr></hr>

                </div>
                :null}

                    {news.map((i) => {
                        return <NewsCard data={i} />
                    })}

                </div>

            </div>


        </>

    )
}

export default Main