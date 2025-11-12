import React, { useContext, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ExpenseContext } from "../context/ExpenseContext";
import api from "../services/api";

export default function ExpenseTable({ expenses }) {
  const { dispatch } = useContext(ExpenseContext);
  const navigate = useNavigate();

  // ✅ State quản lý modal xác nhận
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Mở modal xác nhận
  const handleOpenConfirm = (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  // Đóng modal
  const handleCloseConfirm = () => {
    setShowConfirm(false);
    setSelectedId(null);
  };

  // Thực hiện xóa
  const handleDelete = async () => {
    await api.delete(`/expenses/${selectedId}`);
    dispatch({ type: "DELETE", payload: selectedId });
    handleCloseConfirm();
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount (₫)</th>
            <th>Category</th>
            <th>Date</th>
            <th style={{ width: "140px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{Number(e.amount).toLocaleString("vi-VN")}</td>
                <td>{e.category}</td>
                <td>{new Date(e.date).toLocaleDateString("vi-VN")}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => navigate(`/edit/${e.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleOpenConfirm(e.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* ✅ Modal Confirm Delete */}
      <Modal show={showConfirm} onHide={handleCloseConfirm} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="m-0">Confirm Delete</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you really want to delete this expense?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
