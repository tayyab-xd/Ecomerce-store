import React, { useState } from "react";

function Colors({ data }) {
    const [Color, setColor] = useState(data ? data[0] : "");
    console.log(Color)
    return (
        <>
            <div className="color-container">
                {data ? (
                    data.map((item, index) => (
                        <button
                            key={index}
                            className={`color-button ${Color === item ? "selected" : ""}`}
                            style={{ backgroundColor: item }}
                            onClick={() => setColor(item)}
                        >
                            {Color === item && <span className="checkmark">✔</span>}
                        </button>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <button>Add to cart</button>
        </>
    );
}

export default Colors;
