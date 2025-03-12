export default function StudentStats(){
    return(<div className="flex-1 p-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Overall Attendence', value: '83.23%', color: 'bg-blue-500' },
              { label: 'Earned Creadit', value: '64', color: 'bg-green-500' },
              { label: 'Last GPA', value: '8.35', color: 'bg-yellow-500' },
              { label: 'Departments Project', value: '6', color: 'bg-purple-500' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className={`w-12 h-12 ${stat.color} rounded-lg mb-4`} />
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
            </div>
            <div className="p-6">
              {[
                'Final Year Computer Science Exam Results Published',
                'New Exam Schedule Added for Engineering Department',
                'Student Registration Deadline Extended',
                'Semester Results Analysis Completed',
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4" />
                  <p className="text-gray-600">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>)
}