import React from "react";

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#282c34",
                color: "white",
                textAlign: "center",
                padding: "10px 0",
                marginTop: "50px",
            }}
        >
            &copy; {new Date().getFullYear()} Miguel Arabejo
        </footer>
    );
}

export default Footer;
