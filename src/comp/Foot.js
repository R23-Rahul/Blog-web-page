import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

export const Foot = () => {
    const {page,handlePageChange,totalPages}=useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white '>
        <div  className=' flex flex-row w-11/12 max-w-[550px] justify-between py-2'>
         <div className='flex gap-x-3'>
         { page >1 && 
                <button className='rounded-md border-2 px-4 py-1' onClick={()=>handlePageChange(page-1)}>
                    Previous
                </button>
            }

            { page < totalPages && 
            <button className='rounded-md border-2 px-4 py-1' onClick={()=>handlePageChange(page+1)}>
                Next
            </button>

            }

         </div>

            <p className='font-bold text-sm pt-2'>
                Page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}
