import React, { useEffect, useRef, useState } from 'react';

export default function SetupProgressModal({ open, onClose, printer = 'Officejet', user = 'User', onError }) {
    const modalRef = useRef(null);
    const [stepStates, setStepStates] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    const modelsearchinput = localStorage.getItem('printerModel') || printer;

    const defaultSteps = [
        {
            label: 'Checking Device Compatibility',
            right: 'Verified',
            progress: 0,
            status: '',
        },
        {
            label: `Downloading Drivers for ${modelsearchinput}`,
            right: 'Completed (145 MB)',
            progress: 0,
            status: '',
        },
        {
            label: 'Installing Package...',
            right: '',
            progress: 0,
            status: '',
        }
    ];

    useEffect(() => {
        if (!open) return;
        setStepStates(defaultSteps);
        setActiveStep(0);
        let timers = [];

        function animateStep(idx) {
            setActiveStep(idx);
            setStepStates((prev) =>
                prev.map((s, i) =>
                    i < idx
                        ? { ...s, progress: 100, status: 'done' }
                        : i === idx
                        ? { ...s, progress: 0, status: 'active' }
                        : { ...s, progress: 0, status: '' }
                )
            );
            let prog = 0;
            const interval = setInterval(() => {
                prog += 2; // Slower progress for more realism
                setStepStates((prev) =>
                    prev.map((s, i) =>
                        i === idx ? { ...s, progress: Math.min(prog, 100), status: 'active' } : s
                    )
                );
                // For the last step, stop at 60% and trigger error after 6s
                if (idx === 2 && prog >= 60) {
                    clearInterval(interval);
                    setStepStates((prev) =>
                        prev.map((s, i) =>
                            i === idx ? { ...s, progress: 60, status: 'active' } : s
                        )
                    );
                    timers.push(setTimeout(() => {
                        if (onError) onError();
                    }, 6000));
                } else if (prog >= 100) {
                    clearInterval(interval);
                    setStepStates((prev) =>
                        prev.map((s, i) =>
                            i === idx ? { ...s, progress: 100, status: 'done' } : s
                        )
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
    }, [open, printer, onError]);

    useEffect(() => {
        if (open && modalRef.current) {
            modalRef.current.classList.remove('opacity-0', 'scale-95');
            modalRef.current.classList.add('opacity-100', 'scale-100');
        }
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4">
            <div
                ref={modalRef}
                className="transition-all duration-500 ease-out transform opacity-0 scale-95 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full max-w-[640px] overflow-hidden border border-gray-100"
            >
                {/* Header with window controls */}
                <div className="flex items-center px-8 py-6 border-b border-gray-100">
                    <div className="flex items-center">
                        <i className="fa-solid fa-gear text-gray-400 text-xl mr-3"></i>
                        <span className="font-bold text-gray-800 text-lg md:text-xl tracking-tight">Device Setup Assistant</span>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                </div>

                <div className="px-10 py-10">
                    {/* Printer Info Card */}
                    <div className="flex items-center gap-5 mb-10">
                        <div className="w-20 h-20 bg-[#f0f7ff] rounded-2xl flex items-center justify-center border border-[#e1effe]">
                            <i className="fa-solid fa-print text-[#0066ff] text-4xl"></i>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold text-gray-900 leading-none mb-2">{modelsearchinput}</h2>
                            <p className="text-gray-500 text-lg font-medium">Authorized User: <span className="text-gray-600">{user}</span></p>
                        </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-4 top-8 bottom-8 w-[2px] bg-gray-100 z-0"></div>

                        <div className="space-y-12">
                            {stepStates.map((step, idx) => (
                                <div key={idx} className="relative z-10 flex items-start gap-6">
                                    {/* Icon Column */}
                                    <div className="flex-shrink-0 mt-1">
                                        {idx < activeStep || step.status === 'done' ? (
                                            <div className="w-9 h-9 rounded-full bg-[#e6fcf5] flex items-center justify-center text-[#20c997] border border-[#c3fae8]">
                                                <i className="fa-solid fa-check text-lg"></i>
                                            </div>
                                        ) : idx === activeStep ? (
                                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0066ff] border-2 border-[#0066ff] border-t-transparent animate-spin">
                                            </div>
                                        ) : (
                                            <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 border border-gray-100">
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Column */}
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className={`text-xl font-bold ${idx <= activeStep ? 'text-gray-900' : 'text-gray-400'}`}>
                                                {step.label}
                                            </h3>
                                            {step.right && (idx < activeStep || step.status === 'done') && (
                                                <span className="bg-[#f0fcf5] text-[#20c997] px-3 py-1 rounded-full text-xs font-bold border border-[#e6fcf5] tracking-wide">
                                                    {step.right}
                                                </span>
                                            )}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full transition-all duration-300 ${
                                                    idx < activeStep || step.status === 'done' 
                                                    ? 'bg-[#0066ff]' 
                                                    : idx === activeStep 
                                                    ? 'bg-[#0066ff]' 
                                                    : 'bg-transparent'
                                                }`}
                                                style={{ width: `${step.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
