import { useEffect, useState } from "react";
import { Calendar, Users, FileSpreadsheet, Clock, Bell, Settings, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setActiveTab(currentPath || "dashboard");
  }, [location.pathname]);

  return (
    <div className={`h-screen min-w-48 shadow-lg ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue-600">ExaminationCell</h1>
        <p className="text-lg text-gray-500">Vignan University</p>
      </div>

      <nav className="mt-6">
        <Link
          to={"/dashboard"}
          className={`w-full flex items-center px-6 py-3 text-left ${
            activeTab === "dashboard"
              ? "text-blue-600 bg-blue-100"
              : theme === "dark"
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Calendar className="w-5 h-5 mr-3" />Dashboard
        </Link>

        <Link
          to={"/students"}
          className={`w-full flex items-center px-6 py-3 text-left ${
            activeTab === "students"
              ? "text-blue-600 bg-blue-100"
              : theme === "dark"
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Users className="w-5 h-5 mr-3" />Students
        </Link>

        <Link
          to={"/reasults"}
          className={`w-full flex items-center px-6 py-3 text-left ${
            activeTab === "reasults"
              ? "text-blue-600 bg-blue-100"
              : theme === "dark"
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FileSpreadsheet className="w-5 h-5 mr-3" />Results
        </Link>

        <Link
          to={"/schedule"}
          className={`w-full flex items-center px-6 py-3 text-left ${
            activeTab === "schedule"
              ? "text-blue-600 bg-blue-100"
              : theme === "dark"
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Clock className="w-5 h-5 mr-3" />Schedule
        </Link>

        <Link
          to={"/notifications"}
          className={`w-full flex items-center px-6 py-3 text-left ${
            activeTab === "notifications"
              ? "text-blue-600 bg-blue-100"
              : theme === "dark"
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Bell className="w-5 h-5 mr-3" />Notifications
        </Link>

        <Link
          to={"/settings"}
          className={`w-full flex items-center px-6 py-3 text-left ${
            activeTab === "settings"
              ? "text-blue-600 bg-blue-100"
              : theme === "dark"
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Settings className="w-5 h-5 mr-3" />Settings
        </Link>
      </nav>

      <div>
        <button
          onClick={() => {
            navigate("/signin");
            localStorage.removeItem("examinationCellToken");
          }}
          className={`w-full flex items-center px-6 py-3 text-red-600 ${
            theme === "dark" ? "hover:bg-red-800" : "hover:bg-red-100"
          }`}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}
