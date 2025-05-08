import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-[#18191a]">
      <main className="flex flex-col gap-8 items-center max-w-2xl w-full">
        <div className="bg-[#232526] border border-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center gap-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-100 text-center tracking-tight mb-2">What is MCP?</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4 text-center">Model Context Protocol</h2>
          <section className="text-base sm:text-lg leading-relaxed text-gray-200 text-center font-serif">
            <p className="mb-4">
              <strong>Model Context Protocol (MCP)</strong> is an open standard that acts like a USB port for AI tools and agents. MCP provides a universal, plug-and-play way for AI models to connect with external data sources, tools, and environments—eliminating the need for custom integrations for every database, API, or file system.
            </p>
            <p className="mb-4">
              By standardizing how context is shared, MCP enables AI assistants and applications to access both local and remote services securely, build complex workflows, and leverage the best tools and knowledge available. This makes AI solutions more flexible, powerful, and easy to integrate—just like plugging a device into a USB port.
            </p>
            <p>
              MCP is open, extensible, and widely adopted by leading AI platforms and developer tools. For more information, visit the official documentation or community resources.
            </p>
          </section>
          <a
            href="/learn-more"
            className="mt-4 inline-block px-6 py-2 rounded border border-gray-500 bg-[#232526] text-gray-100 font-semibold shadow hover:bg-[#2c2f31] transition-colors duration-150"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
