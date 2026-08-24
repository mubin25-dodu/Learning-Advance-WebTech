import PropTypes from 'prop-types';

interface SortControlsProps {
  sortBy: 'default' | 'name' | 'gpa';
  onSortChange: (sortBy: 'default' | 'name' | 'gpa') => void;
}

export default function SortControls({ sortBy, onSortChange }: SortControlsProps) {
  const sortOptions: Array<{ value: 'default' | 'name' | 'gpa'; label: string }> = [
    { value: 'default', label: 'Default Order' },
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'gpa', label: 'GPA (High to Low)' },
  ];

  return (
    <div className="mb-6 flex gap-3 flex-wrap">
      <span className="font-semibold text-gray-700 self-center">Sort by:</span>
      {sortOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onSortChange(option.value)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            sortBy === option.value
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

SortControls.propTypes = {
  sortBy: PropTypes.oneOf(['default', 'name', 'gpa']).isRequired,
  onSortChange: PropTypes.func.isRequired,
};
