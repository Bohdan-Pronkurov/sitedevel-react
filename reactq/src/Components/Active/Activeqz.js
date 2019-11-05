import React from 'react'
import AnswersList from "./AnswersList/AnswersList";

import './Activeqz.css'

const Activeqz = (props) => {


    return (
        <div className={'Active'}>
            <p className="Question">
                <span>
                    <b>{props.answerNumber}</b>&nbsp;
                    {props.question}
                </span>
                <small>{props.answerNumber} of {props.quizLength}</small>
            </p>
           <AnswersList
               answers={props.answers}
                onAnswerClick={props.onAnswerClick}
           />

        </div>
    )
};

export default Activeqz