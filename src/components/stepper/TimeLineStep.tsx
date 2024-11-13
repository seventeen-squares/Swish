const TimelineStep = ({title, description,  isActive, index}:{ title: string, description: string, isActive: boolean, index: number }) => {
    return (
        <li className="mb-10 ms-6">
      <span
          className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 ${
              isActive
                  ? 'bg-blue-200 dark:bg-blue-500'
                  : 'bg-gray-100 dark:bg-gray-700'
          }`}
      >
          {index}
      </span>
            <h3 className="font-medium leading-tight">{title}</h3>
            <p className="text-sm">{description}</p>
        </li>
    );
};

export default TimelineStep;