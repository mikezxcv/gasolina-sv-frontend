import { useState } from "react";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem";
import Button from "@/ui/button/Button";
import { FaSlidersH } from "react-icons/fa";

const DropdownFilters: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    return (
        <div className="relative inline-block">
            <Button
                variant="secondary"
                
                onClick={toggleDropdown}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-lg dropdown-toggle bg-brand-500 hover:bg-brand-600">
                <FaSlidersH className="w-4 h-4" />
                Filtros
            </Button>

            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute left-0 top-full z-40 mt-2 w-full min-w-[260px] rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-[#1E2635]"
            >
                <ul className="flex flex-col gap-1">
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            className="flex rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-100 dark:text-gray-300
              dark:hover:bg-white/5"
                        >
                            Edit Profile
                        </DropdownItem>
                    </li>
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            className="flex rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-100 dark:text-gray-300
              dark:hover:bg-white/5"
                        >
                            Account Settings
                        </DropdownItem>
                    </li>
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            className="flex rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-100 dark:text-gray-300
              dark:hover:bg-white/5"
                        >
                            License
                        </DropdownItem>
                    </li>
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            className="flex rounded-lg px-3 py-2.5 text-sm font-medium
              text-gray-700 hover:bg-gray-100 dark:text-gray-300
              dark:hover:bg-white/5"
                        >
                            Support
                        </DropdownItem>
                    </li>
                </ul>
            </Dropdown>
        </div>
    );
};

export default DropdownFilters;
