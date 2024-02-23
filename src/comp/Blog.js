import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import { Spinner } from './Spinner';

export const Blog = () => {

    const {posts,loading}=useContext(AppContext);

  return (

    <div className='w-11/12 max-w-[550px] py-3 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center '>

        {
            loading ? (<Spinner/>) :
            (
                posts.length ===0 ? 
                (<div> 
                    <p>No Post Found</p>
                </div>) :
                (
                    posts.map((post)=>(
                        
                     <div key={post.id}>
                       <p className='font-bold text-[20px]'>{post.title}</p> 
                       <p className='text-[12px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                       <p className='text-[12px]'>Posted on <span>{post.date}</span></p>
                       <p className='text-[15px] mt-[10px]'>{post.content}</p>

                       
                       <div className='flex gap-3'>
                        {
                            post.tags.map((tag,index)=>{
                                return <span key={index} className='text-blue-500 underline text-[11px] mt-[8px]'>{`#${tag}`}</span>
                            })
                        }


                       </div>



                     </div>
                    ))
                )
            )
        }


    </div>


  )
}
