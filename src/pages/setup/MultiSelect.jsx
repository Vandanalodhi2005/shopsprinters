import React from 'react';
import ModelSearch from '../../components/setup/ModelSearch';
import FinalStep from '../../components/setup/FinalStep';
import SetupProgressModal from '../../components/setup/SetupProgressModal';
import InstallationFailed from '../../components/setup/InstallationFailed';
import { useNavigate } from 'react-router-dom';

const MultiSelect = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState('model'); // model, final, progress, failed
  const [loading, setLoading] = React.useState(false);
  const [setupData, setSetupData] = React.useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('setupData') || '{}');
    } catch {
      return {};
    }
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleModelSearch = (model) => {
    setSetupData(prev => ({ ...prev, model }));
    setStep('final');
  };

  const handleFinalSubmit = (formData) => {
    setSetupData(prev => ({ ...prev, ...formData }));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('progress');
    }, 1500);
  };

  const handleChat = () => {
    if (window.jivo_api && typeof window.jivo_api.open === 'function') {
      window.jivo_api.open();
    } else {
      alert('Support Chat is currently initializing.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <div className="container mx-auto max-w-5xl px-4 py-8">

        {step === 'model' && (
          <ModelSearch
            onSearch={handleModelSearch}
            onBack={() => navigate('/easy-setup-guide')}
          />
        )}

        {step === 'final' && (
          <div className="mt-8">
            <FinalStep
              onBack={() => setStep('model')}
              onSubmit={handleFinalSubmit}
              loading={loading}
              initialModel={setupData.model}
            />
          </div>
        )}

        {step === 'progress' && (
          <SetupProgressModal
            open={true}
            onClose={() => setStep('final')}
            printer={setupData.model}
            user={setupData.userName}
            onError={() => setStep('failed')}
          />
        )}

        {step === 'failed' && (
          <InstallationFailed onChat={handleChat} printer={setupData.model} />
        )}

      </div>
    </div>
  );
};

export default MultiSelect;
