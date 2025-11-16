import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- How to update this component ---
// 1. To change the steps, modify the `workflowSteps` array below. You can add, remove, or edit any step.
// 2. To replace the placeholder images:
//    - Add your images (screenshots or GIFs) to the `/public/assets/workflow/` directory in your project.
//    - Update the `image` paths in the `workflowSteps` array to point to your new files.
//      For example: image: '/assets/workflow/step1-threats.gif'
const workflowSteps = [
  {
    id: 1,
    title: 'Identify Assets & Threats',
    description: 'Capture relevant system elements, assets, threat scenarios, and potential attack vectors in our intuitive modeling canvas.',
    image: '/assets/Thread-and-Risks.png',
  },
  {
    id: 2,
    title: 'Evaluate Attack Feasibility',
    description: 'Analyze attack probabilities, exposure, required capabilities, and attack paths with guided, structured inputs.',
    image: '/assets/Dark-mode.png',
  },
  {
    id: 3,
    title: 'Determine Impact & Risk',
    description: 'Automatically calculate impact levels, Risk Priority Numbers (RPN), and security classes to prioritize critical areas.',
    image: '/assets/attack-leaves.png',
  },
  {
    id: 4,
    title: 'Define Controls & Mitigations',
    description: 'Derive security goals and map cybersecurity controls and mitigation strategies from our extensive automotive-specific database.',
    image: '/assets/Tara-Validation.png',
  },
];

const AUTO_ROTATE_INTERVAL = 7000; // 7 seconds

const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % workflowSteps.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setTimeout(nextStep, AUTO_ROTATE_INTERVAL);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeStep, isPaused, nextStep]);

  const handleStepClick = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPaused(true);
    setActiveStep(index);
  };

  return (
    <section id="workflow" className="py-20 sm:py-32 relative">
       <div className="absolute inset-0 -z-10 bg-brand-dark bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">TARA Workflow — From Analysis to Decision</h2>
          <p className="mt-4 text-lg text-gray-400">
            A seamless, step-by-step process that guides you from initial threat identification to final reporting and mitigation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column: Step List */}
          <div className="w-full lg:w-2/5 space-y-2">
            {workflowSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors duration-300 border border-transparent ${activeStep === index ? 'bg-white/10' : 'hover:bg-white/5'}`}
                aria-current={activeStep === index}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 font-mono text-lg transition-colors ${activeStep === index ? 'text-brand-accent' : 'text-gray-500'}`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${activeStep === index ? 'text-white' : 'text-gray-300'}`}>
                      {step.title}
                    </h3>
                    <p className={`mt-1 text-sm transition-colors ${activeStep === index ? 'text-gray-300' : 'text-gray-400'}`}>
                      {step.description}
                    </p>
                     {activeStep === index && (
                      <div className="mt-3 bg-white/10 h-1 w-full rounded-full overflow-hidden">
                        <div
                          key={activeStep} // Re-triggers animation on step change
                          className="h-1 bg-brand-accent rounded-full origin-left animate-fill-progress"
                          style={{ animationDuration: `${AUTO_ROTATE_INTERVAL}ms` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Screenshot Viewer */}
          <div className="w-full lg:w-3/5 aspect-[16/10] relative">
            <div className="absolute inset-0 bg-white/5 rounded-2xl shadow-2xl border border-white/10 p-2">
               <div className="relative w-full h-full overflow-hidden rounded-lg">
                {workflowSteps.map((step, index) => (
                    <img
                      key={step.id}
                      src={step.image}
                      alt={step.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden={activeStep !== index}
                    />
                ))}
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_0_rgba(0,246,255,0.2)] pointer-events-none"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
