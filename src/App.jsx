import React, { useState } from 'react';
import ParticipantPanel from './components/ParticipantPanel';
import ExpensePanel from './components/ExpensePanel';
import OutputPanel from './components/OutputPanel';
import './styles.css';

function App() {
  const [participants, setParticipants] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [logs, setLogs] = useState("Expenses and balances will appear here.");

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
    setLogs(prev => prev + `\nParticipant added: ${participant.name} (${participant.userId})`);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setLogs(prev => prev + `\nExpense added: ${expense.description} - $${expense.amount} paid by ${expense.paidBy}`);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Splitwise</h1>
      
      <div className="panels-container">
        <div className="panel left-panel">
          <ParticipantPanel onAddParticipant={addParticipant} participants={participants} />
        </div>
        
        <div className="panel right-panel">
          <ExpensePanel onAddExpense={addExpense} participants={participants} />
        </div>
      </div>
      
      <div className="output-section">
        <OutputPanel logs={logs} />
      </div>
    </div>
  );
}

export default App;
