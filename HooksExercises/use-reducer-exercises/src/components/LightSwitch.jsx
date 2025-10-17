import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";

// Hàm reducer để xử lý các hành động (actions)
function lightReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { isLightOn: !state.isLightOn }; // Đảo trạng thái hiện tại
    default:
      return state;
  }
}

function LightSwitch() {
  // Khởi tạo reducer: state ban đầu là { isLightOn: false }
  const [state, dispatch] = useReducer(lightReducer, { isLightOn: false });

  // Style chung cho button
  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Công Tắc Đèn</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Đèn hiện đang: {state.isLightOn ? "Bật" : "Tắt"}
      </p>
      <Button
        onClick={() => dispatch({ type: "TOGGLE" })}
        style={{
          ...buttonStyle,
          background: state.isLightOn ? "red" : "green",
          color: "white",
        }}
      >
        {state.isLightOn ? "Tắt Đèn" : "Bật Đèn"}
      </Button>
    </div>
  );
}

export default LightSwitch;
