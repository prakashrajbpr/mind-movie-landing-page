// app/utils/promptGenerator.ts

export interface MindMovieFormData {
  name: string;
  intention: string;
  goal: string;
  vision: string;
  emotions: string;
  quote: string;
  musicStyle: string;
  imageUrls?: string[];
}

export function generateMindMoviePrompts(data: MindMovieFormData) {
  const { name, intention, goal, vision, emotions, quote, musicStyle } = data;

  const affirmationPrompt = `Create a short, powerful affirmation for someone whose goal is: "${goal}". The tone should be confident, uplifting, and emotionally resonant.`;

  const imagePrompt = `Generate an image that represents the following vision: "${vision}". Style: cinematic, realistic. Emotion: ${emotions}. Context: ${intention} goal.`;

  const videoSceneInstructions = [
    `Scene 1: Visualize the person named ${name} achieving this goal: "${goal}".`,
    `Scene 2: Show a symbolic image of success and fulfillment – maybe them living their dream life.`,
    `Overlay text: "${quote}". Background music style: ${musicStyle}.`,
  ];

  return {
    affirmationPrompt,
    imagePrompt,
    videoSceneInstructions,
  };
}
