// questions.js

export const assessmentQuestions = {
    sections: [
        {
            id: "section1",
            title: "Role and Responsibilities",
            questions: [
                {
                    id: "timeSpent",
                    category: "Role Focus",
                    type: "radio",
                    text: "How do you spend most of your time?",
                    tooltip: "Consider your primary activities during a typical sprint",
                    required: true,
                    options: [
                        { value: 1, text: "Doing technical work and updating Scrum artifacts" },
                        { value: 2, text: "Ensuring Scrum events happen and rules are followed" },
                        { value: 3, text: "Teaching the team about Scrum and facilitating events" },
                        { value: 4, text: "Coaching teams and addressing organizational impediments" },
                        { value: 5, text: "Driving organizational change and mentoring other Scrum Masters" }
                    ]
                },
                {
                    id: "technicalWork",
                    category: "Technical Involvement",
                    type: "radio",
                    text: "What is your involvement in technical work?",
                    required: true,
                    options: [
                        { value: 1, text: "I'm a regular contributor to development tasks" },
                        { value: 2, text: "I help occasionally with technical tasks" },
                        { value: 3, text: "I only help when the team specifically requests it" },
                        { value: 4, text: "I focus solely on Scrum Master responsibilities" },
                        { value: 5, text: "I mentor others in separating SM duties from technical work" }
                    ]
                },
                {
                    id: "artifacts",
                    category: "Administrative",
                    type: "radio",
                    text: "How do you handle Scrum artifacts and ceremonies?",
                    required: true,
                    options: [
                        { value: 1, text: "I maintain all artifacts myself to ensure they're up to date" },
                        { value: 2, text: "I ensure the team maintains them according to Scrum rules" },
                        { value: 3, text: "I teach the team how to effectively use artifacts" },
                        { value: 4, text: "The team maintains artifacts independently" },
                        { value: 5, text: "I help multiple teams optimize their use of artifacts" }
                    ]
                }
            ]
        },
        {
            id: "section2",
            title: "Team Coaching and Development",
            questions: [
                {
                    id: "improvement",
                    category: "Coaching Approach",
                    type: "radio",
                    text: "How do you approach team improvement?",
                    required: true,
                    options: [
                        { value: 1, text: "I tell the team what they need to do to improve" },
                        { value: 2, text: "I ensure the team follows Scrum practices correctly" },
                        { value: 3, text: "I help the team identify their own improvement areas" },
                        { value: 4, text: "I coach the team to become self-organizing" },
                        { value: 5, text: "I help multiple teams and the organization improve" }
                    ]
                },
                {
                    id: "facilitation",
                    category: "Facilitation",
                    type: "radio",
                    text: "How do you handle Scrum events?",
                    required: true,
                    options: [
                        { value: 1, text: "I run the meetings according to a set agenda" },
                        { value: 2, text: "I ensure everyone follows the Scrum format" },
                        { value: 3, text: "I facilitate productive discussions and learning" },
                        { value: 4, text: "The team runs effective meetings with minimal guidance" },
                        { value: 5, text: "I teach others advanced facilitation techniques" }
                    ]
                }
            ]
        },
        // Additional sections...
        {
            id: "section3",
            title: "Values and Principles",
            questions: [
                {
                    id: "values",
                    category: "Values",
                    type: "radio",
                    text: "How do you promote Scrum values?",
                    required: true,
                    options: [
                        { value: 1, text: "I focus on following the processes" },
                        { value: 2, text: "I remind the team about the values when needed" },
                        { value: 3, text: "I actively teach and demonstrate the values" },
                        { value: 4, text: "The team embodies the values independently" },
                        { value: 5, text: "I help spread the values throughout the organization" }
                    ]
                }
            ]
        },
        {
            id: "section4",
            title: "Organizational Impact",
            questions: [
                {
                    id: "impediments",
                    category: "Influence",
                    type: "radio",
                    text: "How do you handle organizational impediments?",
                    required: true,
                    options: [
                        { value: 1, text: "I focus on team-level issues only" },
                        { value: 2, text: "I report impediments to management" },
                        { value: 3, text: "I actively work with stakeholders to remove impediments" },
                        { value: 4, text: "I coach others in impediment removal" },
                        { value: 5, text: "I drive systematic organizational improvements" }
                    ]
                }
            ]
        }
    ]
};