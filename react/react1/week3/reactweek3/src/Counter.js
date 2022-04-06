import React, { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <>
      <div>
        <h3>You Have Used {count} On This Website.</h3>
      </div>
    </>
  );
}
