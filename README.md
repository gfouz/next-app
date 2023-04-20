# portfolio latest

Portfolio made with next js and some popular react libraries.
CI/CD Pipeline using GitHub Actions and Next Js.

GitHub Actions allows you automate, customize, and execute software development workflows right in your GitHub repository.

A workflow is a configurable automated process made up of one or more jobs. You can configure your workflows to run when specific activity on GitHub happens, at a scheduled time, or when an event outside of GitHub occurs.

The workflow configuration is define by a YAML file. GitHub provides preconfigured workflow templates.

First, on your project GitHub repository, navigate to the main page of the repository, click Actions.

Then, you'll see suggestions of CI templates that are the best fit for your project. You can use workflow templates as a starting place to build your custom workflow.

## Continuous Integration
First, let’s take a look at what CI/CD is and what its benefits are. Although these two concepts are often discussed together, each has its own role in the software development process.

Continuous integration is the process of automating the build and testing of code. It requires a SaaS build service (like Harness Hosted Builds) or an on-premise build server responsible for taking code from a source control system (such as Git), compiling it, and testing it to ensure it’s error-free. This helps to keep software projects on track by ensuring that errors/mistakes/bugs get spotted as soon as they occur. If a build is broken, it halts the rest of the process until it’s been fixed. As a result, the build process is much more streamlined.

## Continuous Delivery & Deployment
Continuous delivery automates the release process. It ensures that code is always in a releasable state. This process includes taking the code from the build system and routing it through a staging environment to ensure it’s suitable for release. The outcome is a fully automated deployment process, which can be controlled by the team or triggered by triggers outside the team (such as when a developer pushes or commits a code to the main branch). The key difference between CI and CD is that the former is focused on building code, while the latter focuses on releasing the final product.

npx create-next-app (project name)
npm run dev

Dependencies:
axios
react
next
valtio
eslint
prettier
react-dom
typescript
react-query
@types/node
@types/react
framer-motion
react-hook-form
@types/react-dom
styled-components
eslint-config-next
eslint-plugin-import
eslint-config-prettier
@types/styled-components
react-intersection-observer
npm install react-tsparticles
babel-plugin-styled-components
eslint-plugin-styled-components-a11y

npm install tsparticles-preset-sea-anemone

to see deployment:
https://gfouz.github.io/next-app/



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


npm install -D jest babel-jest
npm install -D @testing-library/jest-dom @testing-library/react

