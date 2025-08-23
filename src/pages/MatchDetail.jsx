import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

const MatchDetail = () => {
  const location = useLocation();
  const tournament = location.state; // tournament object sent from TournamentCard
  const [formData, setFormData] = useState({
    tournament_id: tournament?._id || "",
    game_id: "",
    username: "",
    transaction_id: "",
    // payment_status: "pending",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://gali-game.onrender.com/api/user/join",
        formData
      );
      console.log(res.data);
      toast.success("Bhai tuu register ho gayaa 🎉");
    } catch (error) {
      console.error("Form submit nhee huyaa yaar", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
          <h4 className="text-center text-xl font-semibold mb-6">
            Register for Tournament
          </h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Tournament ID */}
            <div>
              <input
                type="hidden"
                name="tournament_id"
                value={formData.tournament_id}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* In-game ID */}
            <div>
              <label className="block text-gray-700 mb-1">In-game ID</label>
              <input
                type="text"
                name="game_id"
                placeholder="Enter In-game ID"
                value={formData.game_id}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* UPI Transaction ID */}
            <div>
              <label className="block text-gray-700 mb-1">
                UPI Transaction ID
              </label>
              <input
                type="text"
                name="transaction_id"
                placeholder="Enter UPI Transaction ID"
                value={formData.transaction_id}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Payment Status */}
            {/* <div>
              <label className="block text-gray-700 mb-1">Payment Status</label>
              <select
                name="payment_status"
                value={formData.payment_status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Pending">Pending</option>
                <option value="Success">Success</option>
              </select>
            </div> */}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MatchDetail;

{
  /* <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-6">
          <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
            Match Details
          </h1>

          <div className="space-y-4">
            <p>
              <span className="font-semibold text-indigo-300">
                Tournament ID:
              </span>
              <span className="ml-2">{match.tournamentId}</span>
            </p>
            <p>
              <span className="font-semibold text-indigo-300">
                Player In-game ID:
              </span>
              <span className="ml-2">{match.playerIngameId}</span>
            </p>
            <p>
              <span className="font-semibold text-indigo-300">
                Transaction ID:
              </span>
              <span className="ml-2">{match.transactionId}</span>
            </p>
            <p>
              <span className="font-semibold text-indigo-300">
                Payment Status:
              </span>
              <span
                className={`ml-2 ${
                  match.paymentStatus === "Success"
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >
                {match.paymentStatus}
              </span>
            </p>

            <div>
              <span className="font-semibold text-indigo-300">Screenshot:</span>
              <img
                src={match.screenshot}
                alt="Match Screenshot"
                className="w-full h-64 object-cover rounded-xl mt-3 border border-gray-700"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition"
            >
              See Room Details
            </button>
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 rounded-2xl p-6 w-96 shadow-lg">
              <h2 className="text-xl font-bold text-indigo-400 mb-4 text-center">
                Room Details
              </h2>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">
                  Tournament:
                </span>
                <span className="ml-2">{match.tournamentName}</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold text-indigo-300">Room ID:</span>
                <span className="ml-2">{match.roomId}</span>
              </p>
              <p className="mb-4">
                <span className="font-semibold text-indigo-300">
                  Room Password:
                </span>
                <span className="ml-2">{match.roomPassword}</span>
              </p>
              <div className="text-center">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */
}
