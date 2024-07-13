import React from "react";
import { useParams, useLocation } from "react-router-dom";
import GateSessionCard from "./SessionCard"; // Assuming this component is in the same directory
import AlertBox from "./AlertBox";

function SessionList() {
  const [sessions, setSessions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [isAlert, setAlert] = React.useState(false);
  const openAppStore = () => {
    const playStoreUrl =
      "https://play.google.com/store/search?q=guideus&c=apps&hl=en";
    const appStoreUrl = "https://apps.apple.com/in/app/guideus/id6475980275";

    // Check if the user is on Android
    if (/Android/i.test(navigator.userAgent)) {
      window.location.href = playStoreUrl;
    }
    // Check if the user is on iOS
    else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = appStoreUrl;
    }
    // For all other cases (including desktop), open Play Store in a new tab
    else {
      window.open(playStoreUrl, "_blank");
    }
  };
  const visitApp = () => {
    setAlert((prevData) => !prevData);
    openAppStore();
  };
  const toggleAlert = () => {
    setAlert((prevData) => !prevData);
  };
  React.useEffect(() => {
    fetch(
      "https://us-central1-flutter-edu-74f0b.cloudfunctions.net/getLiveSessions",
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSessions(data.sessions);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // Get the session ID from the URL parameter
  const { sessionId } = useParams();

  // Use the useLocation hook to get the current URL
  const location = useLocation();

  React.useEffect(() => {
    if (sessionId) {
      // Find the session with the matching ID
      const prioritySession = sessions.find(
        (session) => session.id === sessionId
      );
      if (prioritySession) {
        // Remove the prioritySession from its current position
        const filteredSessions = sessions.filter(
          (session) => session.id !== sessionId
        );
        // Add the prioritySession to the beginning of the array
        setSessions([prioritySession, ...filteredSessions]);
      }
    }
  }, [sessionId, location.pathname, sessions]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="AppList">
      {sessions.map((session) => (
        <GateSessionCard
          key={session.id}
          name={session.displayName}
          handle={`@${session.profession}`}
          degree={session.degree}
          avatarUrl={session.profilePictureUrl}
          sessionDuration={`${session.duration} min`}
          sessionTitle={session.topic}
          sessionDescription={session.topic} // Using topic as description since there's no separate description field
          seatsBooked={session.attendees.length}
          startDate={session.startTime}
          backgroundImageUrl={session.imageURL}
          amount={session.amount}
          toggleAlert={toggleAlert}
        />
      ))}
      {isAlert && (
        <AlertBox
          message="To continue download the app"
          success="success"
          onClose={visitApp}
        />
      )}
    </div>
  );
}

export default SessionList;
