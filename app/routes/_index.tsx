// app/routes/mind-movie.tsx
import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Create Your Mind Movie - Transform Your Dreams Into Reality" },
    { name: "description", content: "Transform your dreams into a powerful visual experience that rewires your subconscious mind for success" },
  ];
};

interface ActionData {
  success?: boolean;
  error?: string;
  data?: {
    name: string;
    goal: string;
    vision: string;
    emotion: string;
    quote: string;
    music: string;
    images: string;
    deadline: string;
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  const data = {
    name: formData.get("name") as string,
    goal: formData.get("goal") as string,
    vision: formData.get("vision") as string,
    emotion: formData.get("emotion") as string,
    quote: formData.get("quote") as string,
    music: formData.get("music") as string,
    images: formData.get("images") as string,
    deadline: formData.get("deadline") as string,
  };

  // Validate required fields
  if (!data.name || !data.goal || !data.vision) {
    return json<ActionData>({ 
      error: "Please fill in all required fields (Name, Goal, and Vision)" 
    });
  }

  try {
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Create the mind movie
    // 4. Integrate with your backend services
    
    console.log("Mind Movie Request:", data);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return json<ActionData>({ success: true, data });
  } catch (error) {
    return json<ActionData>({ 
      error: "Something went wrong. Please try again." 
    });
  }
}

export default function MindMovieLanding() {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          * {
            font-family: 'Inter', sans-serif;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          
          .hero-gradient {
            background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #ffeaa7 100%);
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .floating {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite alternate;
          }
          
          @keyframes pulseGlow {
            from { box-shadow: 0 0 20px rgba(147, 51, 234, 0.4); }
            to { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.4); }
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .text-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
          
          .section-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
          }
          
          .animate-reveal {
            opacity: 1;
            transform: translateY(0);
          }
          
          .testimonial-card {
            background: linear-gradient(145deg, #ffffff, #f3f4f6);
            box-shadow: 20px 20px 60px #d1d5db, -20px -20px 60px #ffffff;
          }
        `
      }} />

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-20 rounded-full blur-xl"></div>
          <div className="floating absolute top-40 right-20 w-24 h-24 bg-purple-300 bg-opacity-30 rounded-full blur-lg" style={{animationDelay: '-2s'}}></div>
          <div className="floating absolute bottom-40 left-1/4 w-20 h-20 bg-blue-300 bg-opacity-25 rounded-full blur-lg" style={{animationDelay: '-4s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="section-reveal">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Create Your
              <span className="block text-yellow-300">Mind Movie</span>
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 max-w-3xl mx-auto font-light">
              Transform your dreams into a powerful visual experience that rewires your subconscious mind for success
            </p>
            <div className="pulse-glow inline-block">
              <a href="#form" className="bg-white text-purple-600 font-bold py-6 px-12 rounded-full text-xl hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Unique Selling Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-reveal">
            <h2 className="text-5xl font-bold text-gradient mb-6">
              Visualize. Believe. Achieve.
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              The only platform that combines neuroscience, psychology, and cutting-edge technology to create personalized mind movies that accelerate your success
            </p>
          </div>
          
          {/* USP Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-3xl hover-lift text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Scientifically Proven</h3>
              <p className="text-gray-600">Based on neuroscience research showing visualization increases achievement by 42%</p>
            </div>
            
            <div className="glass-effect p-8 rounded-3xl hover-lift text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast Results</h3>
              <p className="text-gray-600">Users report mindset shifts within 7 days of consistent viewing</p>
            </div>
            
            <div className="glass-effect p-8 rounded-3xl hover-lift text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Personalized</h3>
              <p className="text-gray-600">Tailored to your specific goals, emotions, and preferred aesthetic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engaging Visuals Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-reveal">
            <h2 className="text-5xl font-bold text-white mb-6">See Your Future, Feel Your Success</h2>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Every mind movie is a cinematic masterpiece featuring you as the star of your own success story
            </p>
          </div>
          
          {/* Demo Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Watch Sample Mind Movie</h3>
                  <p className="text-white text-opacity-70">See how visualization transforms dreams into reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-reveal">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Trusted by Achievers Worldwide</h2>
            <p className="text-xl text-gray-600">Join over 50,000 people who've transformed their lives</p>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 mb-16 text-center">
            <div className="section-reveal">
              <div className="text-4xl font-bold text-purple-600 mb-2">50k+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="section-reveal">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="section-reveal">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="section-reveal">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
          
          Testimonials
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Prakash Raj",
                role: "Working for Pegasus Innovations",
                initials: "BPR",
                color: "purple",
                text: "My mind movie helped me visualize my business success. Within 6 months, I doubled my revenue. The power of visualization is real!"
              },
              {
                name: "Vyash Natrajan",
                role: "Data Analyst",
                initials: "VN",
                color: "blue",
                text: "Watching my mind movie every morning transformed my performance. I achieved my Olympic dream using these visualization techniques."
              },
              {
                name: "Anna Lee",
                role: "Artist",
                initials: "AL",
                color: "green",
                text: "I was stuck in a creative rut for years. My personalized mind movie reignited my passion and led to my first gallery exhibition."
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card p-8 rounded-3xl hover-lift">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${testimonial.color}-100 rounded-full flex items-center justify-center mr-4`}>
                    <span className={`text-${testimonial.color}-600 font-bold`}>{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section - Call to Action */}
      <section id="form" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 section-reveal">
              <h2 className="text-5xl font-bold text-white mb-6">Create Your Mind Movie Now</h2>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Fill out the form below and we'll create a personalized mind movie that aligns with your deepest aspirations
              </p>
              <div className="inline-flex items-center bg-yellow-400 text-purple-800 px-6 py-3 rounded-full font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Limited Time: Free Consultation Included
              </div>
            </div>
            
            <div className="glass-effect p-8 md:p-12 rounded-3xl shadow-2xl">
              {actionData?.success && (
                <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-400 rounded-lg text-white">
                  <h3 className="font-semibold mb-2">Success! 🎉</h3>
                  <p>Thank you {actionData.data?.name}! We'll create your personalized mind movie and contact you within 24 hours.</p>
                </div>
              )}
              
              {actionData?.error && (
                <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-400 rounded-lg text-white">
                  <p>{actionData.error}</p>
                </div>
              )}

              <Form method="post" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Your Name *</label>
                    <input
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Deadline</label>
                    <input
                      name="deadline"
                      placeholder="When will this come true?"
                      className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Your Main Goal or Affirmation *</label>
                  <textarea
                    name="goal"
                    required
                    rows={3}
                    placeholder="Describe your primary goal in detail..."
                    className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Visualize Your Ideal Future *</label>
                  <textarea
                    name="vision"
                    required
                    rows={4}
                    placeholder="Paint a vivid picture of your success..."
                    className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Emotions You'll Feel Achieving It</label>
                  <textarea
                    name="emotion"
                    rows={3}
                    placeholder="Describe the feelings of accomplishment..."
                    className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Favorite Motivational Quote</label>
                    <input
                      name="quote"
                      placeholder="Your power quote..."
                      className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Preferred Music Style</label>
                    <input
                      name="music"
                      placeholder="Epic, calm, energetic..."
                      className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Image URLs (Optional)</label>
                  <input
                    name="images"
                    placeholder="Add personal images that represent your goals (comma separated URLs)"
                    className="w-full p-4 border-2 border-white border-opacity-30 rounded-xl bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="pulse-glow bg-yellow-400 text-purple-800 font-bold py-5 px-12 rounded-full text-xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-800 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Your Mind Movie...
                      </>
                    ) : (
                      <>
                        Create My Mind Movie
                        <svg className="w-6 h-6 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-white text-opacity-70 text-sm mt-4">
                    ✓ 100% Free Consultation ✓ 30-Day Money Back Guarantee ✓ Instant Download
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
          <p className="text-gray-400 mb-6">Your mind movie is waiting. Your future self is counting on you.</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>© 2025 Mind Movie Creator</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}