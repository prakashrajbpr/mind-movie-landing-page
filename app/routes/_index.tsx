// app/routes/_index.tsx
import { useState } from 'react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Manifest Your Dream Reality - Mind Movie Creator' },
    { name: 'description', content: 'Create powerful visualization videos to manifest your dreams using neuroscience-backed techniques inspired by Dr. Joe Dispenza.' },
  ];
};

type LifeCategory = 
  | 'spirituality'
  | 'finance' 
  | 'career'
  | 'health-fitness'
  | 'fun-hobbies'
  | 'environment'
  | 'family-friends'
  | 'relationships-love'
  | 'growth-learning';

interface Intention {
  category: LifeCategory;
  description: string;
  whatItGives: string;
  deeperGiving: string;
  ultimateGiving: string;
  feeling: string;
  importance: string;
}

interface Affirmation {
  category: LifeCategory;
  text: string;
}

const LIFE_CATEGORIES: { key: LifeCategory; label: string; description: string }[] = [
  { key: 'spirituality', label: 'Spirituality', description: 'Connection to higher purpose and inner peace' },
  { key: 'finance', label: 'Finance', description: 'Abundance, wealth, and financial freedom' },
  { key: 'career', label: 'Career', description: 'Professional growth and fulfillment' },
  { key: 'health-fitness', label: 'Health & Fitness', description: 'Physical vitality and wellbeing' },
  { key: 'fun-hobbies', label: 'Fun/Hobbies', description: 'Joy, creativity, and personal interests' },
  { key: 'environment', label: 'Environment', description: 'Your living space and surroundings' },
  { key: 'family-friends', label: 'Family & Friends', description: 'Meaningful relationships and connections' },
  { key: 'relationships-love', label: 'Relationships & Love', description: 'Romantic love and intimate partnerships' },
  { key: 'growth-learning', label: 'Growth & Learning', description: 'Personal development and education' },
];

export default function Index() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'category-select' | 'intention-setting' | 'affirmation-creation' | 'review'>('landing');
  const [selectedCategory, setSelectedCategory] = useState<LifeCategory | null>(null);
  const [intentions, setIntentions] = useState<Intention[]>([]);
  const [affirmations, setAffirmations] = useState<Affirmation[]>([]);
  const [currentIntention, setCurrentIntention] = useState<Partial<Intention>>({});

  const handleCategorySelect = (category: LifeCategory) => {
    setSelectedCategory(category);
    setCurrentIntention({ category });
    setCurrentStep('intention-setting');
  };

  const handleIntentionComplete = () => {
    if (currentIntention.category && currentIntention.description) {
      setIntentions([...intentions, currentIntention as Intention]);
      setCurrentStep('affirmation-creation');
    }
  };

  const handleAffirmationComplete = (affirmationText: string) => {
    if (selectedCategory) {
      setAffirmations([...affirmations, { category: selectedCategory, text: affirmationText }]);
      setCurrentStep('category-select');
      setSelectedCategory(null);
      setCurrentIntention({});
    }
  };

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            MANIFEST YOUR DREAM REALITY
          </h1>
          
          <p className="text-2xl mb-4 text-blue-200">
            CREATING A VIDEO MEMORY OF YOUR FUTURE
          </p>
          
          <div className="text-4xl font-bold mb-8">
            MIND MOVIE
            <div className="text-2xl italic font-light">Mastery Template</div>
          </div>
          
          <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to your Mind Movie Template—a powerful tool designed to help you visualize and manifest your dreams. 
            Inspired by the teachings of Dr. Joe Dispenza, this method combines quantum physics, brainwave state activation, 
            clear intentions, affirmations, high vibrational frequencies, and elevated emotion.
          </p>
          
          <button
            onClick={() => setCurrentStep('category-select')}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Create Your Mind Movie
          </button>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Neuroscience-Backed</h3>
              <p className="text-gray-300">Based on Dr. Joe Dispenza's groundbreaking research in quantum physics and consciousness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">High Vibration</h3>
              <p className="text-gray-300">Combines elevated emotions with clear intentions to align with your desired reality</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Personalized</h3>
              <p className="text-gray-300">Custom affirmations and visualizations tailored to your unique goals and dreams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCategorySelect = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Life Category</h2>
          <p className="text-xl text-gray-300">Select an area of your life you want to manifest and transform</p>
          <div className="mt-4 text-sm text-gray-400">
            Progress: {intentions.length}/9 categories completed
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {LIFE_CATEGORIES.map((category) => {
            const isCompleted = intentions.some(i => i.category === category.key);
            return (
              <button
                key={category.key}
                onClick={() => handleCategorySelect(category.key)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 text-left ${
                  isCompleted 
                    ? 'bg-green-900/50 border-green-500 text-green-100' 
                    : 'bg-white/10 border-purple-400 hover:border-gold-400 hover:bg-white/20'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {isCompleted && '✅ '}{category.label}
                </h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </button>
            );
          })}
        </div>

        {intentions.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentStep('review')}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Review My Intentions ({intentions.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderIntentionSetting = () => {
    const categoryInfo = LIFE_CATEGORIES.find(c => c.key === selectedCategory);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Set Your Intention</h2>
            <h3 className="text-xl text-gold-400">{categoryInfo?.label}</h3>
            <p className="text-gray-300 mt-2">{categoryInfo?.description}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  What is your specific intention for {categoryInfo?.label.toLowerCase()}?
                </label>
                <textarea
                  className="w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300"
                  rows={3}
                  placeholder="Be specific and detailed about what you want to manifest..."
                  value={currentIntention.description || ''}
                  onChange={(e) => setCurrentIntention({...currentIntention, description: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  What will achieving this intention give you?
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300"
                  placeholder="What immediate benefit will this bring?"
                  value={currentIntention.whatItGives || ''}
                  onChange={(e) => setCurrentIntention({...currentIntention, whatItGives: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  And what will THAT give you?
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300"
                  placeholder="Dig deeper - what's the benefit of that benefit?"
                  value={currentIntention.deeperGiving || ''}
                  onChange={(e) => setCurrentIntention({...currentIntention, deeperGiving: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  And what will THAT ultimately give you?
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300"
                  placeholder="What's the deepest benefit - the core desire?"
                  value={currentIntention.ultimateGiving || ''}
                  onChange={(e) => setCurrentIntention({...currentIntention, ultimateGiving: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  How will achieving this make you FEEL?
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300"
                  placeholder="Describe the emotions you'll experience..."
                  value={currentIntention.feeling || ''}
                  onChange={(e) => setCurrentIntention({...currentIntention, feeling: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Why is this intention important to you?
                </label>
                <textarea
                  className="w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300"
                  rows={3}
                  placeholder="Connect with your deeper 'why' - what makes this meaningful?"
                  value={currentIntention.importance || ''}
                  onChange={(e) => setCurrentIntention({...currentIntention, importance: e.target.value})}
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  onClick={() => setCurrentStep('category-select')}
                  className="flex-1 py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Back to Categories
                </button>
                <button
                  onClick={handleIntentionComplete}
                  disabled={!currentIntention.description}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:from-gray-500 disabled:to-gray-600 text-black font-bold rounded-lg transition-all"
                >
                  Create Affirmation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAffirmationCreation = () => {
    const [affirmationText, setAffirmationText] = useState('');
    const categoryInfo = LIFE_CATEGORIES.find(c => c.key === selectedCategory);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Create Your Affirmation</h2>
            <h3 className="text-xl text-gold-400">{categoryInfo?.label}</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Your Intention:</h4>
              <p className="text-gray-300 bg-white/10 p-4 rounded-lg">
                {currentIntention.description}
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Write a powerful affirmation that embodies this intention:
              </label>
              <p className="text-sm text-gray-400 mb-3">
                Use present tense, positive language, and speak as if it's already your reality. 
                Examples: "I am financially abundant and free", "I radiate love and attract my perfect partner"
              </p>
              <textarea
                className="w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300"
                rows={3}
                placeholder="I am..."
                value={affirmationText}
                onChange={(e) => setAffirmationText(e.target.value)}
              />
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg mb-6">
              <h5 className="font-semibold mb-2">💡 Affirmation Tips:</h5>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Use "I am" statements for identity-based affirmations</li>
                <li>• Include emotional words that make you feel elevated</li>
                <li>• Be specific about your desires</li>
                <li>• Write in present tense as if it's happening now</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep('intention-setting')}
                className="flex-1 py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Back to Intention
              </button>
              <button
                onClick={() => handleAffirmationComplete(affirmationText)}
                disabled={!affirmationText.trim()}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:from-gray-500 disabled:to-gray-600 text-black font-bold rounded-lg transition-all"
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderReview = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Your Mind Movie Blueprint</h2>
          <p className="text-gray-300">Review your intentions and affirmations before creating your mind movie</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {intentions.map((intention, index) => {
            const affirmation = affirmations.find(a => a.category === intention.category);
            const categoryInfo = LIFE_CATEGORIES.find(c => c.key === intention.category);
            
            return (
              <div key={intention.category} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold-400 mb-3">{categoryInfo?.label}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300">INTENTION:</h4>
                    <p className="text-sm">{intention.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300">AFFIRMATION:</h4>
                    <p className="text-sm italic">"{affirmation?.text}"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300">FEELING:</h4>
                    <p className="text-sm">{intention.feeling}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-4">
          <button
            onClick={() => setCurrentStep('category-select')}
            className="mr-4 py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Add More Categories
          </button>
          <button
            className="py-4 px-12 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold rounded-full text-xl transition-all transform hover:scale-105"
          >
            Create My Mind Movie ✨
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Your personalized video will be generated with kaleidoscope visuals, your affirmations, and high-vibrational music
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentStep === 'landing' && renderLanding()}
      {currentStep === 'category-select' && renderCategorySelect()}
      {currentStep === 'intention-setting' && renderIntentionSetting()}
      {currentStep === 'affirmation-creation' && renderAffirmationCreation()}
      {currentStep === 'review' && renderReview()}
    </>
  );
}