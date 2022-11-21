import React, { useEffect, useState } from 'react';
import logo from '../asserts/netflix-logo.png';
import Avatar from '../asserts/Netflix-avatar.png';

import {useDispatch} from 'react-redux';
import {loginUser} from '../features/userSlice'; 

import {signOut} from 'firebase/auth'
import { auth } from '../firebase';




const Navbar = () => {
	
	const [dark, setDark] = useState<boolean>(false);
	const [clicked, setClicked] = useState<boolean>(true);
	const dispatch = useDispatch();

	const showDark = () => {
		if (window.scrollY > 100) setDark(true);
		else setDark(false);
	}
	useEffect(() => {
		window.addEventListener("scroll", showDark);
		return () => window.removeEventListener('scroll', showDark)
	}, [])

	const handleLogOut = () => {
		signOut(auth)
		.then((res)=>{
			dispatch(loginUser(false));
			return res;
		})
		.catch((err)=>{
			console.log(err)
			return err;
		})

	}

	const NavItems = ({ text }: { text: string }) => {
		return (<li className="mx-5 text-lg text-gray-400 rounded-md py-1 duration-300 px-3 hover:bg-gray-500 hover:text-white cursor-pointer">{text}</li>)
	}


	return <div className={`bg-black  px-5  py-5 fixed top-0 left-0 right-0  z-50 duration-300 ease-in-out  ${dark ? "lg:bg-black" : "lg:bg-transparent"} `}>
		<nav className="flex  justify-between items-center">
			<div className="flex items-center">
				<span className="w-[4.5rem] md:w-28 cursor-pointer">
					<img src={logo} className="w-full" />
				</span>
				
				<ul className="hidden ml-5 lg:flex">
					{['Tv Shows', 'Movies', 'Originals', 'Kids'].map((item, index) => {
						return <NavItems text={item} key={item + index} />
					})}					
				</ul>
			</div>
			
			<div className="flex items-center">
				<div className="mr-10 lg:hidden">
					{clicked ? (<div onClick={() => setClicked(false)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
							<path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
						</svg>
					</div>) : (<div onClick={() => setClicked(true)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
							<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
						</svg>
					</div>)}
				</div>
				<button type="button" onClick={handleLogOut} className="hidden md:inline text-white max-w-md  bg-red-600 px-3 py-2 font-bold rounded rounded-md">
					Logout
				</button>
				<button className="hidden md:inline  mx-5 text-lg text-white rounded-sm py-1 duration-300 px-3 font-bold hover:bg-black  cursor-pointer">
					START YOUR FREE TRIAL
				</button>
				<div className="w-6  overflow-hidden">
					<img src={Avatar} className="w-full " />
				</div>
			</div>
			<ul className={`${clicked && 'right-[-100rem]'} right-0 text-md absolute bg-black ease-in-out pb-2 w-full top-16  text-gray-400 cursor-pointer duration-500 hover:bg-gray  grid place-items-center lg:hidden`}>
				<li className="mt-2">Tv Shows</li>
				<li className="mt-2">Movies</li>
				<li className="mt-2">Originals</li>
				<li className="mt-2">Kids</li>
				<button type="button" onClick={handleLogOut} className=" md:hidden text-white mt-2 max-w-md  bg-red-600 px-3 py-1 font-bold rounded rounded-md">
					Logout
				</button>
			</ul>
		</nav>
	</div>
}

export default Navbar;