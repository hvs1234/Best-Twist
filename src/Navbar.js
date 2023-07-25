import React from 'react'

const Navbar = ({contentdata,filteritem}) => {
  return (
    <>
        <div className="container list-none h-auto flex justify-center mx-auto 
        p-[20px] [20px] z-20 font-['Dosis' , sans-serif]">
            {contentdata.map((curele)=> {
              return (
                <>
                <button className='Navbtn' onClick={()=> filteritem(curele)}>{curele}</button>
                </>
              );  
            })}
        </div>
    </>
  ) 
}

export default Navbar