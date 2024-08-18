import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.scss"; // Импорт стилей

interface OverlayProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleOverlayClick = useCallback(
        (event: React.MouseEvent) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!contentRef.current || !overlayRef.current) return;

            const { bottom } = contentRef.current.getBoundingClientRect();
            const { clientY } = event;

            if (clientY > bottom) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (!isOpen) return;

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isOpen, handleMouseMove]);

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleOverlayClick} ref={overlayRef}>
                    <motion.div
                        className={styles.content}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        ref={contentRef}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
