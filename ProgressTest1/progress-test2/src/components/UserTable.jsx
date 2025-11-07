import React from "react";
import { Table, Button } from "react-bootstrap";
import { updateUser } from "../services/api";

const UserTable = ({ users, refresh }) => {

  const banAccount = async (id) => {
    if (!window.confirm("Khóa tài khoản này?")) return;

    await updateUser(id, { status: "blocked" });
    refresh();
  };

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Full Name</th>
          <th>Role</th>
          <th>Status</th>
          <th width="200">Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.username}</td>
            <td>{u.fullName}</td>
            <td>{u.role}</td>
            <td>{u.status}</td>
            <td>
              <div className="d-flex gap-2">
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => alert(JSON.stringify(u, null, 2))}
                >
                  View Details
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => banAccount(u.id)}
                >
                  Ban Account
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
