import { useState } from "react";

function Container({ title, children }){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="border-2 border-red-500 bg-white">
      <h2 className="text-lg font-bold cursor-pointer" onClick={toggle}>
        {title}
      </h2>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
};

export default Container;
