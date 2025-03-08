import React, { useState, useEffect } from "react";
import { Plus, Search, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Correct import path for Sidebar

interface Student {
  id: number;
  name: string;
  registration: string;
  session: string;
  branch: string; // Changed from department to branch
}

const StudentsPage: React.FC = () => {
  const [studentFilter, setStudentFilter] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionFilter, setSessionFilter] = useState<string>(""); // Filter by session
  const [branchFilter, setBranchFilter] = useState<string>(""); // Filter by branch

  // List of engineering branches
  const engineeringBranches = [
    "Computer Science and Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Information Technology",
    "Chemical Engineering",
    "Aerospace Engineering",
    "Biotechnology",
    "Automobile Engineering",
  ];

  // Sample student data
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Simulate fetching data
        const data: Student[] = [
          {
            id: 1,
            name: "John Doe",
            registration: "12345",
            session: "2021-2025", // Updated to 4-year session
            branch: "Computer Science and Engineering", // Changed from department to branch
          },
          {
            id: 2,
            name: "Jane Smith",
            registration: "67890",
            session: "2021-2025", // Updated to 4-year session
            branch: "Electronics and Communication Engineering", // Changed from department to branch
          },
          {
            id: 3,
            name: "Alice Johnson",
            registration: "11223",
            session: "2022-2026", // Updated to 4-year session
            branch: "Mechanical Engineering", // Changed from department to branch
          },
          {
            id: 4,
            name: "Bob Brown",
            registration: "44556",
            session: "2022-2026", // Updated to 4-year session
            branch: "Civil Engineering", // Changed from department to branch
          },
        ];
        setStudents(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on search input, session, and branch
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(studentFilter.toLowerCase()) ||
      student.registration.toLowerCase().includes(studentFilter.toLowerCase());

    const matchesSession = sessionFilter
      ? student.session === sessionFilter
      : true;
    const matchesBranch = branchFilter ? student.branch === branchFilter : true;

    return matchesSearch && matchesSession && matchesBranch;
  });

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex bg-white text-gray-900">
      {/* Sidebar */}
      <div className="fixed"><Sidebar /></div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto ml-52">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Student Information</h1>
          <Link
            to="/students/add"
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Student
          </Link>
        </div>

        <div className="p-6 rounded-lg shadow-sm bg-white">
          {/* Search Bar */}
          <div className="mb-4 flex items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search students..."
                value={studentFilter}
                onChange={(e) => setStudentFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                aria-label="Search students"
              />
            </div>
          </div>

          {/* Filters for Session and Branch */}
          <div className="mb-4 flex space-x-4">
            <select
              value={sessionFilter}
              onChange={(e) => setSessionFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            >
              <option value="">All Sessions</option>
              <option value="2021-2025">2021-2025</option>
              <option value="2022-2026">2022-2026</option>
            </select>

            <select
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            >
              <option value="">All Branches</option>
              {engineeringBranches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Student Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Registration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Session
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Branch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="bg-white hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.registration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.session}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.branch}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => {
                            // Add edit functionality here
                            console.log("Edit student:", student.id);
                          }}
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
