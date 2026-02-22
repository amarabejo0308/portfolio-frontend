import React, { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            <Header />

            <main
                style={{
                    padding: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                }}
            >
                {projects.length === 0 ? (
                    <p>No projects found</p>
                ) : (
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                )}
            </main>

            <Footer />
        </div>
    );
}

export default App;
