import React from "react";

const Logo = () => {
  return (
    <>
      <picture>
        <source srcSet="/logo.png" />
        <img
          src="/logo.png"
          alt="logo"
          style={{ maxWidth: "100%", height: "3rem" }}
        />
      </picture>
    </>
  );
};

export default Logo;
