## Project Overview

This repository contains the code for Referral Hub, a personal referral‑link website built with Next.js (App Router) and deployed on Vercel.

Current Status

-The project is stable and live.


Technical Stack

-Next.js (App Router)

-React

-Tailwind CSS

-Supabase (for data persistence)

-Vercel (deployment)


Future work may include:

-small UX improvements

-minor content updates

-automated email and SMS notifications for code requests

-the ability to add codes directly over email or text

-automated email or SMS updates to users who request codes


There is no roadmap for aggressive expansion.

The site’s purpose is intentionally narrow:

-Provide a clean, searchable list of referral links

-Allow visitors to request new referral links

-Serve as a lightweight personal utility, not a commercial SaaS product


The live site is hosted at:

https://referrals.arieltypes.com


Scope & Intent

This is a real production website, not a demo or tutorial project.


Key design principles:

-Incremental, intentional changes only

-Stability over refactors

-Clarity over abstraction

-Simple solutions preferred over complex ones


This project prioritizes:

-reliability

-ease of maintenance

-minimal surface area for bugs


What this project is:

-A single‑purpose referral hub

-A personal project with limited feature scope

-A Next.js App Router application

-Deployed via Vercel with environment‑based configuration


What this project is NOT:

-A full authentication system

-A multi‑tenant platform

-A generalized CMS

-A playground for large‑scale refactors


Features are added only when there is a clear, concrete need.

Environment & Deployment Notes

This project uses environment variables for configuration

Client‑side variables are prefixed with NEXT_PUBLIC_

Production deployments are handled automatically by Vercel

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
