import React, { useState } from "react";

const MyImage = ({ imgs }) => {
  const [imgNo, setImgNo] = useState(0);

  return (
    <div className="my-image-container">
      {/* Thumbnails */}
      <div className="thumbnail-container">
        {imgs &&
          imgs.map((item, i) => (
            <img
              key={i}
              src={item.url}
              alt="Product"
              className={`thumbnail ${imgNo === i ? "active" : ""}`}
              onClick={() => setImgNo(i)}
            />
          ))}
      </div>

      {/* Main Image */}
      <img src={imgs?.[imgNo]?.url} alt="Product" className="main-image" />
    </div>
  );
};

export default MyImage;
