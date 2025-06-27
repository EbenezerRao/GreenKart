import { useEffect, useRef, useState } from "react";

const useScrollFade = () => {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const node = ref.current;
        if (node) observer.observe(node);
        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    return [ref, isVisible];
};

export default useScrollFade;
