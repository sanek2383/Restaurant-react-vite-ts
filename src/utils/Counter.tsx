import React, { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <h1 ref={counterRef} className="flex-shrink-0 display-5 text-primary mb-0">
      {count}
    </h1>
  );
};

export default Counter;

