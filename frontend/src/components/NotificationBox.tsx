import { motion } from "framer-motion";

export default function NotificationBox({ data }: { data: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-11/12 p-4">
      {data.map((item: any, index: any) => (
        <motion.div
          key={index} // Moved key to the correct position
          initial={{ opacity: 0, y: 150 }} // Start from right
          animate={{ opacity: 1, y: 0 }} // Animate to normal position
          transition={{ duration: 0.75, delay: index * 0.2 }} // Delay for each item
        >
          <div
            className="flex p-5 border rounded-xl shadow-lg font-normal hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-br gap-3 from-white to-blue-200"
          >
            <div>
              <span className="text-xl md:text-2xl font-semibold ml-4">
                {item.icon}
              </span>
              <p className="text-sm font-bold">{item.type}</p>
            </div>
            <span className="text-slate-800 ml-2 text-xl md:text-base mt-4">
              {item.text} {item.reward}
            </span>
            <span className="text-blue-700 mt-4">{item.link}</span>
            <span className="flex justify-end mt-4 ">{item.time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
