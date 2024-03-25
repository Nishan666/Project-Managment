import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, //undefined->nothing , null->starded Adding , id->selected
    projects: [],
    tasks: [],
  });

  const handleAddTask = (task) => {
    setProjectState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prev.selectedProjectId,
        id: taskId,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    const updateTask = projectState.tasks.filter((item) => item.id !== id);
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: [...updateTask],
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const handleCancel = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleDelete = () => {
    const updatedProject = projectState.projects.filter(
      (item) => item.id !== projectState.selectedProjectId
    );
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...updatedProject],
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null)
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  else if (projectState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
