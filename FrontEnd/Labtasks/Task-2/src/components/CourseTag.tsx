import PropTypes from 'prop-types';

interface CourseTagProps {
  name: string;
  color: string;
}

export default function Coursetag({ name, color }: CourseTagProps) {
  return (
    <span
      className="flex items-center justify-center px-3 py-1 rounded-full text-white font-bold text-sm hover:shadow-md transition"
      style={{ backgroundColor: color }}
      title={name}
    >
      {name}
    </span>
  );
}

Coursetag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};