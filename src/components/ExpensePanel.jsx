import React, { useState } from 'react';

function ExpensePanel({ onAddExpense, participants }) {
  const [expenseId, setExpenseId] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [splitType, setSplitType] = useState('equal');

  const handleParticipantToggle = (participantUserId) => {
    setSelectedParticipants(prev => {
      if (prev.includes(participantUserId)) {
        return prev.filter(id => id !== participantUserId);
      } else {
        return [...prev, participantUserId];
      }
    });
  };

  const handleAddExpense = () => {
    if (expenseId.trim() && description.trim() && amount.trim() && paidBy) {
      onAddExpense({
        expenseId: expenseId.trim(),
        description: description.trim(),
        amount: amount.trim(),
        paidBy: paidBy,
        participants: selectedParticipants,
        splitType: splitType
      });
      setExpenseId('');
      setDescription('');
      setAmount('');
      setPaidBy('');
      setSelectedParticipants([]);
      setSplitType('equal');
    }
  };

  return (
    <div className="expense-panel">
      <h2 className="panel-title">Expense Management</h2>
      
      <div className="input-group">
        <label htmlFor="expenseId">Expense ID</label>
        <input
          id="expenseId"
          type="text"
          value={expenseId}
          onChange={(e) => setExpenseId(e.target.value)}
          placeholder="Enter expense ID"
          className="input-field"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          className="input-field"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="input-field"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="paidBy">Paid By</label>
        <select
          id="paidBy"
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          className="select-field"
        >
          <option value="">Select payer</option>
          {participants.map((participant) => (
            <option key={participant.userId} value={participant.userId}>
              {participant.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="input-group">
        <label>Participants</label>
        <div className="participants-checkbox-list">
          {participants.length === 0 ? (
            <p className="empty-message">No participants available</p>
          ) : (
            participants.map((participant) => (
              <div key={participant.userId} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`participant-${participant.userId}`}
                  checked={selectedParticipants.includes(participant.userId)}
                  onChange={() => handleParticipantToggle(participant.userId)}
                />
                <label htmlFor={`participant-${participant.userId}`}>
                  {participant.name}
                </label>
              </div>
            ))
          )}
        </div>
      </div>
      
      <div className="input-group">
        <label htmlFor="splitType">Split Type</label>
        <select
          id="splitType"
          value={splitType}
          onChange={(e) => setSplitType(e.target.value)}
          className="select-field"
        >
          <option value="equal">Equal Split</option>
          <option value="custom">Custom Split</option>
          <option value="percentage">Percentage Split</option>
        </select>
      </div>
      
      <button 
        onClick={handleAddExpense}
        className="add-button"
      >
        Add Expense
      </button>
    </div>
  );
}

export default ExpensePanel;
