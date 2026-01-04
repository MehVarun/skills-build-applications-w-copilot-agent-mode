import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaders(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-success">Leaderboard</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={leader.id || idx}>
                <th scope="row">{leader.id || idx + 1}</th>
                <td>{leader.name || '-'}</td>
                <td>{leader.score || JSON.stringify(leader)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3">Refresh Leaderboard</button>
      </div>
    </div>
  );
};

export default Leaderboard;
