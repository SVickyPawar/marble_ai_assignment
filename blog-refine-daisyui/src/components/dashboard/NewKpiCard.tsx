import React, { useEffect, useRef, useState } from 'react';
import edit_icon from '../../assets/edit.png';
import trend_icon from '../../assets/Trend.png';
import stat_icon from "../../assets/stat.png";

const NewKpiCard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);


    const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState);
	};

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };
    useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
  return (
    <div className='w-full h-auto flex flex-wrap justify-center gap-4  md:flex-row md:justify-between '>
        <div className="relative  bg-white shadow-2xl rounded-lg  h-auto w-4/6 md:w-1/5 p-4">
           <div className='flex justify-between'>
           <p className='text-lg bolder font-medium leading-4 text-#303030'>Online Store Session</p> 
           <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" onClick={toggleMenu} src={edit_icon} alt="" />
           </div>
            <div className='flex mt-5'>
                <h3 className='text-3xl bolder font-medium leading-4 text-#303030'>255,581</h3>
                <div className='flex ml-4 gap-1'>

                <img className="w-3 h-3 aspect-square object-contain text-gray-500 mt-2" src={trend_icon} alt="" />
                <p className='text-gray-500'>9%</p>
                </div>
            </div>
            {isMenuOpen && (
									<div
                                    ref={menuRef}
                                    className="absolute top-10 right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
									>
										<div className="py-1" role="none">
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
												role="menuitem"
												id="menu-item-0"
                                                onClick={handleMenuItemClick}
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Average Order Value
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
												role="menuitem"
												id="menu-item-1"
                                                onClick={handleMenuItemClick}
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Average Order Value
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
												role="menuitem"
												id="menu-item-2"
                                                onClick={handleMenuItemClick}
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Gross Sales
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
												role="menuitem"
												id="menu-item-0"
                                                onClick={handleMenuItemClick}
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Net return value
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
												role="menuitem"
												id="menu-item-1"
                                                onClick={handleMenuItemClick}
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Store search conversion
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
												role="menuitem"
												id="menu-item-2"
                                                onClick={handleMenuItemClick}
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Return rate
											</a>
										</div>
									</div>
								)}
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