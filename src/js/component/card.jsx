import React from "react";

export const Card = (props) => {
    return (
        <>
            <div className="mb-3 col-12 col-xl-3  m-1 my-2 p-2" style={{ width: "25rem" }}>
                <div>
                    <div className="card text-center">
                        <img src="https://images.wallpapersden.com/image/download/spider-man-pixel-art_a2luZmqUmZqaraWkpJRqZWWtamVl.jpg" className="card-img-top h-100" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href="#" className="btn btn-primary">{props.cta}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};




