import React, {Component} from 'react'
import Activeqz from "../../Components/Active/Activeqz";

import './Quiz.css'


class Quiz extends Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'What color of sky',
                rightAnswerId: 3,
                id: 1,
                answers: [

                    {text: '#000 # 1', id: 1},
                    {text: '#f2f2f2 # 2', id: 2},
                    {text: '#ccccc # 3', id: 3},
                    {text: '#556c2 # 4', id: 4}

                ]
            },

            {
                question: 'How year St. Petrburg was born',
                rightAnswerId: 3,
                id: 2,
                answers: [

                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}

                ]
            },
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log(answerId);
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    };

    render() {
        return (
            <div className="Quiz">

                <div className='Quizwraper'>
                    <h2>Choose your answer</h2>
                    <Activeqz

                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz