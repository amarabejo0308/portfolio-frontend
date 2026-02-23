import React, { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [projects, setProjects] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div style={{
            fontFamily: "'Inter', sans-serif",
            backgroundColor: darkMode ? "#111827" : "#f5f7fa",
            color: darkMode ? "#f9fafb" : "#111",
            minHeight: "100vh",
            padding: "60px 20px",
            animation: "fadeIn 1s ease-in",
            transition: "all 0.3s ease",
        }}>
            <Header />
            <main style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <div style={{ textAlign: "right", marginBottom: "20px" }}>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        style={{
                            padding: "8px 14px",
                            borderRadius: "20px",
                            border: "none",
                            cursor: "pointer",
                            backgroundColor: darkMode ? "#f9fafb" : "#111827",
                            color: darkMode ? "#111827" : "#f9fafb",
                            fontWeight: "600",
                        }}
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>


                {/* Name Section */}
                <div style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1
                        style={{
                            marginBottom: "15px",
                            fontSize: "42px",
                            fontWeight: "700",
                            color: "#111",
                        }}
                    >
                        Miguel Arabejo
                    </h1>

                    <p
                        style={{
                            color: "#6b7280",
                            fontSize: "18px",
                        }}
                    >
                        Full Stack Developer | Spring Boot | React
                    </p>
                </div>

                {/* About Section */}
                <div
                    style={{
                        maxWidth: "800px",
                        margin: "0 auto 60px auto",
                        backgroundColor: darkMode ? "#1f2937" : "white",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: darkMode
                            ? "0 8px 20px rgba(0,0,0,0.4)"
                            : "0 8px 20px rgba(0,0,0,0.05)",
                    }}
                >
                    <h2
                        style={{
                            marginBottom: "15px",
                            fontSize: "24px",
                            fontWeight: "600",
                            color: "#111",
                        }}
                    >
                        About Me
                    </h2>

                    <p
                        style={{
                            color: darkMode ? "#d1d5db" : "#6b7280",
                            lineHeight: "1.7",
                            fontSize: "15px",
                        }}
                    >
                        I am a passionate Full Stack Developer specializing in building modern web
                        applications using React and Spring Boot. I enjoy solving real-world
                        problems and continuously improving my skills in backend and frontend
                        development.
                    </p>

                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                        }}
                    >
                        {["React", "Spring Boot", "Java", "MySQL", "REST API"].map((tech) => (
                            <span
                                key={tech}
                                style={{
                                    backgroundColor: "#e5e7eb",
                                    padding: "6px 12px",
                                    borderRadius: "20px",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                }}
                            >
                    {tech}
                </span>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "30px",
                    }}
                >
                    {projects.length === 0 ? (
                        <p>No projects found</p>
                    ) : (
                        projects.map((project) => (
                            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
                        ))
                    )}
                </div>

            </main>

            <Footer />
        </div>
    );
}

export default App;
