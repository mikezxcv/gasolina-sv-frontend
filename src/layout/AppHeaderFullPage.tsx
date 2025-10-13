import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import { FaGasPump } from "react-icons/fa";
const AppHeaderFullPage: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center gap-3 flex-shrink-0 button">
          <ThemeToggleButton />
          <button onClick={() => window.location.href = '/'}>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-tight whitespace-nowrap">
              <FaGasPump className="inline-block mr-2 text-blue-600" />
              {process.env.NEXT_PUBLIC_APP_NAME || "Gasolina SV"}
            </h1>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeaderFullPage;