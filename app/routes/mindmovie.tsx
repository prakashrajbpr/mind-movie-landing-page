// app/routes/mind-movie.tsx
import { MetaFunction } from "@remix-run/node";
import EnhancedMindMovieWizard from "~/components/EnhancedMindMovieWizard";

export const meta: MetaFunction = () => {
  return [
    { title: "Create Your Mind Movie - Transform Your Dreams Into Reality" },
    { name: "description", content: "Transform your dreams into a powerful visual experience that rewires your subconscious mind for success." },
  ];
};

export default function MindMoviePage() {
  return (
    <div>
      <EnhancedMindMovieWizard />
    </div>
  );
}
