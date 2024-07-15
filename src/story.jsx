import React from 'react'

function story(props) {
    return (

    <div className='story flex relative gap-8 items-center p-4 bg-zinc-700 m-4 z-0 flex-wrap w-screen'>
        <img src={props.img} alt="story picture" width="200px" className='rounded'/>
        <div className="story_info space-y-3">
            <div className="location flex gap-1">
                <i className="fa fa-map-marker text-red-500" aria-hidden="true"></i>
                <h5 className=' uppercase tracking-normal'>{props.location} | </h5>
                <a href="https://maps.google.com/">View on google maps</a>
            </div>
            <h1>{props.name}</h1>
            <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default story