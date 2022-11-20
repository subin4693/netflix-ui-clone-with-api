import React, { useState } from 'react';
import logo from '../asserts/netflix-logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { loginUser } from '../features/userSlice';

const SignupPassword: React.FC = () => {
	const [inputFocus, setInputFocus] = useState<boolean>(false);
	const [password, setPassword] = useState<string>("");

	const email = useSelector((state: any) => state.email.emailId)
	const loginAuth = useSelector((state: any) => state.user.user);
	
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const callme = () => {
		dispatch(loginUser(true));
		navigate('/');

	}

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		console.log(email);
		console.log(password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				callme();
				return console.log(res);
			})
			.catch((err) => console.log(err))
		dispatch(loginUser(true))
	}

	return (
		<div>
			<div className="flex justify-between align-center p-3  border-b-2">
				<span className="w-[6rem] md:w-32 cursor-pointer flex ">
					<Link to="/">
						<img src={logo} className="w-full" />
					</Link>
				</span>
				<Link to="/signin">
					<button type="button" className="font-bold">
						Sign in
					</button>
				</Link>
			</div>
			<div className="pt-10 px-8 max-w-lg  mx-auto">
				<h1 className="font-bold text-3xl leading-10">
					Welcome back!<br />
					Joining Netflix is easy.
				</h1>
				<p className="mt-3 text-lg">
					Enter your password and you'll be watching in no time.
				</p>
				<p className="mt-5 font-bold">
					Email
				</p>
				<h3 className="font-bold">
					{email && email}
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="h-12 relative border border-3 border-black mt-5 overflow-hidden">
						<span className={`absolute bottom-3  ml-5 duration-200 text-gray-500 ${inputFocus && "bottom-7 text-xs"}`}>Password</span>
						<input type="password" value={password} className="w-full pl-5 pt-3 h-full text-black outline-0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e?.target?.value.trim())} onFocus={() => setInputFocus(true)} onBlur={() => !password && setInputFocus(false)} />
					</div>
					<button type="submit" className="bg-red-600 text-xl font-bold text-white w-full py-4 mt-5">
						Next
					</button>
				</form>
			</div>
		</div>
	)
}

export default SignupPassword