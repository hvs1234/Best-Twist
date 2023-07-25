import React from 'react'

const Contentbox = ({navdata}) => {
  return (
    <>
        <div className="content-box">
            {navdata.map((curele)=>{
              return (
                <div className="box">
                  <img className='content-image' src={curele.image} alt="pizza"/>
                  <h1>{curele.title}</h1>
                  <p>{curele.name}</p>
                </div>
              )
            })}
        </div>
    </>
  )
}

export default Contentbox