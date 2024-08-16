import React from 'react'
import news from '../assets/news.svg'

function NewsItem(props) {
  return (
    <div className="max-w-sm rounded bg-neutral-100 overflow-hidden shadow-lg p-2  m-3 w-[400px] h-[450px]">
    <div className="px-6 py-4">
    <img className="w-full" src={(props.img)? (props.img): news} style={{height:"200px", width:"350px"}}/>
    
      <div className="font-bold text-base mb-2">{props.title}</div>
      <p className="text-gray-700 text-base">
      
       { (props.description) ?  (props.description).slice(0,90): "News ia about catchup with world affair"}
      </p>
      <a className="my-5" href={props.url}>Read More...</a>
    </div>
    </div>
  )
}

export default NewsItem
