import React from 'react';

// Define the props type for the Badge component
interface BadgeProps {
  label: string;
}

// Badge component
const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="bg-purple-100 text-purple-500 text-xs font-semibold mr-1 px-2 py-0.5 rounded-full shadow-sm hover:shadow-lg transition-shadow duration-300">
      {label}
    </span>
  );
};

// BadgeList component
const BadgeList: React.FC = () => {
  const badges: string[] = [
    'Funny',
    'Professional',
    'Happy',
    'Serious',
    'Sad',
    'Excitement',
    'Curious',
    'Motivated',
    'Inquisitive',
    'Creative',
  ];

  return (
    <div className="flex flex-wrap mt-5 items-center gap-2 justify-center my-2">
      {badges.map((badge, index) => (
        <Badge key={index} label={badge} />
      ))}
    </div>
  );
};

export default BadgeList;
