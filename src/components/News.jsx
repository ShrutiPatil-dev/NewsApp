import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';

function News(props) {

    const[articles,setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false);

   

    const capitalizeFirstLetter = (string) => {
        return string.toUpperCase();
    } 
  
    useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.author)} - News-App`;
    },[])

    

    const news = async () =>{
      setIsLoading(true);
        try{
        const url =`https://newsapi.org/v2/top-headlines?sources=${props.author}&apiKey=272afe41e8fd462e83a1d7aa3cdb1e69`
        
    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setArticles(data.articles)
        setIsLoading(false);

        }
        catch{
            console.error(error);
            

        }
    } 

    useEffect(() =>{
           news();
    },[])

  return (
    <div >
    
         <h2 className="text-center px-2 py-2 font-bold uppercase">{capitalizeFirstLetter(props.author)}<span className='text-gray-600'> - Top Headlines</span> </h2>
         {isLoading ? <Loading/> : null}
         <div className='flex flex-wrap  justify-center items-center w-full p-5' >
         {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} url={news.url} img={news.urlToImage} description={news.description}/>
         })}
         </div>
        
    </div>
  )
}

export default News
