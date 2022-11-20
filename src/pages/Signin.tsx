import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/userSlice';

import bgImg from '../asserts/background.jpg';
import logo from '../asserts/netflix-logo.png';
import CSS from 'csstype';
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {
	const [inputFocus, setInputFocus] = useState<boolean>(false);
	const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const bg: CSS.Properties = {
		background: `url(${bgImg})`
	}


	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				dispatch(loginUser(true));
				navigate('/');
				return res;
			})
			.catch((err) => {
				console.log(err);
			})

	}

	return (
		<div style={bg} className="h-screen ">
			<div className="px-4 py-5">
				<span className="w-[5rem] md:w-32 cursor-pointer flex ">
					<img src={logo} className="w-full" />
				</span>
				<div className="md:bg-opacity-70 md:bg-black md:w-[28rem] md:p-2 md:mt-10 md:mx-auto md:px-14 md:py-8 md:pb-20">
					<div className="mt-8 px-3">
						<form onSubmit={handleSubmit}>
							<h2 className="text-3xl font-bold text-white">
								Sign In
							</h2>	
							<div className="mt-8 mx-auto max-w-md bg-gray-700 h-12 relative rounded rounded-md overflow-hidden">
								<span className={`absolute bottom-3  duration-200 ml-5 text-gray-500 ${inputFocus && "bottom-7 text-xs"}`}>Email</span>
								<input type="text" value={email} className="w-full h-full pl-5 pt-3 outline-0 bg-zinc-800 text-gray-100 " onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e?.target?.value)} onFocus={() => setInputFocus(true)} onBlur={() => !email && setInputFocus(false)} />
							</div>
							<div className="bg-gray-700 mx-auto max-w-md h-12 relative mt-10 rounded rounded-md overflow-hidden">
								<span className={`absolute bottom-3  ml-5 duration-200 text-gray-500 ${passwordFocus && "bottom-7 text-xs"}`}>Password</span>
								<input type="password" value={password} className="w-full pl-5 pt-3 h-full text-gray-100 bg-zinc-800 outline-0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e?.target?.value)} onFocus={() => setPasswordFocus(true)} onBlur={() => !password && setPasswordFocus(false)} />
							</div>
							<div className="text-center">
								<button type="submit" className="my-auto text-white max-w-md  bg-red-600 mt-10 w-full py-2 font-bold rounded rounded-md">
									Sign In
								</button>
							</div>
						</form>
					</div>
					<p className="text-gray-400 mt-10 pl-4">
						New to Netflix? <span className="text-white font-bold"><Link to="/signup">Sign up now</Link></span>.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signin;