import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return [ref, visible];
}

export function useStaggerReveal(count, threshold = 0.1) {
    const ref = useRef(null);
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const items = [];
                    for (let i = 0; i < count; i++) {
                        setTimeout(() => setVisibleItems(v => [...v, i]), i * 100);
                        items.push(i);
                    }
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [count, threshold]);

    return [ref, (i) => visibleItems.includes(i)];
}
