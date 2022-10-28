import React from 'react';
import logo from '../asserts/netflix-logo.png'

const NavBar = () => {
	return <div className="px-10 py-5">
		<nav className="flex justify-between align-center">
			<div className="flex">
				<span className="w-28">
					<img src={logo} className="w-full" />
				</span>
				<ul className="flex ml-20">
					<li className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 "> TV Shows</li>
					<li className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 "> Movies </li>
					<li className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 "> Originals </li>
					<li className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 "> Kids</li>
					<li className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 ">Networks</li>
				</ul>
			</div>
			<div>
				<button>
					Start free trial
				</button>
				<button>
					Login
				</button>
			</div>
		</nav>
	</div>
}

export default NavBar;