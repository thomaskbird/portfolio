import {RefObject, useEffect, useMemo, useRef, useState} from "react";

const useIsVisible = (ref: RefObject<any>) => {
  const observer = useRef<any>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting)
    );

    observer.current.observe(ref.current);
    return () => observer.current.disconnect();
  }, []);

  return useMemo(() => isIntersecting, [isIntersecting]);
}

export default useIsVisible;