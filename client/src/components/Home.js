import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div style={{
            backgroundImage: "url(/ReadingCoverImage.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundOrigin: "center",
            height: "100vh",
            textAlign: "center"
            }}>
            <div style={{
                height: "min(800px, 100vh)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1 className="display-1 text-light py-5">Home page</h1>
                <Link to={"/books"} className="btn btn-dark btn-lg my-5">Start Reading!</Link>
            </div>
            {/* <img src="ReadingCoverImage.jpg" alt="large open book"></img> */}
        </div>
    );
}

export default Home;