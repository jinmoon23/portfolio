import React from "react";

interface ProjectContentProps {
  period: string;
  projectName: string;
  roles: string[];
  description: string[];
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  period,
  projectName,
  roles,
  description,
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-base sm:text-lg font-semibold">
        <span className="text-gray-600 dark:text-gray-400 transition-colors">
          {period}
        </span>
        <span className="font-bold text-gray-900 dark:text-gray-100 transition-colors">
          {projectName}
        </span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
            본인의 역할:
          </h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
            {roles.map((role, index) => (
              <li key={index} className="ml-2 sm:ml-4">
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
            프로젝트 내용:
          </h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors">
            {description.map((item, index) => (
              <li key={index} className="ml-2 sm:ml-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
