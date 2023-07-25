import React from 'react'
import Navbar from './Navbar'
import './style.css'
import Contentbox from './Contentbox'
import Content from './contentAPI'

const uniquelist = ()=>
[
  ...new Set(Content.map((curele)=>{
    return curele.title;
  })
  ), "All",
]

const Home = () => {
  const [navdata,setnavdata] = React.useState(Content);
  const [contentdata] = React.useState(uniquelist);

  const filteritem = (category)=>
  {
    if(category === "All")
    {
      setnavdata(Content);
      return;
    }
    const updatedlist = Content.filter((curele)=>{
        return curele.title === category;
    });
    setnavdata(updatedlist);
  }

  return (
    <>
      <div className="img1 h-[36.4em]">
          <Navbar contentdata = {contentdata} filteritem = {filteritem} />
          <div className="head flex flex-col h-[28em] text-center my-[50px] w-auto">
            <h1 className='head1 text-[#89e9e9] text-[5em]'>Welcome to my online meal</h1>
            <p className='para text-[white] text-[1.5em] mx-[10em] my-[40px]'>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
            <button className="btn flex justify-center rounded-2xl bg-[lightcoral] mx-[30em] my-[40px] px-[20px] py-[20px] text-[1.5em] font-bold text-[darkblue] hover:text-[#06e42b] 
            hover:bg-[#ff5050]">Order Now</button>
          </div>

        <Contentbox navdata = {navdata} />
        <div className="contact">
          <form className='contact-form' action="https://formsubmit.co/3469harshsharma@gmail.com" method='POST' target='_blank'>
            <label htmlFor="name">Your Name 👤</label>
            <input type="text" id='name' placeholder='Enter your name 👤' required />
            <label htmlFor="name">Your Email 📩</label>
            <input type="email" id='email' placeholder='Enter your valid email address 📩' required />
            <label htmlFor="name">Your Phone Number 📱</label>
            <input type="number" id='email' placeholder='Enter your valid email address 📱' required />
            <button className='contact-btn'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home