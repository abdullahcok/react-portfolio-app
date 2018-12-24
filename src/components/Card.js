import React from 'react';
import './Card.css';

const Card = ({id, name, tags, about}) => {         // (props)
                        // const{id, name, tags, about} = props; ---if props used, it is used everywhere... **
      return(
                <div className='bg-olive dib br1 pa2 ma2 grow bw1 shadow-5 '>
                    <img alt='projects' src={`https://robohash.org/${id}?100x100`}/>
                    <div style={{color: '#99e6ff'}}>
                          <h3 >{name}</h3>
                          <p><b>about: </b>{about}</p>
                          <p><b>tags: </b>{tags}</p>
                    </div>
                </div>
      );
}

export default Card;
