import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Supple() {
  const [suppleDetails, setSuppleDetails] = useState({
    regNumber: "",
    courseCode: "",
    courseName: "",
    paymentMethod: "",
  });
  const navigate = useNavigate()

  function handleSubmit(event : any) {
    event.preventDefault();
    alert(`Supplementary Exam Applied!\nCourse: ${suppleDetails.courseName}\nAmount Paid: ₹1000`);
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full items-center justify-center p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Apply for Supplementary</h2>

          <form onSubmit={handleSubmit}>
            {/* Registration Number */}
            <div className="mb-3">
              <label className="block text-gray-700 font-medium">Registration Number</label>
              <input
                type="text"
                value={suppleDetails.regNumber}
                onChange={(e) => setSuppleDetails({ ...suppleDetails, regNumber: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            {/* Course Code */}
            <div className="mb-3">
              <label className="block text-gray-700 font-medium">Course Code</label>
              <input
                type="text"
                value={suppleDetails.courseCode}
                onChange={(e) => setSuppleDetails({ ...suppleDetails, courseCode: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            {/* Course Name */}
            <div className="mb-3">
              <label className="block text-gray-700 font-medium">Course Name</label>
              <input
                type="text"
                value={suppleDetails.courseName}
                onChange={(e) => setSuppleDetails({ ...suppleDetails, courseName: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            {/* Payment Method */}
            <div className="mb-3">
              <label className="block text-gray-700 font-medium">Payment Method</label>
              <select
                value={suppleDetails.paymentMethod}
                onChange={(e) => setSuppleDetails({ ...suppleDetails, paymentMethod: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>

            {/* Fixed Amount */}
            <div className="mb-3">
              <label className="block text-gray-700 font-medium">Amount</label>
              <input type="text" value="₹1000" readOnly className="w-full p-2 border rounded-lg bg-gray-100" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
                onClick={() => navigate("/")}
                >
              Pay ₹1000 & Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
