// ✅ FilterBar.jsx
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useMovieState, useMovieDispatch } from "../contexts/MovieContext";

const FilterBar = () => {
  const { genres } = useMovieState();
  const { dispatch } = useMovieDispatch();
  const [filter, setFilter] = useState({ search: "", genreId: "", sort: "", duration: "" });

  const handleChange = (e) => {
    const newFilter = { ...filter, [e.target.name]: e.target.value };
    setFilter(newFilter);
    dispatch({ type: "FILTER_MOVIES", payload: newFilter });
  };

  const handleReset = () => {
    setFilter({ search: "", genreId: "", sort: "", duration: "" });
    dispatch({ type: "RESET_FILTER" });
  };

  const handleSearchClick = () => {
    dispatch({ type: "FILTER_MOVIES", payload: filter });
  };

  return (
    <Form className="mt-3">
      <Row className="align-items-end g-3">
        <Col md={3}>
          <Form.Label>Tìm kiếm phim</Form.Label>
          <Form.Control
            name="search"
            placeholder="Nhập tên phim..."
            value={filter.search}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Thể loại</Form.Label>
          <Form.Select name="genreId" value={filter.genreId} onChange={handleChange}>
            <option value="">Tất cả</option>
            {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Thời lượng</Form.Label>
          <Form.Select name="duration" value={filter.duration} onChange={handleChange}>
            <option value="">Tất cả</option>
            <option value="short">Dưới 100 phút</option>
            <option value="medium">100–120 phút</option>
            <option value="long">Trên 120 phút</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Sắp xếp</Form.Label>
          <Form.Select name="sort" value={filter.sort} onChange={handleChange}>
            <option value="">Không sắp xếp</option>
            <option value="asc">Tên phim A → Z</option>
            <option value="desc">Tên phim Z → A</option>
          </Form.Select>
        </Col>
      </Row>

      <div className="mt-3 d-flex justify-content-end gap-2">
        <Button variant="primary" onClick={handleSearchClick}>🔍 Tìm kiếm</Button>
        <Button variant="secondary" onClick={handleReset}>🔄 Reset</Button>
      </div>
    </Form>
  );
};

export default FilterBar;
