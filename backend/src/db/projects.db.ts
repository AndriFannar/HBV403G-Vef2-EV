/**
 * @file projects.db.ts
 * @description Contains the database functions for the projects endpoint of the API.
 * @author Andri Fannar Kristjánsson
 * @version 1.0.0
 * @date March 26, 2025
 * @dependencies @prisma/client, projects.js
 */

import type { NewProject, BaseProject, Project } from '../entities/project.js';
import { PrismaClient, ProjectCounterType } from '@prisma/client';
import { generateSlug } from '../lib/slugUtils.js';
import { randomInt } from 'crypto';

const MAX_RANDINT = 281474976710655;
const DEF_NUM_FULL_PROJECTS = 3;
const DEF_NUM_PROJECTS = 10;

export const prisma = new PrismaClient();

/**
 * Gets all projects.
 * @param limit - The maximum number of projects to return at a time.
 * @param offset - The number of projects to skip.
 * @returns - All projects between the limit and offset, if provided. Otherwise, gets 10 projects.
 *            If there are no projects, returns an empty array.
 */
export async function getAllProjects(
  limit: number = DEF_NUM_PROJECTS,
  offset: number = 0
): Promise<Array<BaseProject>> {
  const projects = await prisma.project.findMany({
    skip: offset,
    take: limit,
  });
  return projects ?? [];
}

/**
 * Gets base projects by a user ID.
 * @param userId - The ID of the user to get the projects for.
 * @param limit - The maximum number of projects to return at a time.
 * @param offset - The number of projects to skip.
 * @returns - The projects for the user ID, if they exist. Otherwise, returns an empty array.
 */
export async function getProjectSummaryByUserId(
  userId: number,
  limit: number = DEF_NUM_PROJECTS,
  offset: number = 0
): Promise<Array<BaseProject>> {
  const projects = await prisma.project.findMany({
    skip: offset,
    take: limit,
    where: {
      ownerId: userId,
    },
  });
  return projects ?? [];
}

/**
 * Gets projects by a user ID.
 * @param userId - The ID of the user to get the projects for.
 * @returns - The projects for the user ID, if they exist. Otherwise, returns an empty array.
 */
export async function getProjectsByUserId(
  userId: number,
  limit: number = DEF_NUM_FULL_PROJECTS,
  offset: number = 0
): Promise<Array<Project>> {
  const projects = await prisma.project.findMany({
    skip: offset,
    take: limit,
    where: {
      ownerId: userId,
    },
    include: {
      useCases: {
        include: {
          conditions: true,
          flows: {
            include: {
              steps: {
                include: {
                  refs: true,
                },
              },
            },
          },
          businessRules: true,
          primaryActor: true,
          secondaryActors: true,
          useCaseSequences: true,
        },
      },
      actors: true,
      businessRules: true,
      projectSequences: true,
    },
  });
  return projects ?? [];
}

/**
 * Gets a project by slug.
 * @param id - The slug of the project to fetch.
 * @returns - The project corresponding to given slug, if it exists. Otherwise, returns null.
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = await prisma.project.findFirst({
    where: {
      slug: slug,
    },
    include: {
      useCases: {
        include: {
          conditions: true,
          flows: {
            include: {
              steps: {
                include: {
                  refs: true,
                },
              },
            },
          },
          businessRules: true,
          primaryActor: true,
          secondaryActors: true,
          useCaseSequences: true,
        },
      },
      actors: true,
      businessRules: true,
      projectSequences: true,
    },
  });
  return project ?? null;
}

/**
 * Gets a project summary (without relations) by ID.
 * @param id - The ID of the project to fetch.
 * @returns - The project corresponding to given ID, if it exists. Otherwise, returns null.
 */
export async function getProjectSummaryById(
  id: number
): Promise<BaseProject | null> {
  const project = await prisma.project.findFirst({
    where: {
      id: id,
    },
  });
  return project ?? null;
}

/**
 * Gets a project by ID.
 * @param id - The ID of the project to fetch.
 * @returns - The project corresponding to given ID, if it exists. Otherwise, returns null.
 */
export async function getProjectById(id: number): Promise<Project | null> {
  const project = await prisma.project.findFirst({
    where: {
      id: id,
    },
    include: {
      useCases: {
        include: {
          conditions: true,
          flows: {
            include: {
              steps: {
                include: {
                  refs: true,
                },
              },
            },
          },
          businessRules: true,
          primaryActor: true,
          secondaryActors: true,
          useCaseSequences: true,
        },
      },
      actors: true,
      businessRules: true,
      projectSequences: true,
    },
  });
  return project ?? null;
}

/**
 * Creates a new project.
 * @requires ownerId to be set in the project object.
 * @param project - The new project to create.
 * @throws Error if the project does not have an ownerId.
 * @returns - The created project.
 */
export async function createProject(project: NewProject): Promise<BaseProject> {
  return await prisma.$transaction(async tx => {
    if (!project.ownerId) {
      throw new Error('Project must have an owner ID');
    }

    let createdProject = await tx.project.create({
      data: {
        name: project.name,
        description: project.description,
        ownerId: project.ownerId,
        slug: randomInt(MAX_RANDINT).toString(),
        imageUrl: project.imageUrl,
        projectSequences: {
          create: [
            { entityType: ProjectCounterType.USECASE, count: 0 },
            { entityType: ProjectCounterType.BUSINESSRULE, count: 0 },
          ],
        },
      },
    });

    const newSlug = generateSlug(createdProject.name, createdProject.id);

    createdProject = await tx.project.update({
      where: { id: createdProject.id },
      data: {
        slug: newSlug,
      },
    });

    return createdProject;
  });
}

/**
 * Updates a project by ID.
 * @param project - The new project data.
 * @returns - The updated project, if it exists. Otherwise, returns null.
 */
export async function updateProject(
  project: BaseProject
): Promise<BaseProject | null> {
  const updatedProject = await prisma.project.update({
    where: { id: project.id },
    data: {
      name: project.name,
      description: project.description,
      slug: generateSlug(project.name, project.id),
      imageUrl: project.imageUrl,
    },
  });

  return updatedProject;
}

/**
 * Deletes a project by ID.
 * @param id - The ID of the project to delete.
 */
export async function deleteProject(id: number) {
  await prisma.project.delete({
    where: { id: id },
  });
}
