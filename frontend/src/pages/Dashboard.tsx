import Sidebar from "../components/Sidebar"
import StudentStats from "../components/StudentStats"
import UserProfile from "../components/UserProfile"
import StudentDetails from "../components/PersonalDetail"


export default function DashboardPage(){
    return(<div className="min-h-screen flex">
        <div className="fixed">
            <Sidebar />
        </div>
        <div className="flex flex-col justify-center items-center w-full ml-48">
            <UserProfile />
            <StudentStats /> 
            <StudentDetails />  
        </div>
    </div>)
}