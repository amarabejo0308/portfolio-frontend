import React from "react";

function ProjectCard({ project }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "4px 4px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";
            }}
        >
            <h2 style={{ marginBottom: "10px", color: "#333" }}>{project.title}</h2>
            <p style={{ marginBottom: "10px", color: "#555" }}>{project.description}</p>

            {/* Image */}
            {project.imageUrl && (
                <img
                    src={project.imageUrl = "/images/portfolio.png"} // just use it, no assignment
                    alt={project.title}
                    style={{
                        maxWidth: "100%",
                        borderRadius: "5px",
                        objectFit: "cover",
                        marginBottom: "10px",
                    }}
                />
            )}

            {/* Buttons */}
            <div>
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "6px 12px",
                            backgroundColor: "#24292e",
                            color: "white",
                            borderRadius: "5px",
                            textDecoration: "none",
                            marginRight: "5px",
                        }}
                    >
                        GitHub
                    </a>
                )}

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "6px 12px",
                            backgroundColor: "#0070f3",
                            color: "white",
                            borderRadius: "5px",
                            textDecoration: "none",
                        }}
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
