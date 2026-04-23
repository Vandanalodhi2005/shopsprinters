import React, { useEffect, useRef, useState } from 'react';

const defaultSteps = [
    {
        label: 'Checking Device Compatibility',
        right: 'Verified',
        progress: 0,
    },
    {
        label: 'Downloading Drivers (64-bit)',
        right: 'Completed (145 MB)',
        progress: 0,
    },
    {
        label: 'Installing Package...',
        right: 'Initializing Installation...',
        progress: 0,
    }
];

export default function SetupProgressModal({ open, onClose, printer = 'Officejet', user = 'User', onError }) {
    const modalRef = useRef(null);
    const [stepStates, setStepStates] = useState(defaultSteps);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        if (!open) return;
        setStepStates(defaultSteps);
        setActiveStep(0);
        let timers = [];

        function animateStep(idx) {
            setActiveStep(idx);
            setStepStates((prev) =>
                prev.map((s, i) =>
                    i < idx ? { ...s, progress: 100 } : i === idx ? { ...s, progress: 0 } : { ...s, progress: 0 }
                )
            );
            let prog = 0;
            const interval = setInterval(() => {
                prog += 5;
                setStepStates((prev) =>
                    prev.map((s, i) => i === idx ? { ...s, progress: Math.min(prog, 100) } : s)
                );
                
                if (idx === 2 && prog >= 60) {
                    clearInterval(interval);
                    setStepStates((prev) =>
                        prev.map((s, i) => i === idx ? { ...s, progress: 60 } : s)
                    );
                    timers.push(setTimeout(() => {
                        if (onError) onError();
                    }, 4000));
                } else if (prog >= 100) {
                    clearInterval(interval);
                    setStepStates((prev) =>
                        prev.map((s, i) => i === idx ? { ...s, progress: 100 } : s)
                    );
                    if (idx < defaultSteps.length - 1) {
                        timers.push(setTimeout(() => animateStep(idx + 1), 700));
                    }
                }
            }, 30);
            timers.push(interval);
        }

        timers.push(setTimeout(() => animateStep(0), 400));
        return () => timers.forEach(clearInterval);
    }, [open, onError]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-xl min-w-[320px] sm:min-w-[420px] p-0 border border-gray-100 overflow-hidden"
            >
                <div className="flex items-center px-8 py-5 border-b border-gray-100 bg-gray-50">
                    <i className="fa-solid fa-gear text-blue-600 text-2xl mr-3 animate-spin-slow"></i>
                    <span className="font-semibold text-gray-800 text-lg tracking-wide">Device Setup Assistant</span>
                    <button onClick={onClose} className="ml-auto text-gray-400 hover:text-gray-600 text-xl px-2">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="px-10 py-8">
                    <div className="flex items-center mb-6">
                        <i className="fa-solid fa-print text-blue-600 text-3xl mr-4"></i>
                        <div>
                            <div className="text-xl font-bold text-gray-800 leading-tight">{printer}</div>
                            <div className="text-gray-400 text-sm">Authorized User: {user}</div>
                        </div>
                    </div>
                    <ol className="space-y-6">
                        {stepStates.map((step, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-left">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold border-2 ${idx < activeStep ? 'bg-green-100 border-green-400 text-green-700' : idx === activeStep ? 'bg-blue-100 border-blue-400 text-blue-700' : 'bg-gray-100 border-gray-300 text-gray-400'}`}>
                                    {idx < activeStep ? <i className="fa-solid fa-check"></i> : idx + 1}
                                </div>
                                <div className="flex-1">
                                    <div className="text-base font-semibold text-gray-800 mb-1">{step.label}</div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                                        <div className={`h-2 rounded-full transition-all duration-300 ${idx < activeStep ? 'bg-green-400' : idx === activeStep ? 'bg-blue-400' : 'bg-gray-300'}`}
                                            style={{ width: `${step.progress}%` }}></div>
                                    </div>
                                    <div className="text-xs text-gray-500">{step.right}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
