import './PopupCard.css'
import React from "react";

interface PopupCardProps {
    isOpen?: boolean,
    onClose?: () => void,
    children?: React.ReactNode;
}

export default function PopupCard({isOpen, onClose, children}: PopupCardProps) {

    return (
        <>
            {/* Всплывающее окно */}
            {isOpen && (
                <div className="overlay" onClick={onClose}>
                    <div className="pop-up" onClick={e => e.stopPropagation()}>
                        {children}
                        <button onClick={onClose}>Закрыть</button>
                    </div>
                </div>
            )}
        </>
    )
}