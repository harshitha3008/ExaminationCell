import Sidebar from "../components/Sidebar"
import ScheduleBox from "../components/ScheduleBox"

export default function SchedulePage(){
    const data = [
        {
          title: "Supply Examination Schedule",
          description:
            "Students with backlogs must apply for the summer semester and attend the supply exams to clear their subjects.",
          date: "June 15, 2025",
        },
        {
          title: "End Semester Examination",
          description:
            "Final semester exams for all subjects will be conducted between 27th Nov and 9th Dec as per the schedule.",
          date: "Nov 27 - Dec 9, 2025",
        },
        {
          title: "Mid-Semester Examination",
          description:
            "The mid-sem exams will be conducted between 15th Oct and 22nd Oct, covering 50% of the syllabus.",
          date: "Oct 15 - Oct 22, 2025",
        },
        {
          title: "Lab External Examination",
          description:
            "All lab exams will be held between 14th Nov and 20th Nov. Ensure that lab records and viva preparations are complete.",
          date: "Nov 14 - Nov 20, 2025",
        },
        {
          title: "Project Viva & Presentation",
          description:
            "Final-year students must present their projects to external evaluators between 10th Dec and 15th Dec.",
          date: "Dec 10 - Dec 15, 2025",
        },
        {
          title: "Revaluation & Recounting Process",
          description:
            "Students who wish to apply for revaluation or recounting can submit their applications within 15 days after results are announced.",
          date: "Varies based on result announcement",
        },
        {
          title: "Internal Assessment Tests",
          description:
            "Two internal assessments will be conducted per semester. The best of two will be considered for final grading.",
          date: "Aug 20 & Sep 25, 2025",
        },
        {
          title: "Practical Training & Certification",
          description:
            "Students must complete mandatory practical training in labs and obtain certifications before semester-end.",
          date: "Nov 30, 2025",
        },
        {
          title: "University Convocation Ceremony",
          description:
            "Graduating students will receive their degrees at the convocation ceremony scheduled in January.",
          date: "Jan 10, 2026",
        },
        {
          title: "Entrance Examination for New Admissions",
          description:
            "The university entrance exam for new admissions will be conducted on July 15th. Candidates must bring their hall tickets and valid ID proof.",
          date: "July 15, 2025",
        },
        {
          title: "Supplementary Exam Registration Deadline",
          description:
            "Students who wish to apply for supplementary exams must submit their applications before August 10th to avoid late fees.",
          date: "Aug 10, 2025",
        },
        {
          title: "Mock Test Series for Semester Exams",
          description:
            "A mock test series will be available online from November 1st to help students prepare for semester exams.",
          date: "Nov 1 - Nov 20, 2025",
        },
        {
          title: "Final Year Comprehensive Viva",
          description:
            "All final-year students must appear for a comprehensive viva examination covering their entire coursework on December 5th.",
          date: "Dec 5, 2025",
        },
        {
          title: "Academic Calendar & Exam Timetable Release",
          description:
            "The official academic calendar and detailed exam timetable will be released by the university on September 1st.",
          date: "Sep 1, 2025",
        },
        {
          title: "Scholarship Eligibility Test",
          description:
            "Meritorious students can apply for the scholarship test scheduled for October 20th. Top scorers will receive financial assistance for tuition fees.",
          date: "Oct 20, 2025",
        },
      ];
      
      
      
    return(<div className="min-h-screen flex">
        <div className="fixed"><Sidebar /></div>
        <div className="flex justify-center items-center flex-col w-full my-10 mx-4 ml-56">
            <ScheduleBox data={data} />
        </div>
    </div>)
}