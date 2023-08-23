import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Country = () => {

    const[data, setData]= useState([])



    useEffect(()=>{
      axios.get('https://restcountries.com/v3.1/all')
      .then(res=>setData(res.data))
      .catch(err=>console.log(err))
    },[])



  return (
   <div>

        <h1 className='text-4xl font-mono text-center text-orange-600 font-bold py-10'>All Country Info</h1>

     <div className='flex flex-wrap justify-between gap-y-2' >
        
        {
          data.map((desh,index)=>{
              return <div key={index} className='w-[350px] bg-slate-300 hover:bg-slate-200 rounded-2xl text-center  ' >
  
                  
                    
                      <div className='mb-10  rounded-md px-4 py-5'>
                          <img className='mx-auto' src={desh.flags.png} />
                          <h1 className='font-mono text-2xl '>Name :{desh.name.common}</h1>
                          <h2 className='font-mono text-xl '>Capital :{desh.capital}</h2>
                          <p className='font-mono text-xl'> total Polulation :{desh.population}</p>
                      </div>
                   
                  
                  
                     
              </div>
          })
        }
      </div>
   </div>
  )
}

export default Country
