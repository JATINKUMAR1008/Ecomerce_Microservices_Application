"use client"
import TabsContainer from '@/components/tabsContainer/tabs.container'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    const data = fetch(`http://localhost:8080/product/`,{
      method: 'GET'
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        return data
    })
  },[])
  return (
    <>
      <div className='flex flex-col justify-start px-4'>
        <div className='w-full py-5 h-[200px] px-10 relative justify-between flex items-center mb-10'>
          
          <span className=''>
            <h1 className='text-4xl font-bold mt-5'>Welcome to store </h1>
            <p className='text-sm font-extralight mb-10'>Begin your hunt for new products</p>
          </span>
          <img src='https://img.freepik.com/premium-vector/circular-pattern-black-white-floral-ornamental-mandala-outline-coloring-book-pages_227750-15.jpg?w=740' className='w-1/2 h-full object-cover'/>

        </div>

        <TabsContainer />
      </div>
    </>
  )
}
