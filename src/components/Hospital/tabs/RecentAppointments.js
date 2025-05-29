import React from 'react';

const RecentAppointments = () => {
  const appointments = [
    { id: 1, patient: 'John Smith', doctor: 'Dr. Lisa Chen', time: '9:00 AM', status: 'Completed' },
    { id: 2, patient: 'Maria Garcia', doctor: 'Dr. Raj Patel', time: '10:30 AM', status: 'In Progress' },
    { id: 3, patient: 'Ahmed Hassan', doctor: 'Dr. Sarah Johnson', time: '11:45 AM', status: 'Scheduled' },
    { id: 4, patient: 'Emily Wong', doctor: 'Dr. Lisa Chen', time: '1:15 PM', status: 'Scheduled' },
    { id: 5, patient: 'Robert Taylor', doctor: 'Dr. Raj Patel', time: '2:30 PM', status: 'Scheduled' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patient}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentAppointments;