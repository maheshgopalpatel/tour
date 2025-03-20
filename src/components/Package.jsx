import React, { useEffect, useState } from "react";
import Card from "./Card";

const Package = () => {
  return (
    <div id="packages" className={`container mx-auto text-center mt-40 `}>
      <i>Packages</i>
      <h2 className="text-4xl max-sm:text-3xl font-bold text-gray-900 mb-4">
        Perfect Tour Packages
      </h2>
      <Card/>
    </div>
  );
};

export default Package;
