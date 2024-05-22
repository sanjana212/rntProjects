import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot';
import Segment from 'semantic-ui-react';
const Chatboat = () => {
    const [showBot, setShowBot] = useState(true);
    const steps = [
        {
            id: 'Greet',
            message: 'Hello welcome to our website',
            trigger: "Ask Name",
        },
        {
            id: 'Ask Name',
            message: 'Please Enter Your Name',
            trigger: "Waiting1",
        },
        {
            id: 'Waiting1',
            user: true,
            trigger: "Name",
        },
        {
            id: 'Name',
            message: `Hi {previousValue},Please Select Your Issue`,
            trigger: "issues",
        },
        {
            id: 'issues',
            options: [
                {
                    value: 'react',
                    label: 'react',
                    trigger: "react"
                },
                {
                    value: 'Angular',
                    label: 'Angular',
                    trigger: "Angular"
                }
            ]
        },
        {
            id: 'react',
            message: "Thanks for telliing your react issue",
            end: true,
        },
        {
            id: 'Angular',
            message: "Thanks for telliing your Angular issue",
            end: true,
        }
    ]

    return (
        <>
            <div className='container' >
                {
                    showBot && <ChatBot steps={steps} />
                }
                <div><i class="fa fa-commenting text-primary" aria-hidden="true" onClick={() => setShowBot(!showBot)}></i></div>

            </div>
        </>
    )
}

export default Chatboat;