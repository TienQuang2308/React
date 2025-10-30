// ✅ MovieTable.jsx
import React from "react";
import { Table, Button, Image, Modal, Alert, Spinner } from "react-bootstrap";
import { useMovieState, useMovieDispatch } from "../contexts/MovieContext";

const MovieTable = () => {
  const state = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch();
  const { filteredMovies, movies, genres, loading, movieToDelete, showDeleteModal } = state;

  const displayMovies = filteredMovies.length > 0 ? filteredMovies : movies;

  const genreMap = genres.reduce((map, g) => {
    map[g.id] = g.name;
    return map;
  }, {});

  const handleEditClick = (movie) => dispatch({ type: "OPEN_EDIT_MODAL", payload: movie });
  const handleDeleteClick = (movie) => dispatch({ type: "OPEN_DELETE_MODAL", payload: movie });

  return (
    <>
      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <Alert variant="info" className="mt-3">Đang tải dữ liệu phim...</Alert>
        </div>
      ) : (
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>Poster</th>
              <th>ID</th>
              <th>Tên Phim</th>
              <th>Thể Loại</th>
              <th>Thời lượng</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {displayMovies.map(movie => (
              <tr key={movie.id}>
                <td>
                  <Image src={movie.poster} alt={movie.title} style={{ width: 60, height: 60, objectFit: "cover" }} rounded />
                </td>
                <td>#{movie.id}</td>
                <td><b>{movie.title}</b> <br /><small className="text-muted">{movie.year}</small></td>
                <td>{genreMap[movie.genreId]}</td>
                <td>{movie.duration} phút</td>
                <td>
                  <Button variant="primary" size="sm" onClick={() => handleEditClick(movie)} className="me-2">Sửa</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDeleteClick(movie)}>Xóa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal Xác Nhận Xóa */}
      <Modal show={showDeleteModal} onHide={() => dispatch({ type: "CLOSE_DELETE_MODAL" })}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận Xóa Phim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc muốn xóa <b>{movieToDelete?.title}</b> không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: "CLOSE_DELETE_MODAL" })}>Hủy</Button>
          <Button variant="danger" onClick={() => confirmDelete(movieToDelete.id)}>Xóa</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;
