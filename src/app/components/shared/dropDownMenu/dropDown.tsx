import { useState } from 'react';
import { PiRankingBold } from "react-icons/pi";

type Option = {
  name: string,
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  ref: string
}

interface DropdownProps {
  options: Option[];
  onSelect: (selectedOption: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder = 'Players ranking' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <div
          onClick={toggleDropdown}
          className="flex justify-center items-center lg:gap-2 gap-0 w-full rounded-md shadow-sm
          lg:text-lg text-sm font-base text-secondary-100 duration-150
          hover:text-primary-500/75 select-none cursor-pointer"
        >
          <PiRankingBold />
          {placeholder}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56
                        rounded-md shadow-lg bg-secondary-800 z-90
                        left-0">
          <div className="py-1">
            {
              options.map((option, index) => {
                const Icon = option.icon
                return (
                  <div
                    key={index}
                    onClick={() => handleSelect(option.ref)}
                    className="flex items-center justify-left text-secondary-100 hover:text-primary-600/90
                    lg:gap-2 p-2 duration-150 cursor-pointer z-90"
                  >
                    <Icon />
                    <>
                      {option.name}
                    </>
                  </div>
                )
              })
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;