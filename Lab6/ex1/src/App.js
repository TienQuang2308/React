// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, toggleAdmin } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleToggle = (id) => {
    dispatch(toggleAdmin(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Users List</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {list.map(user => (
          <li key={user.id}>
            {user.name} - {user.isAdmin ? 'Admin' : 'User'}
            <button style={{ marginLeft: '10px' }} onClick={() => handleToggle(user.id)}>
              Toggle Admin
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
