import React, { useState } from "react";
import axios from "axios";
import BarChartGraph from "./BarChartGraph";
import RatingGraph from "./RatingGraph";
import ProblemTagsPieChart from "./ProblemTagsPieChart"; // Using the Pie Chart

function CodeforcesDashboard() {
  const [handle, setHandle] = useState("");
  const [info, setInfo] = useState(null);
  const [problemGraph, setProblemGraph] = useState(null);
  const [ratinggraph, setRatingGraph] = useState(null);
  const [tagsCount, setTagsCount] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/${handle}`);
      const { info, problemgraph, ratinggraph, tagscount } = response.data;
      setInfo(info);
      setProblemGraph(problemgraph);
      setRatingGraph(ratinggraph);
      setTagsCount(tagscount);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const getRankColor = (rank) => {
    if (rank < 1200) return "grey";
    if (rank < 1400) return "green";
    if (rank < 1600) return "cyan";
    if (rank < 1900) return "blue";
    if (rank < 2100) return "violet";
    if (rank >= 2100 && rank <= 2399) return "orange";
    if (rank >= 2400 && rank <= 3999) return "red";
    return "black";
  };

  // Prepare data for the RatingGraph
  const ratingDataArray = ratinggraph
    ? Object.entries(ratinggraph).map(([time, newRating]) => ({
        ratingUpdateTimeSeconds: Number(time),
        newRating,
      }))
    : [];

  // Prepare and slice data for the Pie Chart
  const tagsDataForPie = tagsCount
    ? (() => {
        const sortedTags = Object.entries(tagsCount)
          .map(([tag, count]) => ({ tag, count }))
          .sort((a, b) => b.count - a.count);

        const MAX_SLICES = 15;
        if (sortedTags.length <= MAX_SLICES) {
          return sortedTags;
        }

        const topTags = sortedTags.slice(0, MAX_SLICES - 1);
        const otherTags = sortedTags.slice(MAX_SLICES - 1);
        const otherCount = otherTags.reduce((sum, item) => sum + item.count, 0);

        return [
          ...topTags,
          { tag: 'Other', count: otherCount },
        ];
      })()
    : [];

  // Calculate total problems solved for the stats card
  const totalProblemsSolved = problemGraph
    ? Object.values(problemGraph).reduce((sum, count) => sum + count, 0)
    : 0;

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">Codeforces Dashboard</h1>

      <div className="flex space-x-2 mb-6">
        <label className="input bg-white">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Enter Codeforces handle"
            className="bg-white text-black"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </label>
        <button onClick={fetchUserData} className="btn btn-primary">
          Fetch Info
        </button>
      </div>

      {info && (
        <div className="w-full max-w-4xl">
          {/* Profile Section */}
          <div className="card bg-white shadow-xl mb-6 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img
                    src={info.titlePhoto || "https://via.placeholder.com/80"}
                    alt="Profile"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {info.firstName} {info.lastName || ""}
                </h2>
                <p className="text-gray-600">{info.country || "Unknown"}</p>
                <p className="text-sm text-gray-500">
                  Current Rank:{" "}
                  <span style={{ color: getRankColor(info.rating) }}>
                    {info.rank || "N/A"}
                  </span>{" "}
                  | Max Rank:{" "}
                  <span style={{ color: getRankColor(info.maxRating) }}>
                    {info.maxRank || "N/A"}
                  </span>
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card bg-white border border-gray-200 shadow-sm p-4">
                <div className="text-2xl font-bold">{info.rating || "N/A"}</div>
                <div className="text-sm text-gray-600">Current Rating</div>
              </div>
              <div className="card bg-white border border-gray-200 shadow-sm p-4">
                <div className="text-2xl font-bold">{info.maxRating || "N/A"}</div>
                <div className="text-sm text-gray-600">Max Rating</div>
              </div>
              <div className="card bg-white border border-gray-200 shadow-sm p-4">
                <div className="text-2xl font-bold">{totalProblemsSolved}</div>
                <div className="text-sm text-gray-600">Problems Solved</div>
              </div>
              <div className="card bg-white border border-ray-200 shadow-sm p-4">
                <div className="text-2xl font-bold">
                  {Object.keys(ratinggraph || {}).length}
                </div>
                <div className="text-sm text-gray-600">Contests Attended</div>
              </div>
            </div>
          </div>

          {/* Rating Graph Section */}
          {ratingDataArray.length > 0 && (
            <div className="card bg-white shadow-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Rating Over Time</h3>
              <RatingGraph data={ratingDataArray} />
            </div>
          )}

          {/* Problem Graph Section */}
          {problemGraph && (
            <div className="card bg-white shadow-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Problems Solved by Rating</h3>
              <BarChartGraph problemGraph={problemGraph} />
            </div>
          )}

          {/* Pie Chart Section for Problem Tags */}
          {tagsDataForPie.length > 0 && (
            <div className="card bg-white shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4">Problems Solved by Tag</h3>
              <ProblemTagsPieChart data={tagsDataForPie} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CodeforcesDashboard;