import { useLoaderData } from 'react-router-dom';
import './singlePage.scss';
import { useEffect } from 'react';
import apiRequest from '../../lib/apiRequest';
import { useState } from 'react';



function SinglePage() {
    const data = useLoaderData()
    const date = new Date(data.createAt)
    const formettedDate = date.toLocaleDateString('en-GB', {
        year:"numeric",
        month:"2-digit",
        day:"2-digit"
    })
    
  

    
    return (
        <div className='singlePage'>
            <div className="container">
                <div className="left">
                    <div className="wrapper">
                        <div className="imgContainer">
                            <img src={data.images || './noavatar.jpg'} alt='No avatar available' />
                        </div>
                        <div className="textContainer">
                            <h3>Title: <b>{data.name}</b></h3>
                            <span>Posted Date: {formettedDate}</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>About the project</h2>
                        <p>
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
