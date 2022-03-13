import React, { useEffect, useState } from "react"

export const UsingFetch = () => {
  const [users, setUsers] = useState([])
  const [heading,setHeading]=useState('All deals and coupons.')
  const [deals,setDeals]=useState('20')
  const fetchData = (c) => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        setHeading(c)
        setDeals(data.length);
        console.log(data);
      })
  }

  const handleCategory=(a,b)=>{
    fetch("https://fakestoreapi.com/products?limit=20")
    .then(response => {
      return response.json()
    })
    .then(data => {
      data=data.filter((e)=>{if(e.category==a)
      return e;
      })
      setUsers(data)
      setDeals(data.length);
        setHeading(b);
      

      console.log(data);
    })

  }

  useEffect(() => {
    fetchData('All deals and coupons.')
  }, [])

  

  return (
    <>
     <h1 className='all'>{heading}</h1>
     <div className='sentence'>The best online deals and coupons, including Klarna exclusives, updated daily.</div>
    <div className='filterborder'>
      <div className='category'>
      <h2 >Category</h2>
      <ul>
        <li onClick={()=>{fetchData('All deals and coupons.')}}>All</li>
        <li onClick={()=>{handleCategory('jewelery','Jewelery')}}>Jewelery</li>
        <li onClick={()=>{handleCategory("men's clothing","Men's Clothing")}}>Men's Clothing</li>
        <li onClick={()=>{handleCategory("women's clothing","Women's Clothing")}}>women's Clothing</li>
        <li onClick={()=>{handleCategory("electronics","Computers and Accessories")}}>Computers & Accessories</li>
        <li onClick={()=>{handleCategory("electronics","Consumer Electronics")}}>Consumer Electronics</li>
         <li onClick={()=>{handleCategory("electronics","Education")}}>Education</li>
         <li onClick={()=>{handleCategory("jewelery","Gifts")}}>Gifts</li>
         <li onClick={()=>{fetchData('Health and Beauty')}}>Health and Beauty</li>
         <li onClick={()=>{fetchData('Household')}}>Household</li>        
      </ul>

      </div>
    </div>
    <div>
      <input className='inputuser' placeholder='Search'></input>
     
      {users.length > 0 && (
        <div className='box'>
        <h3 className='deals'>{deals} Deals</h3>
          {users.map(user => (
            <div className='inside-box'key={user.id}>
              <img src={user.image}></img>
              <h4>{user.category}</h4>
              <div>{user.title}</div>
            </div>
            ))}
        
        
        </div>  
      )}
    </div>
    </>
  )
}

