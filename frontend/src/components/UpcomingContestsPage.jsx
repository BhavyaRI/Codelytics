import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const UpcomingContestsPage = () => {
  const [contests, setContests] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUpcomingContests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/contests/upcoming');
        const data = response.data;
        setContests(data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch upcoming contests';
        setError(errorMessage);
      }
    };

    fetchUpcomingContests();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Contests</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {contests.map((contest) => (
          <li key={contest.id} className="mb-2 p-2 border rounded">
            <h2 className="font-semibold">{contest.name}</h2>
            <p>
              <span className="font-medium">Start Time:</span> {contest.startTime}
            </p>
            <p>
              <span className="font-medium">Duration:</span> {contest.duration}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingContestsPage;