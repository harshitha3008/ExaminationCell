import Sidebar from "../components/Sidebar";
import { useState } from "react";
import axios from "axios";

export default function SettingsPage() {
    const [form, setForm] = useState({
        name: "",
        regNo: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    interface ChangeEvent {
        target: {
            name: string;
            value: string;
        };
    }

    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex justify-center items-center w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-semibold mb-4 px-14">Update New Password</h2>
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
            </div>
        </div>
    );
}
