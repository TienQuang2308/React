import React, { useEffect, useState } from "react";
import { getUsers, updateUser } from "../services/api";
import UserFilter from "../components/UserFilter";
import UserTable from "../components/UserTable";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    status: "",
    sort: "username_asc",
  });

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Filter + Sort (đã thêm fallback tránh undefined)
  const filteredUsers = users
    .filter((u) => {
      const username = u.username || "";
      const fullname = u.fullName || "";

      if (!filters.search) return true;

      return (
        username.toLowerCase().includes(filters.search.toLowerCase()) ||
        fullname.toLowerCase().includes(filters.search.toLowerCase())
      );
    })
    .filter((u) => (filters.role ? u.role === filters.role : true))
    .filter((u) => (filters.status ? u.status === filters.status : true))
    .sort((a, b) => {
      const usernameA = a.username || "";
      const usernameB = b.username || "";
      const fullA = a.fullName || "";
      const fullB = b.fullName || "";

      switch (filters.sort) {
        case "username_asc":
          return usernameA.localeCompare(usernameB);

        case "username_desc":
          return usernameB.localeCompare(usernameA);

        case "fullname_asc":
          return fullA.localeCompare(fullB);

        case "fullname_desc":
          return fullB.localeCompare(fullA);

        default:
          return 0;
      }
    });

  return (
    <div className="p-3">
      <h3 className="mb-3">User Management</h3>

      <UserFilter filters={filters} setFilters={setFilters} />

      <UserTable users={filteredUsers} refresh={fetchUsers} />
    </div>
  );
};

export default UserList;
