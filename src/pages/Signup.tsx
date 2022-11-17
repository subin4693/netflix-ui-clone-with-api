import React, { useState } from 'react'
import { Footer } from '../components'
import logo from '../asserts/netflix-logo.png'
import bgImg from '../asserts/background.jpg'
import CSS from 'csstype'

const Signup: React.FC = () => {

	const [inputFocus, setInputFocus] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");

	const setBgImg: CSS.Properties = {
		background: `url(${bgImg})`
	}


	return (
		<>
			<div style={setBgImg} className="h-screen bg-cover bg-center px-3 py-3">
				<div className="flex justify-between align-center">
					<span className="w-[7rem] md:w-32 cursor-pointer flex ">
						<img src={logo} className="w-full" />
					</span>
					<button type="button" className="bg-red-700 px-2 rounded-md text-white">
						Sign in
					</button>
				</div>
				<div className="text-white text-center mt-16 lg:mt-24">
					<h2 className="font-bold text-3xl">
						Unlimited movies, TV shows and more.
					</h2>
					<p className="mt-5 text-lg">
						Watch anywhere. Cancle anytime.
					</p>
					<p className="mt-5 text-lg">
						Ready to watch? Enter your email to create or restart your membership
					</p>
					<form>
						<div className="mt-4 bg-white h-12 relative max-w-lg mx-auto">
							<span className={`absolute duration-300 left-3 text-gray-900 bottom-3 ${inputFocus && "bottom-7 text-sm"}`}>Email address</span>
							<input type="email" className="outline-0 bg-transparent text-gray-900  font-bold w-full h-full px-4 pt-2 " value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e?.target?.value) }} onFocus={() => setInputFocus(true)} onBlur={() => !email && setInputFocus(false)} />
						</div>
						<button type="submit" className="px-3 py-2 bg-red-700 mt-4">
							Get Started {">"}
						</button>
					</form>

				</div>
			</div>
			<Footer />
		</>
	)
}

export default Signup