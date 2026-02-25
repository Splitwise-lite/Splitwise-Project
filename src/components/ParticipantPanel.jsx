import React, { useState } from 'react';

function ParticipantPanel({ onAddParticipant, participants }) {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');

  const handleAddParticipant = () => {
    if (userId.trim() && name.trim()) {
      onAddParticipant({
        userId: userId.trim(),
        name: name.trim()
      });
      setUserId('');
      setName('');
    }
  };

  return (
    <div className="participant-panel">
      <h2 className="panel-title">Participant Management</h2>
      
      <div className="input-group">
        <label htmlFor="userId">User ID</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
          className="input-field"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="input-field"
        />
      </div>
      
      <button 
        onClick={handleAddParticipant}
        className="add-button"
      >
        Add Participant
      </button>
      
      <div className="participants-list">
        <h3 className="list-title">Participants</h3>
        <div className="list-content">
          {participants.length === 0 ? (
            <p className="empty-message">No participants added yet</p>
          ) : (
            participants.map((participant, index) => (
              <div key={index} className="list-item">
                <span className="participant-name">{participant.name}</span>
                <span className="participant-id">({participant.userId})</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ParticipantPanel;
