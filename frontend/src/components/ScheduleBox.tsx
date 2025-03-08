import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ScheduleBox({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4">
      {data.map((item: any, index: any) => (
        <motion.div
          key={index} // Moved key to the correct position
          initial={{ opacity: 0, x: 150 }} // Start from right
          animate={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.75, delay: index * 0.1 }} // Delay for each item
        >
          <div
            className="p-5 border rounded-xl shadow-lg font-light hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 
                       bg-gradient-to-br from-white to-blue-200"
          >
            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
            <p className="text-slate-800 my-3 text-sm md:text-base">{item.description}</p>

            <div className="flex gap-4 mb-3">
              <a
                href="/aws.pdf"
                target="_blank"
                className="text-blue-800 hover:underline cursor-pointer"
              >
                See here
              </a>
              <a
                href="/aws.pdf"
                download="sample.pdf"
                className="text-blue-800 hover:underline cursor-pointer"
              >
                Download
              </a>
            </div>

            <div className="flex items-center text-sm md:text-base text-gray-700">
              <Calendar className="mt-1 mr-2 w-5 h-5" />
              <span>{item.date}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
