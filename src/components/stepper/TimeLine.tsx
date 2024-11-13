
// After
import TimelineStep from '@/components/stepper/TimeLineStep';
const Timeline = () => {
    const steps = [
        {
            title: 'Personal Info',
            description: 'Step details here',
            isActive: true,
        },
        {
            title: 'Account Info',
            description: 'Step details here',
            isActive: false,
        },
        // Add more steps as needed
    ];

    return (
        <ol className="m-3 relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
            {steps.map((step, index) => (
                <TimelineStep
                    key={index}
                    index={index + 1}
                    title={step.title}
                    description={step.description}
                    isActive={step.isActive}
                />
            ))}
        </ol>
    );
};

export default Timeline;