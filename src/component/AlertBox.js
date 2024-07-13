import "./AlertBox.css";
export default function AlertBox({ message, onClose, success }) {
  return (
    <div className="alert-overlay">
      <div className="alert-modal">
        <p className={success}>{message}</p>
        <button className="alert-modal-button" onClick={onClose}>
          Visit the App
        </button>
      </div>
    </div>
  );
}
