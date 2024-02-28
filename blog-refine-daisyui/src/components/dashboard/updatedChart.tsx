import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import edit_icon from '../../assets/edit.png';
import arrow_icon from '../../assets/arrow.png';
import stat_icon from '../../assets/stat.png';

const UpdatedChart = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const run = () => {
            const myChart = echarts.init(document.getElementById('echart-container'));
            const option = {
                title: {
                    // text: 'Two Curve Line Graph'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Curve 1', 'Curve 2'],
                    show: false
                },
                xAxis: {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',]
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: false // Hide y-axis values
                    }
                },
                series: [
                    {
                        name: 'Curve 1',
                        type: 'line',
                        smooth:true,
                        data: [220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330]
                    },
                    {
                        name: 'Curve 2',
                        type: 'line',
                        smooth:true,
                        data: [150, 232, 201, 154, 190, 330,150, 232, 201, 154, 190, 330,]
                    }
                ]
            };
            myChart.setOption(option);

            // Resize chart when window size changes
            const resizeHandler = () => {
                myChart.resize();
            };
            window.addEventListener('resize', resizeHandler);

            // Remove event listener when component unmounts
            return () => {
                window.removeEventListener('resize', resizeHandler);
            };
        };

        run();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{width:"90%",margin:'auto',marginTop:'20px'}}>
            <div className='w-full h-auto flex flex-wrap justify-center gap-4  md:flex-row  md:gap-0'>
        <div className="  bg-white  rounded-lg  h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Online Store Session</p> 
           <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" />
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>255,581</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1" src={arrow_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div>
        <div className="  bg-white   h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Net Return Value</p> 
           {/* <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" /> */}
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>-$1507.44</h3>
                <div className='flex ml-4 gap-1'>
                <img className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1" src={arrow_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div>
        <div className="  bg-white    h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Total orders</p> 
           {/* <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" /> */}
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>10511</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1" src={arrow_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div>
        <div className="  bg-white    h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Conversion Rate</p> 
           {/* <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" /> */}
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>3.18%</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1" src={arrow_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
        </div> 
        <div className="  bg-white  rounded-lg  h-auto w-4/6 md:w-1/5 p-4 flex justify-center" ref={menuRef}>
             <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50 mt-5 mr-0"
                                onClick={toggleMenu}
                                aria-expanded={isMenuOpen ? 'true' : 'false'}
                                aria-haspopup="true"
                            >
                             
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isMenuOpen && (
                            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-0"><span className='inline-block object-contain mr-3'><img src={stat_icon} alt="" /></span>Average Order Value</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1"><span className='inline-block object-contain mr-3'><img src={stat_icon} alt="" /></span>Average Order Value</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2"><span className='inline-block object-contain mr-3'><img src={stat_icon} alt="" /></span>Gross Sales</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-0"><span className='inline-block object-contain mr-3'><img src={stat_icon} alt="" /></span>Net return value</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1"><span className='inline-block object-contain mr-3'><img src={stat_icon} alt="" /></span>Store search conversion</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2"><span className='inline-block object-contain mr-3'><img src={stat_icon} alt="" /></span>Return rate</a>
                                    
                                </div>
                            </div>
                        )}
                    </div>

        </div>

       
    </div>
            <div className='shadow-lg' id='echart-container' style={{ width: '100%', height: '400px',backgroundColor:'#FFFFFF'}}></div>
        </div>
    );
};

export default UpdatedChart;
