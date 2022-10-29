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


	return <div className={`px-10 py-5 fixed top-0 left-0 right-0  z-50 duration-300 ease-in-out ${dark && "bg-black"}`}>
		<nav className="flex  justify-around">
			<div className="flex">
				<span className="w-28 cursor-pointer">
					<img src={logo} className="w-full" />
				</span>
				<ul className="flex ml-20">
					{['Tv Shows', 'Movies', 'Originals', 'Kids', 'Networks'].map((item, index) => {
						return <NavItems text={item} key={item + index} />
					})}					
				</ul>
			</div>
			<div>
				<button className="mx-5 text-lg text-white rounded-sm py-1 duration-300 px-3 font-bold hover:bg-black  cursor-pointer">
					START YOUR FREE TRIAL
				</button>
				<button className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 hover:text-white cursor-pointer">
					Login
				</button>
			</div>
		</nav>
	</div>
}

export default Navbar;