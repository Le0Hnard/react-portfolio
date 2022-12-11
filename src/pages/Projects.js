import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
// import Link from "../components/Link";
import List from "../components/List";

const Projects = ({ userName }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const result = await data.json();

      if (result) {
        setProjects(result);
        setLoading(false);
      }
    }

    fetchData();
  }, [userName]);

  return (
    <div className="Projects-container">
      <h2>Projects</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={projects.map((project) => ({
              field: project.name,
              url: project.html_url,
              // value: <Link url={project.html_url} title={project.html_url} />,
              value: (
                <RouterLink to={`/projects/${project.name}`}>
                  {project.html_url}
                </RouterLink>
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
