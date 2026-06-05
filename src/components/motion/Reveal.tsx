import { motion, ViewportOptions } from "framer-motion";

const variants = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -30 },
    right: { x: 30 },
};

export function Reveal({
    children,
    direction = "up",
    delay,
    duration,
    viewport = { once: true },
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction: "up" | "left" | "down" | "right",
    viewport?: ViewportOptions
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                ...variants[direction],
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={viewport}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
}