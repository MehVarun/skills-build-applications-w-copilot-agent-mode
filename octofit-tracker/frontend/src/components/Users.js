import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Users API endpoint:', endpoint);
        console.log('Fetched users:', data);
        setUsers(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-warning">Users</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <th scope="row">{user.id || idx + 1}</th>
                <td>{user.name || '-'}</td>
                <td>{user.email || JSON.stringify(user)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-warning mt-3">Invite User</button>
      </div>
    </div>
  );
};

export default Users;
