import { useState } from "react";

export function Shop() {
  let [item, setItem] = useState([]);
  const [product, setProduct] = useState({ name: "", quantity: "" });

  function setproduct() {
    if (product.name && product.quantity) {
      setItem([...item, product]);
      setProduct({ name: "", quantity: "" });
    }
  }
  function deleteItem(index) {
    let newItem = item.filter((v, idx) => idx !== index);
    setItem(newItem);
  }
  function clearAll() {
    setItem([]);
  }

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "450px",
        flexDirection: "column",
        marginTop: "80px",
        background: "#ffffff",
        padding: "25px",
        borderRadius: "18px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#0077ff", marginBottom: "15px" }}>Shopping List</h1>
      </div>

      <div style={{ margin: "auto", marginTop: "15px" }}>
        <input
          style={{
            padding: "12px",
            borderRadius: "12px",
            marginTop: "15px",
            width: "100%",
            fontSize: "16px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          type="text"
          placeholder="Enter Item Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <br />
        <input
          style={{
            padding: "12px",
            borderRadius: "12px",
            marginTop: "15px",
            width: "100%",
            fontSize: "16px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          type="number"
          placeholder="Enter Quantity"
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
        <br />
        <button
          style={{
            padding: "12px",
            marginTop: "20px",
            width: "100%",
            fontSize: "16px",
            borderRadius: "12px",
            background: "#0077ff",
            border: "0px",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={setproduct}
          onMouseOver={(e) => (e.target.style.background = "#005fcc")}
          onMouseOut={(e) => (e.target.style.background = "#0077ff")}
        >
          Add Item
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <ol
          style={{
            textAlign: "left",
            fontSize: "18px",
            fontWeight: "500",
            color: "#333",
            paddingLeft: "20px",
          }}
        >
          {item.map((it, index) => (
            <li
              style={{
                margin: "12px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f9f9f9",
                padding: "10px 15px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              }}
              key={index}
            >
              <span>
                <strong>{it.name}</strong> - Qty: {it.quantity}
              </span>
              <button
                onClick={() => deleteItem(index)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  background: "#ff4d4f",
                  color: "white",
                  border: "0px",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#d9363e")}
                onMouseOut={(e) => (e.target.style.background = "#ff4d4f")}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>

        {item.length > 0 && (
          <button
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              borderRadius: "12px",
              background: "#ffa500",
              color: "white",
              border: "0px",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={clearAll}
            onMouseOver={(e) => (e.target.style.background = "#cc8400")}
            onMouseOut={(e) => (e.target.style.background = "#ffa500")}
          >
          Clear All
          </button>
        )}
      </div>
    </div>
  );
}
