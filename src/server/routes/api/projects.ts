import projectsData from "../../model/projects.json";
const projectsDB = {
  projects: projectsData,
  setProjects: function (data: any) {
    this.projects = data;
  },
};

import express from "express";
const router = express.Router();

router.route("/").get((req, res) => {
  res.json(projectsDB.projects);
});

export default router;
