export default function UserProfile(){

    const name = localStorage.getItem("examinationcellUserName")
    const regNo = localStorage.getItem("examinationcellUserRegNo")
    
    return(<div className="bg-white p-20 rounded-lg shadow-md flex items-center space-x-10  max-w-7xl h-70 m-10 w-11/12">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
            <img src="./profile.jpg"/>
        </div>
        <div className="flex-1 pl-4" >
            <h2 className="text-4xl font-bold text-gray-800">Welcome, {name}</h2>
            <p className="text-gray-600 mt-3 text-xl">
                <span className="font-semibold">Registration Number:</span> {regNo}
            </p>
        </div>
    </div>)
}