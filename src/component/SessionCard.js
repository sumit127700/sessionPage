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
  amount,
  toggleAlert,
}) {
  const hasStarted = () => {
    const now = new Date();
    const [day, month, time] = startDate.split(" ");
    const [hours, minutes] = time.split(":");
    const monthIndex = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ].indexOf(month);

    const sessionStart = new Date(
      now.getFullYear(),
      monthIndex,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes)
    );

    return now > sessionStart;
  };

  const dateText = hasStarted() ? "Started at" : "Starts on";
  const upcomingText = hasStarted() ? "Live" : "Upcoming";
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

        {/**<span className="follow-btn">Follow</span> */}
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
          <span className="upcoming">{upcomingText}</span>
        </div>
        <div className="date-details">
          <div className="date">
            {dateText}: {startDate}
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="free-btn" onClick={toggleAlert}>
          {amount === "0" ? "FREE" : "Pay and Join"}
        </button>

        <button className="register-btn" onClick={toggleAlert}>
          Register
        </button>
      </div>
    </div>
  );
}

export default GateSessionCard;
