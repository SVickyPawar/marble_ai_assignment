import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import edit_icon from "../../assets/edit.png";
import arrow_icon from "../../assets/arrow.png";
import stat_icon from "../../assets/stat.png";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Skeleton from "react-loading-skeleton";
import {firstData,secondData} from '../../../data/data';
 

const UpdatedChart: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const [primaryData, setPrimaryData] = useState<any[]>([]);
    const [secondaryData, setSecondaryData] = useState<any[]>([]);
    const [xAxis, setXAxis] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	
	const [startD, setStartD] = useState(
		new Date().toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		})
	);
	const [endD, setEndD] = useState(
		new Date().toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		})
	);
	const [isDateChanged, setIsDateChanged] = useState(false);
	//console.log(startD,endD,"line262")
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const [showCalendar, setShowCalendar] = useState(false);
	const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      });
      
	const calendarRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (event:MouseEvent) => {
            if (calendarRef.current && !((calendarRef.current as any).contains(event.target as Node))) {
                setShowCalendar(false);
              }
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	const handleSelect = (ranges:any) => {
		
		setSelectionRange(ranges.selection);
		setStartD(ranges.selection.startDate);
		setEndD(ranges.selection.endDate);
		console.log(ranges, "ranges");
		const selectDate = ranges.selection.startDate.toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		});
		const endDate = ranges.selection.endDate.toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		});
        setStartD(selectDate);
        setEndD(endDate);
		console.log("startDate", selectDate, "endDate", endDate);
		const filteredDatesPrimary = firstData.filter((data:any) => {
			const date = new Date(data.date);
			return (
				date >= ranges.selection.startDate && date <= ranges.selection.endDate
			);
		});
		const filteredDatesSecondary = secondData.filter((data:any) => {
			const date = new Date(data.date);
			return (
				date >= ranges.selection.startDate && date <= ranges.selection.endDate
			);
		});
		const axisData = filteredDatesPrimary.map((data:any) => data.date);
		console.log(axisData, "axisData");
		setPrimaryData(filteredDatesPrimary);
		setSecondaryData(filteredDatesSecondary);
		setXAxis(axisData);
		
		console.log(
			filteredDatesPrimary,
			"filteredDates",
			filteredDatesSecondary,
			"aga"
		);
		setIsDateChanged(true);
		if (
			isDateChanged &&
			ranges.selection.startDate &&
			ranges.selection.endDate
		) {
			setShowCalendar(false);
			setIsDateChanged(false);
		} else {
			setShowCalendar(true); // If only start date is selected, keep the calendar visible
		}
	};

	useEffect(() => {
		const run = () => {
			const myChart = echarts.init(
				document.getElementById("echart-container")!
			);
			const option: echarts.EChartsOption = {
				title: {
					// text: 'Two Curve Line Graph'
				},
				tooltip: {
					trigger: "axis",
				},
				legend: {
					data: ["Curve 1", "Curve 2"],
					show: false,
				},
				xAxis: {
					type: "category",
					data: xAxis,
				},
				yAxis: {
					type: "value",
					axisLabel: {
						show: true, // Hide y-axis values
					},
				},
				series: [
					{
						name: "Demand",
						type: "line",
						smooth: true,
						data: primaryData,
                        showSymbol: false,
                        lineStyle: {
                            color: "#7469B6", // Change color here
                           
                        },
					},
					{
						name: "Supply",
						type: "line",
						smooth: true,
                        showSymbol: false,
						data: secondaryData,
                        lineStyle: {
                            
                            type: "dashed", // Make the line dashed
                        },
					},
				],
			};
			myChart.setOption(option);

			// Resize chart when window size changes
			const resizeHandler = () => {
				myChart.resize();
			};
			window.addEventListener("resize", resizeHandler);

			// Remove event listener when component unmounts
			return () => {
				window.removeEventListener("resize", resizeHandler);
			};
		};

		run();
	}, [primaryData, secondaryData, xAxis]);

	useEffect(() => {
		const primaryValues = firstData.map((data:any) => data.value);
		const secondaryValues = secondData.map((data:any) => data.value);
		const xAxisValues = firstData.map((data:any) => data.date);
		console.log(xAxisValues, "xAxisValues");
		setXAxis(xAxisValues);
		setPrimaryData(primaryValues);
		setSecondaryData(secondaryValues);
	}, []);

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
		<>
			{isLoading && <Skeleton style={{ width: "90%", height: "400px" }} />}
			{!isLoading && (
				<div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
					<div className="w-full h-auto flex flex-wrap justify-center gap-4  md:flex-row  md:gap-0">
						<div className="  bg-white  rounded-lg  h-auto w-4/6 md:w-1/5 p-4">
							<div className="flex justify-between">
								<p className="text-lg bolder font-medium leading-4 text-#303030">
									Online Store Session
								</p>
								<img
									className="aspect-w-8 aspect-h-2 object-contain cursor-pointer"
									src={edit_icon}
									alt=""
								/>
							</div>
							<div className="flex mt-5">
								<h3 className="text-3xl bolder font-medium leading-4 text-#303030">
									255,581
								</h3>
								<div className="flex ml-4 gap-1">
									<img
										className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1"
										src={arrow_icon}
										alt=""
									/>
									<p className="text-gray-500">9%</p>
								</div>
							</div>
						</div>
						<div className="  bg-white   h-auto w-4/6 md:w-1/5 p-4">
							<div className="flex justify-between">
								<p className="text-lg bolder font-medium leading-4 text-#303030">
									Net Return Value
								</p>
								{/* <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" /> */}
							</div>
							<div className="flex mt-5">
								<h3 className="text-3xl bolder font-medium leading-4 text-#303030">
									-$1507.44
								</h3>
								<div className="flex ml-4 gap-1">
									<img
										className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1"
										src={arrow_icon}
										alt=""
									/>
									<p className="text-gray-500">9%</p>
								</div>
							</div>
						</div>
						<div className="  bg-white    h-auto w-4/6 md:w-1/5 p-4">
							<div className="flex justify-between">
								<p className="text-lg bolder font-medium leading-4 text-#303030">
									Total orders
								</p>
								{/* <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" /> */}
							</div>
							<div className="flex mt-5">
								<h3 className="text-3xl bolder font-medium leading-4 text-#303030">
									10511
								</h3>
								<div className="flex ml-4 gap-1">
									<img
										className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1"
										src={arrow_icon}
										alt=""
									/>
									<p className="text-gray-500">9%</p>
								</div>
							</div>
						</div>
						<div className="  bg-white    h-auto w-4/6 md:w-1/5 p-4">
							<div className="flex justify-between">
								<p className="text-lg bolder font-medium leading-4 text-#303030">
									Conversion Rate
								</p>
								{/* <img className="aspect-w-8 aspect-h-2 object-contain cursor-pointer" src={edit_icon} alt="" /> */}
							</div>
							<div className="flex mt-5">
								<h3 className="text-3xl bolder font-medium leading-4 text-#303030">
									3.18%
								</h3>
								<div className="flex ml-4 gap-1">
									<img
										className="w-2 h-2 aspect-square object-contain text-gray-500 mt-1"
										src={arrow_icon}
										alt=""
									/>
									<p className="text-gray-500">9%</p>
								</div>
							</div>
						</div>
						<div
							className="  bg-white  rounded-lg  h-auto w-4/6 md:w-1/5 p-4 flex justify-center"
							ref={menuRef}
						>
							<div className="relative inline-block text-left">
								<div>
									<button
										type="button"
										className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50 mt-5 mr-0"
										onClick={toggleMenu}
										aria-expanded={isMenuOpen ? "true" : "false"}
										aria-haspopup="true"
									>
										<svg
											className="-mr-1 h-5 w-5 text-gray-400"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>
								{isMenuOpen && (
									<div
										className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="menu-button"
									>
										<div className="py-1" role="none">
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												id="menu-item-0"
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Average Order Value
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												id="menu-item-1"
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Average Order Value
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												id="menu-item-2"
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Gross Sales
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												id="menu-item-0"
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Net return value
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												id="menu-item-1"
											>
												<span className="inline-block object-contain mr-3">
													<img src={stat_icon} alt="" />
												</span>
												Store search conversion
											</a>
											<a
												href="#"
												className="text-gray-700 block px-4 py-2 text-sm"
												role="menuitem"
												id="menu-item-2"
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
						</div>
					</div>
					<div className="w-full px-4 flex bg-white" ref={calendarRef}>
                        <p className="font-semibold">Select date range: </p>
						<input
							className="ml-4 text-center w-1/5 border-2 rounded hover:text-gray-400 cursor-pointer"
							type="text"
							value={`${startD} - ${endD}`}
							placeholder="Select Dates"
							onFocus={() => setShowCalendar(true)}
							readOnly
						/>
						{showCalendar && (
							<DateRangePicker
								ranges={[{ ...selectionRange }]}
								onChange={handleSelect}
							/>
						)}
					</div>
					<div
						className="shadow-lg "
						id="echart-container"
						style={{
							width: "100%",
							height: "500px",
							backgroundColor: "#FFFFFF",
						}}
					></div>
				</div>
			)}
		</>
	);
};

export default UpdatedChart;
