import React from "react";

function Footer_nav({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.url}
            className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Footer_nav;
