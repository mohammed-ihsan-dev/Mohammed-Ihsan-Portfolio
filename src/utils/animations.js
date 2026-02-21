export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

export const cardReveal = {
    hidden: { opacity: 0, rotateX: 5, y: 30 },
    visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }
    }
};

export const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 250, damping: 20 }
};

export const sectionReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};
