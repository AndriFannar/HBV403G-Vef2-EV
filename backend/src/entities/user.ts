/**
 * @file user.ts
 * @description Contains the schema for a ne) user, a base user, and an existing user.
 * @author Andri Fannar Kristjánsson
 * @version 1.1.0
 * @date March 04, 2025
 * @dependencies zod, @prisma/client, ./useCase.js, ./project.js
 */

import { NewUseCaseSchema } from './useCase.js';
import { NewProjectSchema } from './project.js';
import { Role } from '@prisma/client';
import { z } from 'zod';

const minUsernameLength = 2;
const maxUsernameLength = 32;
const minPasswordLength = 6;
const maxPasswordLength = 64;

/**
 * A schema for validating a new user.
 */
export const NewUserSchema = z.object({
  username: z
    .string()
    .min(
      minUsernameLength,
      `Username must be at least ${minUsernameLength} characters long`
    )
    .max(
      maxUsernameLength,
      `Username must be at most ${maxUsernameLength} characters long`
    ),
  password: z
    .string()
    .min(
      minPasswordLength,
      `Password must be at least ${minPasswordLength} characters long`
    )
    .max(
      maxPasswordLength,
      `Password must be at most ${maxPasswordLength} characters long`
    ),
});

/**
 * A schema for validating a base user.
 */
export const BaseUserSchema = NewUserSchema.extend({
  id: z.number().positive('User ID must be positive'),
  role: z.nativeEnum(Role),
});

/**
 * A schema for validating a user.
 */
export const UserSchema = BaseUserSchema.extend({
  projects: z.array(NewProjectSchema).optional().default([]),
  useCases: z.array(NewUseCaseSchema).optional().default([]),
});

export type NewUser = z.infer<typeof NewUserSchema>;
export type BaseUser = z.infer<typeof BaseUserSchema>;
export type User = z.infer<typeof UserSchema>;
