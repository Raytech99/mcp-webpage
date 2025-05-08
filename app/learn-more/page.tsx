import Image from "next/image";

export default function LearnMore() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-[#18191a]">
      <main className="flex flex-col gap-8 items-center max-w-2xl w-full">
        <div className="bg-[#232526] border border-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center gap-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-100 text-center tracking-tight mb-2">Popular MCP Use Cases & Servers</h1>
          <section className="text-base sm:text-lg leading-relaxed text-gray-200 text-center font-serif">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Most Popular Use Cases for MCP</h2>
            <ul className="mb-6 list-disc list-inside text-left text-gray-200">
              <li><strong>AI Agent Interoperability:</strong> Seamlessly connect multiple AI agents and tools, enabling them to share context and collaborate on complex tasks.</li>
              <li><strong>Enterprise Workflow Automation:</strong> Integrate AI models with business tools (e.g., Jira, Confluence) to automate processes and enhance productivity.</li>
              <li><strong>Multi-Modal Data Integration:</strong> Combine text, images, and other data types for richer AI-driven applications.</li>
              <li><strong>Contextual Chatbots & Virtual Assistants:</strong> Build smarter assistants that leverage shared context for more relevant responses.</li>
              <li><strong>Advanced Analytics & Reporting:</strong> Use MCP to aggregate and analyze data from multiple sources for actionable insights.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Most Popular MCP Servers</h2>
            <ul className="mb-6 list-disc list-inside text-left text-gray-200">
              <li><strong><a href="https://portkey.ai/mcp-servers" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Portkey's MCP Servers Directory</a>:</strong> A widely referenced directory listing active and trusted MCP servers.</li>
              <li><strong><a href="https://mcp.so" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">MCP.so</a>:</strong> A community-driven platform curating server listings, best practices, and user reviews.</li>
              <li><strong>Composio:</strong> Tooling and orchestration for MCP environments, supporting easy integration of new sources and agents. <span className="text-xs">(See Composio website for MCP portal; no direct link found)</span></li>
              <li><strong>Glama:</strong> Multi-modal client and server directory, popular for discovering servers supporting text, images, and more. <span className="text-xs">(Check Glama's official site; no direct link found)</span></li>
              <li><strong><a href="https://github.com/modelcontextprotocol/servers" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Official MCP Servers Repository</a>:</strong> The authoritative source for baseline and reference MCP implementations.</li>
              <li><strong>Atlassian's Remote MCP Server:</strong> Integrates Atlassian products (Jira, Confluence) with AI platforms. <span className="text-xs">(Check Atlassian dev docs; no direct link found)</span></li>
              <li><strong>AWS, GitHub, OpenAI MCP Servers:</strong> Major tech companies' servers for connecting proprietary services and cloud resources. <span className="text-xs">(See in <a href="https://github.com/modelcontextprotocol/servers" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">GitHub repo</a> or main directories)</span></li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">Sources: Portkey, MCP.so, Atlassian, AWS, GitHub, OpenAI, Glama, Official MCP Repository, Perplexity AI</p>
          </section>
          <a
            href="/"
            className="mt-4 inline-block px-6 py-2 rounded border border-gray-500 bg-[#232526] text-gray-100 font-semibold shadow hover:bg-[#2c2f31] transition-colors duration-150"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
} 