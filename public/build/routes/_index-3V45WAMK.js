import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-W6GKFBYW.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1750870103434.9548";
}
var meta = () => {
  return [{
    title: "Manifest Your Dream Reality - Mind Movie Creator"
  }, {
    name: "description",
    content: "Create powerful visualization videos to manifest your dreams using neuroscience-backed techniques inspired by Dr. Joe Dispenza."
  }];
};
var LIFE_CATEGORIES = [{
  key: "spirituality",
  label: "Spirituality",
  description: "Connection to higher purpose and inner peace"
}, {
  key: "finance",
  label: "Finance",
  description: "Abundance, wealth, and financial freedom"
}, {
  key: "career",
  label: "Career",
  description: "Professional growth and fulfillment"
}, {
  key: "health-fitness",
  label: "Health & Fitness",
  description: "Physical vitality and wellbeing"
}, {
  key: "fun-hobbies",
  label: "Fun/Hobbies",
  description: "Joy, creativity, and personal interests"
}, {
  key: "environment",
  label: "Environment",
  description: "Your living space and surroundings"
}, {
  key: "family-friends",
  label: "Family & Friends",
  description: "Meaningful relationships and connections"
}, {
  key: "relationships-love",
  label: "Relationships & Love",
  description: "Romantic love and intimate partnerships"
}, {
  key: "growth-learning",
  label: "Growth & Learning",
  description: "Personal development and education"
}];
function Index() {
  _s2();
  var _s = $RefreshSig$();
  const [currentStep, setCurrentStep] = (0, import_react.useState)("landing");
  const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(null);
  const [intentions, setIntentions] = (0, import_react.useState)([]);
  const [affirmations, setAffirmations] = (0, import_react.useState)([]);
  const [currentIntention, setCurrentIntention] = (0, import_react.useState)({});
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentIntention({
      category
    });
    setCurrentStep("intention-setting");
  };
  const handleIntentionComplete = () => {
    if (currentIntention.category && currentIntention.description) {
      setIntentions([...intentions, currentIntention]);
      setCurrentStep("affirmation-creation");
    }
  };
  const handleAffirmationComplete = (affirmationText) => {
    if (selectedCategory) {
      setAffirmations([...affirmations, {
        category: selectedCategory,
        text: affirmationText
      }]);
      setCurrentStep("category-select");
      setSelectedCategory(null);
      setCurrentIntention({});
    }
  };
  const renderLanding = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-6 py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center max-w-4xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: "\u{1F3AC}" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 108,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 107,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent", children: "MANIFEST YOUR DREAM REALITY" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl mb-4 text-blue-200", children: "CREATING A VIDEO MEMORY OF YOUR FUTURE" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl font-bold mb-8", children: [
      "MIND MOVIE",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl italic font-light", children: "Mastery Template" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 121,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed", children: "Welcome to your Mind Movie Template\u2014a powerful tool designed to help you visualize and manifest your dreams. Inspired by the teachings of Dr. Joe Dispenza, this method combines quantum physics, brainwave state activation, clear intentions, affirmations, high vibrational frequencies, and elevated emotion." }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentStep("category-select"), className: "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl", children: "Create Your Mind Movie" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-16 grid md:grid-cols-3 gap-8 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl mb-4", children: "\u{1F9E0}" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-2", children: "Neuroscience-Backed" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300", children: "Based on Dr. Joe Dispenza's groundbreaking research in quantum physics and consciousness" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl mb-4", children: "\u2728" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-2", children: "High Vibration" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300", children: "Combines elevated emotions with clear intentions to align with your desired reality" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl mb-4", children: "\u{1F3AF}" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-2", children: "Personalized" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300", children: "Custom affirmations and visualizations tailored to your unique goals and dreams" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 104,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 101,
    columnNumber: 31
  }, this);
  const renderCategorySelect = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto max-w-6xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl font-bold mb-4", children: "Choose Your Life Category" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-300", children: "Select an area of your life you want to manifest and transform" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 text-sm text-gray-400", children: [
        "Progress: ",
        intentions.length,
        "/9 categories completed"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 158,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-3 gap-6", children: LIFE_CATEGORIES.map((category) => {
      const isCompleted = intentions.some((i) => i.category === category.key);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleCategorySelect(category.key), className: `p-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 text-left ${isCompleted ? "bg-green-900/50 border-green-500 text-green-100" : "bg-white/10 border-purple-400 hover:border-gold-400 hover:bg-white/20"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-2", children: [
          isCompleted && "\u2705 ",
          category.label
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300 text-sm", children: category.description }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this)
      ] }, category.key, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 169,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this),
    intentions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentStep("review"), className: "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-3 px-8 rounded-full transition-all duration-300", children: [
      "Review My Intentions (",
      intentions.length,
      ")"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 179,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 178,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 157,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 156,
    columnNumber: 38
  }, this);
  const renderIntentionSetting = () => {
    const categoryInfo = LIFE_CATEGORIES.find((c) => c.key === selectedCategory);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto max-w-4xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold mb-2", children: "Set Your Intention" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl text-gold-400", children: categoryInfo?.label }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300 mt-2", children: categoryInfo?.description }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg font-semibold mb-2", children: [
            "What is your specific intention for ",
            categoryInfo?.label.toLowerCase(),
            "?"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 198,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300", rows: 3, placeholder: "Be specific and detailed about what you want to manifest...", value: currentIntention.description || "", onChange: (e) => setCurrentIntention({
            ...currentIntention,
            description: e.target.value
          }) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 197,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg font-semibold mb-2", children: "What will achieving this intention give you?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300", placeholder: "What immediate benefit will this bring?", value: currentIntention.whatItGives || "", onChange: (e) => setCurrentIntention({
            ...currentIntention,
            whatItGives: e.target.value
          }) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 207,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg font-semibold mb-2", children: "And what will THAT give you?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 218,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300", placeholder: "Dig deeper - what's the benefit of that benefit?", value: currentIntention.deeperGiving || "", onChange: (e) => setCurrentIntention({
            ...currentIntention,
            deeperGiving: e.target.value
          }) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 221,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg font-semibold mb-2", children: "And what will THAT ultimately give you?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300", placeholder: "What's the deepest benefit - the core desire?", value: currentIntention.ultimateGiving || "", onChange: (e) => setCurrentIntention({
            ...currentIntention,
            ultimateGiving: e.target.value
          }) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 231,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg font-semibold mb-2", children: "How will achieving this make you FEEL?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 238,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300", placeholder: "Describe the emotions you'll experience...", value: currentIntention.feeling || "", onChange: (e) => setCurrentIntention({
            ...currentIntention,
            feeling: e.target.value
          }) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 241,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg font-semibold mb-2", children: "Why is this intention important to you?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 248,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300", rows: 3, placeholder: "Connect with your deeper 'why' - what makes this meaningful?", value: currentIntention.importance || "", onChange: (e) => setCurrentIntention({
            ...currentIntention,
            importance: e.target.value
          }) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 251,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentStep("category-select"), className: "flex-1 py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors", children: "Back to Categories" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 258,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleIntentionComplete, disabled: !currentIntention.description, className: "flex-1 py-3 px-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:from-gray-500 disabled:to-gray-600 text-black font-bold rounded-lg transition-all", children: "Create Affirmation" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 261,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 187,
      columnNumber: 12
    }, this);
  };
  const renderAffirmationCreation = () => {
    _s();
    const [affirmationText, setAffirmationText] = (0, import_react.useState)("");
    const categoryInfo = LIFE_CATEGORIES.find((c) => c.key === selectedCategory);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto max-w-4xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold mb-2", children: "Create Your Affirmation" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl text-gold-400", children: categoryInfo?.label }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 278,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-semibold mb-3", children: "Your Intention:" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 283,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300 bg-white/10 p-4 rounded-lg", children: currentIntention.description }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 282,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg font-semibold mb-2", children: "Write a powerful affirmation that embodies this intention:" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400 mb-3", children: `Use present tense, positive language, and speak as if it's already your reality. Examples: "I am financially abundant and free", "I radiate love and attract my perfect partner"` }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 293,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "w-full p-3 bg-white/20 border border-purple-400 rounded-lg text-white placeholder-gray-300", rows: 3, placeholder: "I am...", value: affirmationText, onChange: (e) => setAffirmationText(e.target.value) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 297,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 289,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-900/30 p-4 rounded-lg mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "font-semibold mb-2", children: "\u{1F4A1} Affirmation Tips:" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 301,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-gray-300 space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: '\u2022 Use "I am" statements for identity-based affirmations' }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 303,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "\u2022 Include emotional words that make you feel elevated" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "\u2022 Be specific about your desires" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 305,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "\u2022 Write in present tense as if it's happening now" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 306,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 300,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentStep("intention-setting"), className: "flex-1 py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors", children: "Back to Intention" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 311,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleAffirmationComplete(affirmationText), disabled: !affirmationText.trim(), className: "flex-1 py-3 px-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:from-gray-500 disabled:to-gray-600 text-black font-bold rounded-lg transition-all", children: "Save & Continue" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 314,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 310,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 281,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 275,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 274,
      columnNumber: 12
    }, this);
  };
  _s(renderAffirmationCreation, "iqQEuSRjDOhEOI9g/Ffi8/GNdn8=");
  const renderReview = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto max-w-6xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold mb-2", children: "Your Mind Movie Blueprint" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 326,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300", children: "Review your intentions and affirmations before creating your mind movie" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 327,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 325,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: intentions.map((intention, index) => {
      const affirmation = affirmations.find((a) => a.category === intention.category);
      const categoryInfo = LIFE_CATEGORIES.find((c) => c.key === intention.category);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gold-400 mb-3", children: categoryInfo?.label }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 335,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-sm text-gray-300", children: "INTENTION:" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 338,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: intention.description }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 339,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 337,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-sm text-gray-300", children: "AFFIRMATION:" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 342,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm italic", children: [
              '"',
              affirmation?.text,
              '"'
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 343,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 341,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-sm text-gray-300", children: "FEELING:" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 346,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: intention.feeling }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 347,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 345,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 336,
          columnNumber: 17
        }, this)
      ] }, intention.category, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 334,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 330,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentStep("category-select"), className: "mr-4 py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors", children: "Add More Categories" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 355,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "py-4 px-12 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold rounded-full text-xl transition-all transform hover:scale-105", children: "Create My Mind Movie \u2728" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 358,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400 mt-4", children: "Your personalized video will be generated with kaleidoscope visuals, your affirmations, and high-vibrational music" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 361,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 354,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 324,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 323,
    columnNumber: 30
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    currentStep === "landing" && renderLanding(),
    currentStep === "category-select" && renderCategorySelect(),
    currentStep === "intention-setting" && renderIntentionSetting(),
    currentStep === "affirmation-creation" && renderAffirmationCreation(),
    currentStep === "review" && renderReview()
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 367,
    columnNumber: 10
  }, this);
}
_s2(Index, "TnS6zF2xKFgwnqtmrYhy7fEkKf4=");
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-3V45WAMK.js.map
