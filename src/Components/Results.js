import React, { useState } from "react";

function Results({ results }) {
  const [showMinimizedTable, setShowMinimizedTable] = useState(false);

  if (!results) return null;

  const { tokens, originalDFA, minimizedDFA } = results;

  const renderTable = (dfa) => (
    <table className="w-full table-auto border-collapse border mt-8 border-gray-300">
      <thead>
        <tr>
          <th className="px-4 py-2 border border-gray-300 text-left bg-gray-100">State</th>
          <th className="px-4 py-2 border border-gray-300 text-left bg-gray-100">Input</th>
          <th className="px-4 py-2 border border-gray-300 text-left bg-gray-100">Next State</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(dfa.transitions).map(([state, transitions], index) =>
          Object.entries(transitions).map(([input, nextState], subIndex) => (
            <tr key={`${index}-${subIndex}`} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{state}</td>
              <td className="px-4 py-2 border border-gray-300">{input}</td>
              <td className="px-4 py-2 border border-gray-300">{nextState}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Tokenized Output</h3>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 text-left bg-gray-100">Type</th>
            <th className="px-4 py-2 border border-gray-300 text-left bg-gray-100">Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{token.type}</td>
              <td className="px-4 py-2 border border-gray-300">{token.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Constructed DFA</h3>
      {renderTable(originalDFA)}

      <h3 className="text-2xl font-semibold mt-8 mb-4">Minimized DFA</h3>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowMinimizedTable(!showMinimizedTable)}
      >
        {showMinimizedTable ? "Hide Minimized DFA" : "Show Minimized DFA"}
      </button>

      {showMinimizedTable && renderTable(minimizedDFA)}
    </div>
  );
}

export default Results;