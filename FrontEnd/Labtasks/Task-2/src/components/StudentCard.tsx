import { useState } from 'react';
import PropTypes from 'prop-types';
import Coursetag from "./CourseTag";
import Statbadge from "./StatBadge";

interface EnrolledCourse {
  name: string;
  color: string;
}

interface StudentCardProps {
  name: string;
  id: number;
  avatar: string;
  gpa: number;
  major: string;
  enrolled: EnrolledCourse[];
  onFavoriteToggle: (id: number) => void;
  isFavorite: boolean;
}

export default function Studentinfo({
  name,
  id,
  avatar,
  gpa,
  major,
  enrolled,
  onFavoriteToggle,
  isFavorite,
}: StudentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-300 p-5 w-96 flex flex-col gap-3">
      {/* Header with Avatar and Favorite Button */}
      <div className="flex justify-between items-start">
        <img className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover" src={avatar} alt={name} />
        <button
          onClick={() => onFavoriteToggle(id)}
          className={`text-2xl transition ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          ♡
        </button>
      </div>

      {/* Student Info */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{major}</p>
      </div>

      {/* Stats */}
      <div className="flex gap-4">
        <Statbadge label="GPA" value={gpa} />
        <Statbadge label="ID" value={id} />
      </div>

      {/* Enrolled Courses */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Enrolled Courses</h3>
        <div className="flex flex-wrap gap-2">
          {enrolled.map((course, index) => (
            <Coursetag key={index} name={course.name} color={course.color} />
          ))}
        </div>
      </div>
    </div>
  );
}
