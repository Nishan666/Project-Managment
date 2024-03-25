import React from "react";
import Button from "./Button";

const ProjectSideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <>
      <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 rounded-e-xl px-8 py-16">
        <h2 className="md:text-2xl mb-8 font-bold uppercase text-stone-200">
          Your Projects
        </h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
          {projects.map((item) => {
            let cssClasses =
              "my-1 w-full text-left px-2 py-1 rounded-sm hover:bg-slate-800";
            if (item.id === selectedProjectId)
              cssClasses += " bg-stone-800 text-stone-200";
            else cssClasses += " text-stone-400";

            return (
              <li key={item.id}>
                <button
                  onClick={() => onSelectProject(item.id)}
                  className={cssClasses}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default ProjectSideBar;
