import React from "react";
import { Link } from "react-router-dom";

function Home(params) {
    return (
        <div style={{
            backgroundImage: "url(/ReadingCoverImage.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundOrigin: "center",
            height: "100vh",
            textAlign: "center"
            }}>
            <div>
                <h1 className="display-1 text-light">Home page</h1>
                <Link to={"/books"} className="btn btn-dark btn-lg">Start Reading!</Link>
            </div>
            {/* <img src="ReadingCoverImage.jpg" alt="large open book"></img> */}
        </div>
    );
}

export default Home;