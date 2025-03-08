import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Chart from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResultPage() {
  const navigate = useNavigate();
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const [chartLoaded, setChartLoaded] = useState(false);

  const subjects = [
    { code: "CS401", name: "CN (Computer Networks)", marks: 85 },
    { code: "CS402", name: "PDS (Problem Design & Solving)", marks: 92 },
    { code: "CS403", name: "ADS (Advanced Data Structures)", marks: 78 },
    { code: "CS404", name: "SE (Software Engineering)", marks: 88 },
    { code: "CS405", name: "CC (Cloud Computing)", marks: 55 },
  ];

  const getGrade = (marks:any) => {
    if (marks >= 90) return "A+ (Excellent)";
    if (marks >= 80) return "A (Very Good)";
    if (marks >= 70) return "B (Good)";
    if (marks >= 60) return "C (Marginal)";
    return "F (Fail)";
  };

  const totalMarks = subjects.reduce((sum, subject) => sum + subject.marks, 0);
  const cgpa = (totalMarks / (subjects.length * 10)).toFixed(2);
  const isFail = subjects.some((subject) => subject.marks < 60);

  useEffect(() => {
    if (chartLoaded) return;
    setChartLoaded(true);

    if (barChartRef.current && pieChartRef.current) {
      new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: subjects.map((s) => s.name),
          datasets: [
            {
              label: "Marks",
              data: subjects.map((s) => s.marks),
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      new Chart(pieChartRef.current, {
        type: "pie",
        data: {
          labels: subjects.map((s) => s.name),
          datasets: [
            {
              data: subjects.map((s) => s.marks),
              backgroundColor: ["red", "blue", "green", "purple", "orange"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, []);

  const handleApplyForSupple = () => {
    navigate("/supple");
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById("result-section");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 150);
      pdf.save("Result.pdf");
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="fixed left-0 top-0 h-full w-60 bg-white shadow-md">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full p-8 ml-64">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Student Result
        </h1>

        {/* Marks Table */}
        <div id="result-section">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full text-center border border-gray-300">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="border p-3">Subject Code</th>
                  <th className="border p-3">Subject Name</th>
                  <th className="border p-3">Marks</th>
                  <th className="border p-3">Grade</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr
                    key={index}
                    className="border bg-gray-50 hover:bg-gray-100"
                  >
                    <td className="border p-3 font-medium">{subject.code}</td>
                    <td className="border p-3">{subject.name}</td>
                    <td
                      className={`border p-3 font-bold ${
                        subject.marks < 60 ? "text-red-500" : "text-green-600"
                      }`}
                    >
                      {subject.marks}
                    </td>
                    <td className="border p-3 font-semibold">
                      {getGrade(subject.marks)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CGPA Display */}
          <div className="text-center mt-6 text-xl font-semibold">
            <p className="p-3 rounded-lg shadow-md bg-gray-200 inline-block">
              <span className="text-gray-700">CGPA: </span>
              <span className={`${isFail ? "text-red-500" : "text-green-600"}`}>
                {cgpa}
              </span>
            </p>
          </div>

          {/* Charts Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="w-80 h-60">
              <canvas ref={barChartRef}></canvas>
            </div>
            <div className="w-60 h-60">
              <canvas ref={pieChartRef}></canvas>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-center mt-6 flex justify-center gap-4">
            {isFail && (
              <button
                onClick={handleApplyForSupple}
                className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600"
              >
                Apply for Supple
              </button>
            )}
            <button
              onClick={handleDownloadPDF}
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
