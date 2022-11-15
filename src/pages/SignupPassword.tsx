import React,{useState} from 'react'
import logo from '../asserts/netflix-logo.png'

const SignupPassword = () => {

		const [inputFocus, setInputFocus] = useState(false);
	const [password, setPassword] = useState("");
	return (
		<div>
			<div className="flex justify-between align-center p-3  border-b-2">
				<span className="w-[6rem] md:w-32 cursor-pointer flex ">
					<img src={logo} className="w-full" />
				</span>
				<button type="button" className="font-bold">
					Sign in
				</button>
			</div>
			<div className="pt-10 px-8">
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
					46subin@gmail.com
				</h3>
				<form>
						<div className="bg-gray-700 h-12 relative mt-10 rounded rounded-md overflow-hidden">
								<span className={`absolute bottom-3  ml-5 duration-200 text-gray-500 ${inputFocus && "bottom-7 text-xs"}`}>Password</span>
								<input type="password" name="password" value={password} className="w-full pl-5 pt-3 h-full text-gray-100 bg-zinc-800 outline-0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e?.target?.value)} onFocus={() => setInputFocus(true)} onBlur={() => !password && setInputFocus(false)} />
							</div>
					<button type="submit" className="bg-red-600  w-full py-5">
						Next
					</button>
				</form>
			</div>
		</div>
	)
}

export default SignupPassword