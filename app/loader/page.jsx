export default function Loader() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-800" style={{ backgroundColor: '#000000' }}>
            <div className="flex flex-col items-center p-4 md:p-5">
                <div className="flex justify-center">
                    <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-600 rounded-full dark:text-blue-500" role="status" aria-label="loading" style={{ color: '#ffff00' }}>
                    </div>
                    <span style={{ color: '#ffff00' }}>Loading Rtr Portfolio...</span>
                </div>
            </div>
        </div>
    );
};
