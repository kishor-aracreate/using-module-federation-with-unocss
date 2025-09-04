import { Button } from "my-ui-lib";

export default function App() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-lg border border-purple-500/30 bg-gradient-to-br from-purple-950 via-purple-900 to-black text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-purple-400 mb-4 tracking-wide">
          Remote Application
        </h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          This content is rendered from the{" "}
          <span className="text-purple-300 font-semibold">remote project</span>.
        </p>
        <Button variant="primary">Remote Button</Button>
      </div>
    </div>
  );
}
