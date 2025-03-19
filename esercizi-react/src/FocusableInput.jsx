import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <input ref={inputRef} type="text" placeholder="Scrivi qui..." />;
}

function MountMessage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Component mounted for the first time");
      isMounted.current = true;
    }
  }, []);

  return <div>Check the console for mount message.</div>;
}

export default function App() {
  return (
    <>
      <FocusableInput />
      <MountMessage />
    </>
  );
}
