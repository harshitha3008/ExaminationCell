import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { date: 'Mar 1', progress: 30 },
    { date: 'Mar 2', progress: 45 },
    { date: 'Mar 3', progress: 60 },
    { date: 'Mar 4', progress: 80 },
    { date: 'Mar 5', progress: 90 },
];

export default function StudentDetails() {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-600">Student Details</h2>
                <ul className="space-y-3 text-gray-700">
                    <li><b>Name:</b> John Doe</li>
                    <li><b>Roll Number:</b> 123456</li>
                    <li><b>Course:</b> Computer Engineering</li>
                    <li><b>Year:</b> 3rd Year</li>
                    <li><b>Contact:</b> +91 9876543210</li>
                    <li><b>Email:</b> johndoe@gmail.com</li>
                    <li><b>Address:</b> Hyderabad, Telangana</li>
                    <li><b>Achievements:</b> Hackathon Winner, AI Researcher</li>
                    <li><b>Skills:</b> Python, React, Data Analysis</li>
                </ul>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-600">Daily Growth Progress</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <XAxis dataKey="date" stroke="#4F46E5" tick={{ fill: '#4F46E5' }} />
                        <YAxis domain={[0, 100]} stroke="#4F46E5" tick={{ fill: '#4F46E5' }} />
                        <Tooltip contentStyle={{ backgroundColor: '#4F46E5', color: '#fff' }} />
                        <Line type="monotone" dataKey="progress" stroke="#4F46E5" strokeWidth={3} dot={{ fill: '#4F46E5' }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
