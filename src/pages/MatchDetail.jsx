import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MatchDetail = () => {
  const match = {
    tournamentId: "VAL-2025-01",
    playerIngameId: "ProGamer_007",
    transactionId: "TXN-ABC123456",
    screenshot: "/images/sample-screenshot.jpg",
    paymentStatus: "Success",
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-8">
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
      </div>
      <Footer />
    </>
  );
};

export default MatchDetail;
