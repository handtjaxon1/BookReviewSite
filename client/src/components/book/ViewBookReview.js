import React from "react";

function ViewBookReview(props) {
    return (
        <div className="border rounded p-2 my-3">
        {/* Review Header */}
        <div>
            <h3>John Smith</h3>
            <p>3.7/5</p>
        </div>
        {/* Review Body */}
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem voluptatibus libero necessitatibus accusantium similique ad, magni labore, harum, numquam a! Odit maxime laborum, repellendus esse corrupti optio quae eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem voluptatibus libero necessitatibus accusantium similique ad, magni labore, harum, numquam a! Odit maxime laborum, repellendus esse corrupti optio quae eius.
            </p>
        </div>
    </div>
    );
}

export default ViewBookReview;