import { Suspense, lazy } from "react";
import { Button } from "my-ui-lib";

const RemoteApp = lazy(() => import("remote/App"));

export default function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-12 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl items-center">
        {/* Left Column - Core (Host) */}
        <div>
          <h1 className="text-5xl font-bold tracking-wide mb-4">John Doe</h1>
          <p className="text-xl text-gray-300 mb-6">
            Full Stack Developer • Open Source Enthusiast
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
            Crafting seamless digital experiences with modern tools, scalable
            architecture, and an eye for design.
          </p>

          {/* Social links */}
          <div className="flex gap-6 text-3xl mb-8">
            <a
              className="i-carbon-logo-github hover:text-gray-200 transition-colors duration-300"
              href="https://github.com/username"
              target="_blank"
              aria-label="GitHub"
            />
            <a
              className="i-carbon-logo-linkedin hover:text-gray-200 transition-colors duration-300"
              href="https://linkedin.com/in/username"
              target="_blank"
              aria-label="LinkedIn"
            />
            <a
              className="i-carbon-logo-twitter hover:text-gray-200 transition-colors duration-300"
              href="https://twitter.com/username"
              target="_blank"
              aria-label="Twitter"
            />
            <a
              className="i-carbon-email hover:text-gray-200 transition-colors duration-300"
              href="mailto:john@example.com"
              aria-label="Email"
            />
          </div>

          <Button variant="secondary">Click me</Button>
        </div>

        {/* Right Column - Remote */}
        <div className="p-6 border border-cyan-500 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-cyan-400">Remote App</h2>
          <Suspense
            fallback={<div className="text-gray-400">Loading Remote...</div>}
          >
            <RemoteApp />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
