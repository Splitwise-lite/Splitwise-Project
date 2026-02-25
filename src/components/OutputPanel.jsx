import React from 'react';

function OutputPanel({ logs }) {
  return (
    <div className="output-panel">
      <h2 className="panel-title">Output Log</h2>
      <div className="output-content">
        {logs}
      </div>
    </div>
  );
}

export default OutputPanel;
