import React, { useState } from "react";
import { IEvent } from "../../types";
import "./index.scss";

interface BetModalProps {
  event: IEvent;
  onClose: () => void;
}

const BetModal: React.FC<BetModalProps> = ({ event, onClose }) => {
  const [betAmount, setBetAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(
      `Bet of $${betAmount} placed successfully on "${event.event_name}"!`
    );
    setBetAmount("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Place Bet on {event.event_name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Bet Amount</label>
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit Bet
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        <button onClick={onClose} className="btn-danger">
          Close
        </button>
      </div>
    </div>
  );
};

export default BetModal;
