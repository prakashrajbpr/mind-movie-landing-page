import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface QuestionStep {
  id: string;
  category: string;
  question: string;
  placeholder?: string;
  type?: "text" | "textarea";
}

const allSteps: QuestionStep[] = [
  // FINANCE
  { id: "finance_goal", category: "Finance", question: "What is your exact financial goal?", placeholder: "e.g. I want to earn $10,000/month through my online business." },
  { id: "finance_vision", category: "Finance", question: "What does financial freedom look like for you?", placeholder: "e.g. Being debt-free, investing monthly, passive income from 3 sources." },
  { id: "finance_action", category: "Finance", question: "What will you do when you achieve this financial state?", placeholder: "e.g. Travel, support family, build a legacy." },
  { id: "finance_change", category: "Finance", question: "How will financial abundance change your daily life?", placeholder: "e.g. Less stress, more freedom, better lifestyle." },

  // CAREER
  { id: "career_ideal", category: "Career", question: "What is your ideal career or business?", placeholder: "e.g. A remote software developer working on AI ethics." },
  { id: "career_impact", category: "Career", question: "What impact do you want to make professionally?", placeholder: "e.g. Help millions through ethical AI tools." },
  { id: "career_day", category: "Career", question: "What does your perfect workday look like?", placeholder: "e.g. 6 focused hours, deep work, meaningful projects." },
  { id: "career_recognition", category: "Career", question: "What recognition or achievements do you desire?", placeholder: "e.g. Awards, published papers, team leadership." },

  // HEALTH
  { id: "health_vision", category: "Health", question: "What is your ideal physical condition?", placeholder: "e.g. Lean, fit, 70kg, strong endurance." },
  { id: "health_goals", category: "Health", question: "What specific health goals do you have?", placeholder: "e.g. Lose 10kg, run 5km, sleep 8hrs daily." },
  { id: "health_daily", category: "Health", question: "How will better health improve your life?", placeholder: "e.g. More energy, confidence, discipline." },

  // LOVE & RELATIONSHIPS
  { id: "love_partner", category: "Love", question: "What qualities do you value in a loving partner or relationship?", placeholder: "e.g. Supportive, fun, growth-focused." },
  { id: "love_future", category: "Love", question: "What does your ideal relationship feel like?", placeholder: "e.g. Safe, loving, exciting, honest." },
  { id: "love_shared_life", category: "Love", question: "What would your shared life look like?", placeholder: "e.g. Travel, build dreams, laugh together." },

  // PERSONAL GROWTH
  { id: "growth_skills", category: "Growth", question: "What new skills or mindsets do you want to master?", placeholder: "e.g. Public speaking, resilience, meditation." },
  { id: "growth_version", category: "Growth", question: "Who is your highest self you’re becoming?", placeholder: "e.g. Calm, driven, disciplined, kind leader." },
  { id: "growth_habits", category: "Growth", question: "What daily habits will shape this version of you?", placeholder: "e.g. Read, journal, exercise, limit distractions." },

  // SPIRITUALITY
  { id: "spirit_belief", category: "Spirituality", question: "What spiritual beliefs or values guide you?", placeholder: "e.g. Trust the universe, faith in flow." },
  { id: "spirit_connection", category: "Spirituality", question: "How do you experience connection with the divine or source?", placeholder: "e.g. Nature walks, meditation, prayer." },

  // LIFESTYLE
  { id: "life_day", category: "Lifestyle", question: "Describe your dream day from morning to night.", placeholder: "e.g. Wake up early, calm morning, fulfilling work, quality time, gratitude journaling." },
  { id: "life_place", category: "Lifestyle", question: "Where do you want to live ideally and why?", placeholder: "e.g. Beach town in Goa or Bali — peace, nature, minimalism." },

  // CONTRIBUTION
  { id: "giveback", category: "Contribution", question: "What causes or people do you want to help and how?", placeholder: "e.g. Teach coding to kids, support mental health NGOs." },
  { id: "impact", category: "Contribution", question: "What kind of positive impact do you want to leave on the world?", placeholder: "e.g. Inspire people through creativity, courage, and service." },

  // LEGACY
  { id: "legacy_story", category: "Legacy", question: "What do you want to be remembered for?", placeholder: "e.g. Someone who brought joy, wisdom, and uplifted others." },
  { id: "legacy_message", category: "Legacy", question: "If you had to leave one message to the world, what would it be?", placeholder: "e.g. You are more powerful than you know. Dream big." }
];

const uniqueCategories = Array.from(new Set(allSteps.map((s) => s.category)));

export default function EnhancedMindMovieWizard(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});

  const filteredSteps = selectedCategory
    ? allSteps.filter((s) => s.category === selectedCategory)
    : [];

  const step = filteredSteps[stepIndex];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setStepIndex(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!step) return;
    setResponses({ ...responses, [step.id]: e.target.value });
  };

  const handleNext = () => {
    if (stepIndex < filteredSteps.length - 1) setStepIndex(stepIndex + 1);
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
    else setSelectedCategory(null);
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-100">
        <div className="max-w-2xl w-full bg-white p-8 rounded-3xl shadow-2xl">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Choose a Life Area to Begin 🧭
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold shadow hover:from-purple-600 hover:to-pink-600"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!step) return <div className="text-center py-20">No questions available.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-100 flex flex-col justify-center items-center px-6 py-10">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-xl font-semibold text-purple-700 text-center">
              {step.category} 🧠
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {step.question}
            </h2>

            {step.type === "textarea" || (step.placeholder ?? "").length > 80 ? (
              <textarea
                rows={5}
                placeholder={step.placeholder}
                className="w-full p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400"
                value={responses[step.id] || ""}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                placeholder={step.placeholder}
                className="w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400"
                value={responses[step.id] || ""}
                onChange={handleChange}
              />
            )}

            <div className="flex justify-between pt-4">
              <button
                onClick={handleBack}
                className="flex items-center px-4 py-2 rounded-md font-semibold bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                <ChevronLeft className="mr-2" /> {stepIndex > 0 ? "Back" : "Choose Area"}
              </button>

              <button
                onClick={handleNext}
                disabled={stepIndex === filteredSteps.length - 1}
                className="flex items-center px-4 py-2 rounded-md font-semibold bg-pink-500 text-white hover:bg-pink-600"
              >
                {stepIndex === filteredSteps.length - 1 ? "Finish" : "Next"}
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 w-full max-w-xl">
        <div className="h-2 bg-purple-200 rounded-full">
          <div
            className="h-2 bg-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${((stepIndex + 1) / filteredSteps.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Step {stepIndex + 1} of {filteredSteps.length}
        </p>
      </div>
    </div>
  );
}
