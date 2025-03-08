import Sidebar from "../components/Sidebar";
import NotificationBox from "../components/NotificationBox";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "Challenges",
      icon: "🏆",
      text: "Weekly Alpha-1 chllange is added in LogiWorks.",
      link: "Join here!",
      time: "2 days ago",
    },
    {
      id: 12,
      type: "Examination",
      icon: "📖",
      text: "Artificial Intelligence exam is scheduled for December 6, 2024. Don't forget to review ML concepts!",
      link: "Apply",
      time: "15 days ago",
    },
    {
      id: 2,
      type: "Challenge",
      icon: "🏆",
      text: "Weekly Challange-2 for Alpha and Beta Sections are approaching.",
      link: "Join here!",
      time: "9 days ago",
    },

    {
      id: 4,
      type: "Challenge",
      icon: "🏆",
      text: "Completed a Weekly challenge - here are your points ",
      reward: "+10",
      time: "19 days ago",
    },
    {
      id: 10,
      type: "Examination",
      icon: "📖",
      text: "Advanced Java Programming exam is on December 4, 2024. Check important topics.",
      link: "Apply",
      time: "12 days ago",
    },

    {
      id: 6,
      type: "Challenge",
      icon: "🏆",
      text: "Completed a Weekly challenge - here are your points ",
      reward: "+10",
      time: "a month ago",
    },

    // 📚 EXAM-RELATED NOTIFICATIONS 📚
    {
      id: 7,
      type: "Examination",
      icon: "📖",
      text: "Reminder: Computer Networks exam is scheduled for November 27, 2024.",
      link: "Apply",
      time: "5 days ago",
    },
    {
      id: 8,
      type: "Examination",
      icon: "📖",
      text: "Data Mining Techniques exam is coming up on November 29, 2024.",
      link: "Apply",
      time: "7 days ago",
    },
    {
      id: 9,
      type: "Examination",
      icon: "📖",
      text: "Compiler Design exam is scheduled for December 1, 2024. Start revising!",
      link: "Apply",
      time: "10 days ago",
    },
    {
      id: 5,
      type: "Challenge",
      icon: "🏆",
      text: "Biweekly Contest 150 and Weekly Contest 437 are approaching.",
      link: "Join here!",
      time: "23 days ago",
    },
    {
      id: 11,
      type: "Examination",
      icon: "📖",
      text: "Lab exams start on November 14, 2024. Ensure all practicals are revised.",
      link: "Apply",
      time: "18 days ago",
    },
    {
      id: 3,
      type: "Challenge",
      icon: "🏆",
      text: "Weekly Contest 438 is approaching.",
      link: "Join here!",
      time: "16 days ago",
    },
  ];

  return (
    <div className="min-h-screen flex">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="flex justify-center items-center w-full ml-52">
        <NotificationBox data={notifications} />
      </div>
    </div>
  );
}
