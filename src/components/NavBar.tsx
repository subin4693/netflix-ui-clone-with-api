import React, { useEffect, useState } from 'react';
import logo from '../asserts/netflix-logo.png'

const Navbar = () => {
	
	const [dark, setDark] = useState<boolean>(false);

	const showDark = () => {
		if (window.scrollY > 100) setDark(true);
		else setDark(false);
	}
	useEffect(() => {
		window.addEventListener("scroll", showDark);
		return () => window.removeEventListener('scroll', showDark)
	}, [])

	const NavItems = ({ text }: { text: string }) => {
		return (<li className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 hover:text-white cursor-pointer">{text}</li>)
	}


	return <div className={`px-10  py-5 fixed top-0 left-0 right-0  z-50 duration-300 ease-in-out ${dark && "bg-black"}`}>
		<nav className="flex  justify-between items-center">
			<div className="flex">
				<span className="w-[4rem] md:w-28 cursor-pointer">
					<img src={logo} className="w-full" />
				</span>
				<ul className="text-md absolute  bg-green-200 ml-20 text-gray-400 duration-300 hover:bg-gray lg:hidden">
					<li>Tv Shows</li>
					<li>Movies</li>
					<li>Originals</li>
					<li>Kids</li>
					<li>Networks</li>

				</ul>
			
				<ul className="hidden ml-5 lg:flex">
					{['Tv Shows', 'Movies', 'Originals', 'Kids', 'Networks'].map((item, index) => {
						return <NavItems text={item} key={item + index} />
					})}					
				</ul>

			</div>
			<div>
				<button className="hidden md:inline  mx-5 text-lg text-white rounded-sm py-1 duration-300 px-3 font-bold hover:bg-black  cursor-pointer">
					START YOUR FREE TRIAL
				</button>
				<button className="text-gray-400 text-sm rounded-md py-1 cursor-pointer px-3 duration-300 md:mx-5 md:text-lg hover:bg-gray-500 hover:text-white ">
					Login
				</button>
			</div>
		</nav>
	</div>
}

export default Navbar;