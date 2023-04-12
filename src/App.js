import Question from './Question';

function App() {
    return (
        <>
            <h1>Project 2: FAQ/Accordion</h1>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="questions">
                    {
                        questions.map((question) => (
                            <Question key={question.id} question={question} />
                        ))
                    }
                </div>
            </div>
            <p className="author-footer">
                Made with 💝 by&nbsp;
                <a href="https://github.com/hirenkvaghasiya" target="_blank" rel="noopener noreferrer">
                    Hiren Vaghasiya
                </a>
            </p>
        </>
    );
}

export default App;

const questions = [
    {
        id: 1,
        title: "Is this a good product?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "How much does it cost?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        title: "When can I get it?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 4,
        title: "What about warranty status?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 5,
        title: "Is it coming with warranty?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
];