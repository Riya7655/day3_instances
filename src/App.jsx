function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>🚀 DevOps Demo</h1>

        <p style={styles.subtitle}>
          My first React application deployed on AWS EC2
        </p>

        <div style={styles.status}>
          🟢 Application is Running
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>⚛️ Application</h3>
            <p>React</p>
          </div>

          <div style={styles.card}>
            <h3>☁️ Cloud</h3>
            <p>AWS</p>
          </div>

          <div style={styles.card}>
            <h3>🖥️ Server</h3>
            <p>EC2 Instance</p>
          </div>

          <div style={styles.card}>
            <h3>🌐 Web Server</h3>
            <p>Nginx</p>
          </div>
        </div>

        <div style={styles.info}>
          <h2>Hello from EC2! 🎉</h2>
          <p>
            If you can see this page, your React application
            has been successfully deployed.
          </p>
        </div>

        <p style={styles.footer}>
          Learning DevOps • AWS • React • Linux
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#b3d2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  container: {
    maxWidth: "900px",
    width: "100%",
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  subtitle: {
    color: "#060606",
    marginBottom: "25px",
  },

  status: {
    background: "#5d6be6",
    color: "#090307",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "30px",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  card: {
    background: "#0b090a",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #f8ecec",
  },

  info: {
    marginTop: "30px",
    padding: "25px",
    background: "#4e7bce",
    borderRadius: "10px",
  },

  footer: {
    marginTop: "30px",
    color: "#0f0808",
    fontSize: "14px",
  },
};

export default App;