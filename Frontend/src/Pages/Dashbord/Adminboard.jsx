// Event Approval UI using React and Tailwind CSS
import React, { useState, useEffect } from 'react';
//import axios from 'axios';

const AdminDashboard = () => {
  const [pendingEvents, setPendingEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch pending events from the backend
    axios.get('/api/events?status=pending')
      .then(response => setPendingEvents(response.data))
      .catch(error => console.error('Error fetching pending events:', error));
  }, []);

  const handleApprove = (eventId) => {
    axios.post(`/api/events/${eventId}/approve`)
      .then(() => {
        setPendingEvents(pendingEvents.filter(event => event.event_ID !== eventId));
        alert('Event approved successfully');
      })
      .catch(error => console.error('Error approving event:', error));
  };

  const handleReject = (eventId) => {
    axios.post(`/api/events/${eventId}/reject`)
      .then(() => {
        setPendingEvents(pendingEvents.filter(event => event.event_ID !== eventId));
        alert('Event rejected successfully');
      })
      .catch(error => console.error('Error rejecting event:', error));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Event Approval</h1>

      {/* Pending Events Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Event Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Organizer</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingEvents.map(event => (
              <tr key={event.event_ID} className="border-t">
                <td className="px-4 py-2">{event.event_name}</td>
                <td className="px-4 py-2">{new Date(event.event_date).toLocaleDateString()}</td>
                <td className="px-4 py-2">{event.organizer_name}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                    onClick={() => handleApprove(event.event_ID)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleReject(event.event_ID)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Event Details</h2>
            <p><strong>Name:</strong> {selectedEvent.event_name}</p>
            <p><strong>Date:</strong> {new Date(selectedEvent.event_date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Description:</strong> {selectedEvent.description}</p>
            <div className="mt-4">
              <button
                className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                onClick={() => handleApprove(selectedEvent.event_ID)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={() => handleReject(selectedEvent.event_ID)}
              >
                Reject
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-1 rounded ml-2"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
