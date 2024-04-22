import React from "react";

export const Card = (props) => {
    return (
        <>
            <div className="row m-2">
                <div className="col-md-12 mb-3">
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




