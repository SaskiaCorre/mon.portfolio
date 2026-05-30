import React from "react";
import { Link } from "react-router-dom";

export default function GridProject({
  images,
  slug,
}) {
  return (
    <div className="projects-preview">
      {images.map((image) => (
        <Link
          key={image.title}
          to={`/projects/${slug}`}
        >
          <img
            src={image.image}
            alt={image.title}
          />
        </Link>
      ))}
    </div>
  );
}