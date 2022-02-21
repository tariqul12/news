import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopNews = () => {
    const [article,setarticles]=useState([])
    useEffect(()=>{
        const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=d5e77c7d4fa94c928cf49ac2d60cfc36`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setarticles(data.articles))
        .catch(error=>console.log(error))

    },[])
    // console.log(article)
    // const articles=article.articles;
    return (
        <div>
            <h3> News count :{article.length}</h3>
            {
                article.map(articl=><News articl={articl}></News>)
            }
        </div>
    );
};

export default TopNews;