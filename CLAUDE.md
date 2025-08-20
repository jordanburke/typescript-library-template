# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a TypeScript library template using modern tooling for building and publishing npm packages. It uses tsup for bundling, Vitest for testing, and supports both CommonJS and ES modules.

## Development Commands

### Build
- `pnpm build:dev` - Development build with watch mode (outputs to `lib/`)
- `pnpm build:prod` - Production build (outputs to `dist/`)
- `pnpm build:watch` - Watch mode build
- `pnpm build:publish` - Build and publish to npm

### Testing
- `pnpm test` - Run tests once
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm test:ui` - Launch Vitest UI for interactive testing

### Code Quality
- `pnpm lint` - Format and fix linting issues (combines prettier and eslint)
- `pnpm lint:format` - Run prettier formatting
- `pnpm lint:fix` - Fix eslint issues
- `pnpm ts-types` - Check TypeScript types with tsc

## Architecture

### Build System
- **tsup**: Primary build tool configured in `tsup.config.ts`
- **Dual Output**: Development builds go to `lib/`, production builds to `dist/`
- **Format Support**: Generates both CommonJS (`cjs`) and ES modules (`esm`)
- **TypeScript**: Generates declaration files automatically

### Testing Framework
- **Vitest**: Modern test runner with hot reload and coverage
- **Configuration**: `vitest.config.ts` with Node.js environment
- **Coverage**: Uses v8 provider with text/json/html reports

### Code Quality Tools
- **ESLint**: Flat config setup in `eslint.config.mjs` with TypeScript support
- **Prettier**: Integrated with ESLint for consistent formatting
- **Import Sorting**: Automatic import organization via `simple-import-sort`

### Package Configuration
- **Entry Points**: Main source in `src/index.ts`
- **Exports**: Supports both `require()` and `import` with proper type definitions
- **Publishing**: Configured for npm with public access

## Key Files
- `src/index.ts` - Main library entry point
- `test/*.spec.ts` - Test files using Vitest
- `tsup.config.ts` - Build configuration with environment-based settings
- `vitest.config.ts` - Test configuration with coverage settings
- `eslint.config.mjs` - Linting rules and TypeScript integration