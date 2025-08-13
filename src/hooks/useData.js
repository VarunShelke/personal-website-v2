import { jobs, featured, projects } from '@data';

export const useJobs = () => {
  return jobs;
};

export const useFeatured = () => {
  return featured;
};

export const useProjects = () => {
  return projects.filter(project => project.showInProjects);
};

export const useAllProjects = () => {
  return projects;
};

export default {
  useJobs,
  useFeatured,
  useProjects,
  useAllProjects,
};
