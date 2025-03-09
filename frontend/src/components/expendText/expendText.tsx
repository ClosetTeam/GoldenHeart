import React, { useState } from 'react';
import "expendText.css"


const ExpandableText: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button onClick={toggleText}>
                {isExpanded ? 'Скрыть текст' : 'Показать текст'}
            </button>

            {/* Добавляем класс в зависимости от состояния */}
            <div className={`text-content ${isExpanded ? 'visible' : ''}`}>
                <p>Этот текст был скрыт, но теперь он виден! Вы можете добавить сюда любой контент.</p>
            </div>
        </div>
    );
};

export default ExpandableText;