import { Form } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-2">
          Create Your Mind Movie 🎬
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Turn your dream into a cinematic reality.
        </p>

        <Form method="post" className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="goal"
            placeholder="Your Main Goal or Affirmation"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="vision"
            placeholder="Visualize your ideal future"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="emotion"
            placeholder="Emotions you'll feel achieving it"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="quote"
            placeholder="Favorite Motivational Quote"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="music"
            placeholder="Preferred Music Style"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="images"
            placeholder="Image URLs (comma separated)"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="deadline"
            placeholder="When will this come true?"
            className="text-black w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit & Visualize ✨
          </button>
        </Form>
      </div>
    </div>
  );
}
