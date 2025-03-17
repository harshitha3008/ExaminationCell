import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [activeTab, setActiveTab] = useState("Profile");
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [regdNumber, setRegdNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const token = localStorage.getItem("examinationCellToken");

    const [form, setForm] = useState({
        name: "",
        regNo: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.newPassword !== form.confirmPassword) {
            alert("New password and confirm password do not match");
            return;
        }
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/update", {
                regNo: form.regNo,
                name: form.name,
                password: form.newPassword,
            });

            if (response.status === 200) {
                setPasswordUpdated(true);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error updating password:", error);
            alert("Error updating password. Please try again.");
        }
        setLoading(false);
    };

    const handleDeleteAccount = async () => {
        if (!regdNumber || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/v1/setting/delete-account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token || "",
                },
                body: JSON.stringify({ regdNumber, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Account deleted successfully.");
                setError("");
                setRegdNumber("");
                setPassword("");
                setConfirmPassword("");
            } else {
                setError(data.message || `Error: ${response.status}`);
                setSuccess("");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setError("Something went wrong.");
            setSuccess("");
        }
    };

    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="w-full">
                {/* Header Section */}
                <div className="flex justify-center border-b">
                    {["Profile", "Theme", "Account"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-3 text-lg ${
                                activeTab === tab ? "text-blue-500 border-b-2 border-blue-500 font-semibold" : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="flex justify-center items-center h-full p-6">
                    {activeTab === "Profile" && (
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                            <h2 className="text-xl font-semibold mb-4 text-center">Update New Password</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
                                <input type="text" name="regNo" placeholder="Registration Number" value={form.regNo} onChange={handleChange} className="border p-2 rounded" required />
                                <input type="password" name="oldPassword" placeholder="Old Password" value={form.oldPassword} onChange={handleChange} className="border p-2 rounded" required />
                                <input type="password" name="newPassword" placeholder="New Password" value={form.newPassword} onChange={handleChange} className="border p-2 rounded" required />
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="border p-2 rounded" required />
                                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                                    {loading ? "Updating..." : "Change Password"}
                                </button>
                            </form>
                            {passwordUpdated && <p className="text-green-500 mt-2 text-center">Password Updated Successfully!</p>}
                        </div>
                    )}

                    {activeTab === "Theme" && (
                        <div className="space-x-4">
                            <button
                                onClick={() => setTheme("light")}
                                className={`px-4 py-2 rounded-md ${theme === "light" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                            >
                                Light Mode
                            </button>
                            <button
                                onClick={() => setTheme("dark")}
                                className={`px-4 py-2 rounded-md ${theme === "dark" ? "bg-blue-500 text-white" : "bg-gray-600 text-white"}`}
                            >
                                Dark Mode
                            </button>
                        </div>
                    )}

                    {activeTab === "Account" && (
                        <div className="w-96">
                            <button onClick={() => setShowDeleteForm(!showDeleteForm)} className="bg-red-600 text-white px-4 py-2 rounded-md w-full">
                                Delete Account
                            </button>

                            {showDeleteForm && (
                                <div className="mt-4 space-y-4">
                                    <input type="text" placeholder="Registration Number" className="w-full px-3 py-2 border rounded-md" value={regdNumber} onChange={(e) => setRegdNumber(e.target.value)} />
                                    <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    {error && <p className="text-red-500">{error}</p>}
                                    {success && <p className="text-green-500">{success}</p>}
                                    <button onClick={handleDeleteAccount} className="bg-red-700 text-white px-4 py-2 rounded-md w-full">
                                        Confirm Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
