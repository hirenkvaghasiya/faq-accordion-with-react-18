import React, { useState } from 'react'

const Question = ({ question }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <div>
                <h4>{question.title}</h4>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '-' : '+'}
                </button>
            </div>
            {
                isOpen && <p>{question.info}</p>
            }
        </section>
    )
}

export default Question