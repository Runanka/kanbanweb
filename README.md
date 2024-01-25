# KanbanWeb
## _A web based Kanban boards_

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)


## Description
KanbanWeb is a collaborative, web-based kanban board application. It's mobile-friendly and built with Next.js, React, and Tailwind CSS on the frontend, and Prisma and PostgreSQL on the backend.

## Features

- **User Authentication**: Users can sign up and log in using their email and password, or their Google, GitHub, or Discord account.
- **Organization Management**: Users can create new organizations and join existing ones.
- **Board Management**: Organizations can create multiple boards. Each board has a name and a color. 
- **Collaboration**: Boards can be shared among users within the same organization. 
- **Database**: The application uses Prisma as a database client, with the database hosted on Neon.tech.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Set up the environment variables in a `.env` file based on the below `example` file.
4. Run `npm run dev` to start the app in development mode.

```sh
git clone https://github.com/Runanka/kanbanweb.git
npm install
npm run dev
```

## Setup

To set up the environment variables, create a `.env.local` file in the root directory of the project and add the following variables:

```properties
# Database connection strings for Prisma
DATABASE_URL='<database_url>'
DIRECT_URL='<database_url>'

# Auth0 secret
AUTH_SECRET='<auth0_secret>'

# GitHub OAuth credentials
GITHUB_ID='<github_client_id>'
GITHUB_SECRET='<github_client_secret>'

# Google OAuth credentials
GOOGLE_ID='<google_client_id>'
GOOGLE_SECRET='<google_client_secret>'

# Discord OAuth credentials
DISCORD_ID='<discord_client_id>'
DISCORD_SECRET='<discord_client_secret>'
```

To set up the database with postgres, generate the db using prisma and then push it:
```sh
npx prisma generate
npx primsa db push
npx prisma studio
```

Below is the tabular representation of the schema:
https://imgur.com/a/wzbiYKF
![Schema](https://i.imgur.com/3m101ci.png "Schema")


## License

This project is licensed under the MIT License.
