import React from "react";
import "./GateSessionCard.css";

function GateSessionCard({
  name,
  handle,
  degree,
  avatarUrl,
  sessionDuration,
  sessionTitle,
  sessionDescription,
  seatsBooked,
  startDate,
  isUpcoming,
  isFree,
  backgroundImageUrl,
}) {
  return (
    <div className="card">
      <div className="header">
        <div className="header-info">
          <img src={avatarUrl} alt={name} className="avatar" />
          <div className="user-info">
            <h2>{name}</h2>
            <p className="handle">{handle}</p>
            <p className="degree">{degree}</p>
          </div>
        </div>

        <span className="follow-btn">Follow</span>
      </div>
      <div className="content">
        <p>
          <span className="session-header">{sessionDuration} session - </span>
          {sessionDescription}
        </p>
      </div>
      <div
        className="session-info"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="seats-details">
          <div className="seats">
            <span className="icon">👁️</span> {seatsBooked} seats booked
          </div>
          <span className="upcoming">Upcoming</span>
        </div>
        <div className="date-details">
          <div className="date">Starts on: {startDate}</div>
        </div>
      </div>
      <div className="actions">
        <button className="free-btn">FREE</button>

        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}

export default GateSessionCard;
