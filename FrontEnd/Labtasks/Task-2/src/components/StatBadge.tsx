import PropTypes from 'prop-types';

interface StatBadgeProps {
  label: string;
  value: string | number;
}

export default function Statbadge({ label, value }: StatBadgeProps) {
  return (
    <div className="flex gap-2 items-center bg-gray-100 px-3 py-1 rounded">
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="font-bold text-green-600">{value}</span>
    </div>
  );
}

Statbadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};