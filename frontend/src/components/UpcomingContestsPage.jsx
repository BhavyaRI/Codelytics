import React, { useEffect, useState } from "react";
import axios from "axios";

const UpcomingContestsPage = () => {
  const [contests, setContests] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUpcomingContests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/contests/upcoming"
        );
        let data = response.data;

        data = data.sort((a, b) => {
          if (a.startTimeSeconds && b.startTimeSeconds) {
            return a.startTimeSeconds - b.startTimeSeconds;
          }
          const parseDate = (str) => {
            const [day, month, yearAndRest] = str.split("/");
            const [year, timeAndMeridian] = yearAndRest.split(",");
            return new Date(
              `${year.trim()}-${month}-${day} ${timeAndMeridian.trim()}`
            );
          };
          return parseDate(a.startTime) - parseDate(b.startTime);
        });

        setContests(data);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch upcoming contests";
        setError(errorMessage);
      }
    };

    fetchUpcomingContests();
  }, []);

  return (
    <div className="bg-[#f6fafd] min-h-screen py-8 px-2">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Upcoming Contests
      </h1>
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {error && <p className="text-red-500 text-center">{error}</p>}
        {contests.map((contest) => (
          <div
            key={contest.id}
            className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white rounded-2xl shadow-lg px-8 py-6"
          >
            <div className="flex-1 w-full">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {contest.name}
              </h2>
              <div className="text-gray-500">
                <div className="flex items-center gap-2 mb-1">
                  {/* Calendar Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-base">{contest.startTime}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  {/* Clock Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base">
                    Duration: {contest.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">
                    Contest Type: {contest.type}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col mt-4 md:mt-0 gap-2 md:gap-4 md:ml-8">
              <a
                href={`https://codeforces.com/contest`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
              >
                Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingContestsPage;
