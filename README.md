# Actions Basics

Practice repository for testing core GitHub Actions features.

## What's Inside

- **Caching** - Speed up builds by caching dependencies
- **Artifacts** - Save and share build outputs
- **Secrets** - Secure credential management
- **Matrix builds** - Test across multiple versions
- **Manual triggers** - Deploy on demand
- **Scheduled jobs** - Automated daily tasks

## Structure
```
.github/workflows/
├── caching-modules-workflow.yml
├── artifact-workflow.yml
├── secret-workflow.yml
├── matrix-workflow.yml
├── manual-deploy.yml
└── daily-backup.yml
```

## Usage

Workflows trigger on push or can be run manually from the Actions tab.
