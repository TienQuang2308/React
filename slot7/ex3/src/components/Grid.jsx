export default function Grid() {
  const colStyle = {
    backgroundColor: "#d3d3d3", // màu xám
    border: "1px solid #999",   // viền
    height: "80px",             // chiều cao
    display: "flex",
    justifyContent: "left",
    alignItems: "center"
  };

  return (
    <div className="container text-center mt-4">
      {/* Row 1: 2 col */}
      <div className="row">
        <div className="col-6" style={colStyle}>
          First col
        </div>
        <div className="col-6" style={colStyle}>
          Second col
        </div>
      </div>

      {/* Row 2: 3 col */}
      <div className="row">
        <div className="col-4" style={colStyle}>
          col
        </div>
        <div className="col-4" style={colStyle}>
          col
        </div>
        <div className="col-4" style={colStyle}>
          col
        </div>
      </div>

      {/* Row 3: 4 col */}
      <div className="row">
        <div className="col-3" style={colStyle}>
          col
        </div>
        <div className="col-3" style={colStyle}>
          col
        </div>
        <div className="col-3" style={colStyle}>
          col
        </div>
        <div className="col-3" style={colStyle}>
          col
        </div>
      </div>
    </div>
  );
}
