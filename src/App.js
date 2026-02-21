import React, { useEffect, useState } from "react";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/projects")
            .then(response => response.json())
            .then(data => {
                console.log("Data from backend:", data);
                setProjects(data);
            })
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>My Portfolio</h1>

            {projects.length === 0 ? (
                <p>No projects found</p>
            ) : (
                projects.map(project => (
                    <div
                        key={project.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "5px"
                        }}
                    >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Image:</strong> {project.imageUrl}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
