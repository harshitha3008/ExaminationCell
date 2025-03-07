import Sidebar from "../components/Sidebar"


export default function DashboardPage(){
    return(<div className="min-h-screen flex">
        <Sidebar />
        <div className="flex justify-center items-center w-full">
            dashboardPage
        </div>
    </div>)
}