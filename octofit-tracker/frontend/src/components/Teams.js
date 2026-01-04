import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams:', data);
        setTeams(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-info">Teams</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <th scope="row">{team.id || idx + 1}</th>
                <td>{team.name || '-'}</td>
                <td>{team.members ? team.members.join(', ') : JSON.stringify(team)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-3">Create Team</button>
      </div>
    </div>
  );
};

export default Teams;
