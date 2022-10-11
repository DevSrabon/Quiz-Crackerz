import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Question from '../Question/Question';
const Questions = () => {
    const loaderQuestionsData = useLoaderData();
    const questions = loaderQuestionsData.data.questions;
    return (
        <div>
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