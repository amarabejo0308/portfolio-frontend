import React from "react";

function ProjectCard({ project, darkMode }) {
    return (
        <div
            style={{
                backgroundColor: darkMode ? "#1f2937" : "white",
                color: darkMode ? "#f9fafb" : "#111",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
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
            <h2
                style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111",
                }}
            >
                {project.title}
            </h2>

            <p
                style={{
                    marginBottom: "15px",
                    color: "#6b7280",
                    fontSize: "14px",
                    lineHeight: "1.6",
                }}
            >
                {project.description}
            </p>


            {/* Image */}
            {project.imageUrl && (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{
                        width: "100%",
                        height: "180px",
                        borderRadius: "6px",
                        objectFit: "cover",
                        marginBottom: "15px",
                    }}
                />
            )}


            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
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
