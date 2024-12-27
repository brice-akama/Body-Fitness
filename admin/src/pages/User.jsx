import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [newsletterSubscribers, setNewsletterSubscribers] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/all', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUsers(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle token expiration or unauthorized
          toast.error('Your session has expired. Please log in again.');
        } else {
          setError('Failed to fetch users');
        }
      }
    };

    const fetchNewsletterSubscribers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/newsletter/subscribers');
        setNewsletterSubscribers(response.data.subscribers);
      } catch (err) {
        setError('Failed to fetch newsletter subscribers.');
      }
    };

    const fetchContactMessages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/contact/messages');
        setContactMessages(response.data.messages);
      } catch (err) {
        setError('Failed to fetch contact messages.');
      }
    };

    fetchUsers();
    fetchNewsletterSubscribers();
    fetchContactMessages();
    setLoading(false);
  }, []);

  // Delete a user
  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      if (response.status === 200) {
        // Remove deleted user from state only if deletion was successful
        setUsers(users.filter(user => user._id !== id));
        toast.success('User deleted successfully');
      }
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

  // Delete a Newsletter Subscriber
  const handleDeleteNewsletter = async (email) => {
    try {
      const response = await axios.delete('http://localhost:4000/api/newsletter/unsubscribe', { data: { email } });
      setNewsletterSubscribers(newsletterSubscribers.filter((subscriber) => subscriber.email !== email));
      toast.success(response.data.message); // Success message
    } catch (err) {
      toast.error('Failed to delete subscriber. Please try again.');
    }
  };

  // Delete a Contact Message
  const handleDeleteContact = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/contact/messages/${id}`);
      setContactMessages(contactMessages.filter((message) => message._id !== id));
      toast.success(response.data.message); // Success message
    } catch (err) {
      toast.error('Failed to delete message. Please try again.');
    }
  };

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />

      {/* Users Section */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Users</h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Newsletter Subscribers Section */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Newsletter Subscribers</h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Subscribed On</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsletterSubscribers.map((subscriber) => (
                <tr key={subscriber._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{subscriber.email}</td>
                  <td className="px-4 py-2">{new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDeleteNewsletter(subscriber.email)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Form Messages Section */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Messages</h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Message</th>
                <th className="px-4 py-2 text-left">Submitted On</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactMessages.map((message) => (
                <tr key={message._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{message.name}</td>
                  <td className="px-4 py-2">{message.email}</td>
                  <td className="px-4 py-2">{message.message}</td>
                  <td className="px-4 py-2">{new Date(message.submittedAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDeleteContact(message._id)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default User;
