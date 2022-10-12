import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Question from '../Question/Question';
const Questions = () => {
    const loaderQuestionsData = useLoaderData();
    const questions = loaderQuestionsData.data.questions;
    const name = loaderQuestionsData.data.name;
    return (
        <div>
            <h2>{name}</h2>
            {
                questions.map(data => <Question
                    key={data.id}
                    data={data}
                ></Question>) 
            }
        </div>
    );
};

export default Questions;