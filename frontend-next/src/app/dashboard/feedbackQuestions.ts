export interface FeedbackQuestion {
    key: string;
    label: string;
    shortLabel: string;
    category: string;
}

export const FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
    {
        key: 'q1',
        label: 'The teacher clearly communicated the Course Outcomes (COs) at the start of the course.',
        shortLabel: 'Course Outcomes (COs)',
        category: 'Lecture'
    },
    {
        key: 'q2',
        label: 'Concepts were explained with clarity, relevant examples, and real-world applications.',
        shortLabel: 'Concept Clarity',
        category: 'Lecture'
    },
    {
        key: 'q3',
        label: 'The teacher was well-prepared and used effective teaching aids/ICT tools in class.',
        shortLabel: 'Preparation & ICT Tools',
        category: 'Lecture'
    },
    {
        key: 'q4',
        label: 'The syllabus was covered in a timely manner, as per the planned schedule.',
        shortLabel: 'Syllabus Coverage',
        category: 'Lecture'
    },
    {
        key: 'q5',
        label: 'Questions were encouraged, and doubts were addressed satisfactorily.',
        shortLabel: 'Doubt Resolution',
        category: 'Lecture'
    },
    {
        key: 'q6',
        label: 'The teacher motivated students to explore and experiment through a collaborative approach.',
        shortLabel: 'Motivation & Collaboration',
        category: 'Lecture'
    },
    {
        key: 'q7',
        label: 'Assignments and tests were evaluated fairly, with feedback provided in a timely manner.',
        shortLabel: 'Fair Evaluation & Feedback',
        category: 'Lecture'
    },
    {
        key: 'q8',
        label: 'Study material, lesson plans, and reference resources were shared either offline or online.',
        shortLabel: 'Study Resources',
        category: 'Lecture'
    },
    {
        key: 'q9',
        label: 'The teacher was accessible for consultation/doubt-clearing beyond class hours.',
        shortLabel: 'Accessibility Beyond Class',
        category: 'Lecture'
    },
    {
        key: 'q10',
        label: 'Overall, the teaching-learning experience was effective, and I would recommend this teacher to my juniors.',
        shortLabel: 'Overall Experience',
        category: 'Lecture'
    },
];
