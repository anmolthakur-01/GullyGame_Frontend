import React from "react";
import { useNavigate } from "react-router-dom";

const TournamentCard = ({ tournament }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "bg-green-500";
      case "Upcoming":
        return "bg-yellow-500";
      case "Closed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/match-detail/${tournament._id}`);
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={"https://www.cdmi.in/courses@2x/2D3D-Game-Design.webp"}
        alt={tournament.game_name}
        className="w-full h-48 object-cover"
        onClick={handleNavigate}
      />

      <div className="p-4 relative">
        <span
          className={`absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 text-xs font-bold text-white rounded-full ${getStatusColor(
            tournament.status
          )}`}
        >
          {tournament.status}
        </span>

        <h3 className="text-xl font-bold text-white mb-2">{tournament.tournament_id}</h3>

        <div className="space-y-2 text-gray-400 text-sm">
          <div className="flex items-center">
            <span className="font-semibold text-gray-200 w-21">
              Match Type:
            </span>
            <span className="font-bold">{tournament.match_type}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-200 w-24">Entry Fee:</span>
            <span>{tournament.entry_fee}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-200 w-24">
              Prize Pool:
            </span>
            <span className="text-yellow-400 font-bold">
              {tournament.prize}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-200 w-24">
              Match Time:
            </span>
            <span>{tournament.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
