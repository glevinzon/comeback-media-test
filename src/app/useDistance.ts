import { useEffect, useState } from "react";

function useDistance(
  ref1: React.RefObject<HTMLDivElement>,
  ref2: React.RefObject<HTMLDivElement>
): {
  distance: number | null;
  startPosition: number;
  endPosition: number;
} {
  const [distance, setDistance] = useState<number | null>(null);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [endPosition, setEndPosition] = useState<number>(0);

  useEffect(() => {
    if (ref1.current && ref2.current) {
      const rect1 = ref1.current.getBoundingClientRect();
      const rect2 = ref2.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const distance = Math.abs(rect1.top - rect2.top);

      setStartPosition(rect1.top + scrollTop);
      setEndPosition(rect2.top + scrollTop);
      setDistance(distance);
    }
  }, [ref1, ref2]);

  return { distance, startPosition, endPosition };
}

export default useDistance;
