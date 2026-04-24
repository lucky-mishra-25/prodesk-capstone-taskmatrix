import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const token = localStorage.getItem("token");

  // ===================== FETCH TASKS =====================
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setTasks(Array.isArray(data) ? data : []);
        } else {
          setTasks([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) fetchTasks();
  }, [token]);

  // ===================== ADD TASK =====================
  const addTask = async () => {
    if (!input.trim()) return;

    const res = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: input }),
    });

    const data = await res.json();

    if (res.ok) {
      setTasks((prev) => [...prev, data]);
      setInput("");
    }
  };

  // ===================== DELETE TASK =====================
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setTasks((prev) => prev.filter((t) => t._id !== id));
    }
  };

  // ===================== UPDATE TASK =====================
  const updateTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: editText }),
    });

    const data = await res.json();

    if (res.ok) {
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? data : t))
      );

      setEditId(null);
      setEditText("");
    }
  };

  // ===================== RAZORPAY =====================
  const upgradeToPro = async () => {
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
    });

    const order = await res.json();

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "TaskMatrix Pro",
      description: "Upgrade to Pro Plan",
      order_id: order.id,

      handler: function (response) {
        alert("Payment Successful 🎉");
        console.log(response);
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="dashboard">

      <h1>🚀 TaskMatrix Pro</h1>

      {/* UPGRADE BUTTON */}
      <button onClick={upgradeToPro} style={{ background: "gold" }}>
        ⭐ Upgrade to Pro
      </button>

      {/* ADD TASK */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* TASK LIST */}
      <div>
        {tasks.length > 0 ? (
          tasks.map((t) => (
            <div className="task" key={t._id}>
              {editId === t._id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => updateTask(t._id)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{t.title}</span>

                  <div>
                    <button
                      onClick={() => {
                        setEditId(t._id);
                        setEditText(t.title);
                      }}
                    >
                      Edit
                    </button>

                    <button onClick={() => deleteTask(t._id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="empty">No tasks found 🚀</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;