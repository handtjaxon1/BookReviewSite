import React, { useEffect, useState } from "react";

function FullBookReview(props) {

    return (
        <div> {/* Needs 1px, light, rounded, border and a shadow effect */}
            {/* Image on the left side */}
            <img src={process.env.PUBLIC_URL + "/BookCover_01.png"} alt="book-cover">Book Cover</img>
            {/* Row with justify-content-between */}
            <div>
                <h3>Book Title</h3>
                <p>Author Name  |  Genre</p>
            </div>
            {/* Row with justify-content-between */}
            <div>
                <h4>John Smith says</h4>
                <p>Rating 4.5/5</p>
            </div>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta inventore. Rem vero maxime, modi ratione perferendis veritatis porro, accusantium saepe deleniti minima autem dicta numquam. Exercitationem porro consequatur veniam?
            </div>
        </div>
    );
}

export default FullBookReview;