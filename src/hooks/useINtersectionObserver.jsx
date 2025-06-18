import { useEffect, useRef, useState } from "react"

export function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px", triggerOnce = true } = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [hasTriggered, setHasTriggered] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true)
                    if (triggerOnce) {
                        setHasTriggered(true)
                    }
                } else if (!triggerOnce && !hasTriggered) {
                    setIsIntersecting(false)
                }
            },
            {
                threshold,
                rootMargin,
            },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [threshold, rootMargin, triggerOnce, hasTriggered])

    return { ref, isIntersecting: triggerOnce ? isIntersecting || hasTriggered : isIntersecting }
}
