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
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-gray-600">{period}</span>
        <span className="font-bold">{projectName}</span>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">본인의 역할:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {roles.map((role, index) => (
              <li key={index} className="ml-4">
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">프로젝트 내용:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {description.map((item, index) => (
              <li key={index} className="ml-4">
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
