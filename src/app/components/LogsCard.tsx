interface Log {
    value: string | number;
    label: string;
}

interface LogsCardProps {
    module: string;
    logs: Log[];
}

const LogsCard: React.FC<LogsCardProps> = ({ module, logs }) => {
    return (
        <div className="bg-transparent text-secondary-100 shadow-lg max-w-xl mx-auto border-4 border-primary-500 rounded-lg">
            {/* Module (Endpoint) Title */}
            <div className="bg-primary-500 text-secondary-1000 font-bold text-lg p-2 rounded-b-lg">
                {module}
            </div>

            {/* Stats */}
            <div className="text-secondary-100 p-6 flex justify-around rounded-lg">
                {logs.map((log, index) => (
                    <div key={index} className="text-left border-l-4 rounded-lg p-2 border-primary-500">
                        <span className="text-3xl font-bold block">{log.value}</span>
                        <span className="text-sm">{log.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogsCard;
