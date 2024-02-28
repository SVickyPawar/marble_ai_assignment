import React from 'react';
import edit_icon from '../../assets/edit.png';
import trend_icon from '../../assets/Trend.png';

const NewKpiCard = () => {
  return (
    <div className='w-full h-auto flex flex-wrap justify-center gap-4  md:flex-row md:justify-between '>
        <div className="  bg-white shadow-2xl rounded-lg  h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Online Store Session</p> 
           <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" />
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>255,581</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-3 h-3 aspect-square object-contain text-gray-500 mt-2" src={trend_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div>
        <div className="  bg-white shadow-2xl rounded-lg  h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Online Store Session</p> 
           <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" />
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>255,581</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-3 h-3 aspect-square object-contain text-gray-500 mt-2" src={trend_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div>
        <div className="  bg-white shadow-2xl rounded-lg  h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Online Store Session</p> 
           <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" />
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>255,581</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-3 h-3 aspect-square object-contain text-gray-500 mt-2" src={trend_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div>
        <div className="  bg-white shadow-2xl rounded-lg  h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Online Store Session</p> 
           <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" />
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>255,581</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-3 h-3 aspect-square object-contain text-gray-500 mt-2" src={trend_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default NewKpiCard