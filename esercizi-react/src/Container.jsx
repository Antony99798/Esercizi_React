import { useState } from "react";

function Container({ title, children }){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="border-2 border-red-500 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold cursor-pointer" onClick={toggleCollapse}>
        {title}
      </h2>
      {!isCollapsed && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Container;
