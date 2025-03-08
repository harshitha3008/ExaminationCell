import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signatom } from "../atoms/sign";
import { useRecoilState } from "recoil";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [regNo, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signloading, setSignloading] = useRecoilState(Signatom)


  async function handleSignup() {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        name: name,
        regNo: regNo,
        password: password,
      });
        if(response){
            localStorage.setItem("examinationCellToken", response.data.userInfo.token)
            localStorage.setItem("examinationcellUserName", response.data.userInfo.name)
            localStorage.setItem("examinationcellUserRegNo", response.data.userInfo.regNo)
            navigate('/dashboard')
        }
        setSignloading(false)
    } 
    catch(e){
      console.log("Internal server error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Registration Number</label>
            <input
              type="text"
              value={regNo}
              onChange={(e) => setRegno(e.target.value)}
              placeholder="Enter your registration number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {signloading ? <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">Please wait..</button> :
          <button
            onClick={()=>{
                setSignloading(true)
                handleSignup()
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >Sign Up
          </button>}

          <div>
            already have an account ? 
            <button className="text-blue-800"
                onClick={()=>{
                    signloading ? null : navigate('/signin')
                }}>go back</button>
          </div>

        </div>
      </div>
    </div>
  );
}