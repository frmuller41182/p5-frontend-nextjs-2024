# Full Stack Web Development Project 5 - Front End Next JS

# WealthWave

WealthWave is a modern finance app that helps users manage and grow their investments. The app provides tools and insights to make informed decisions and maximize financial potential.

## Features

- View a curated list of stocks
- Execute buy/sell orders easily
- Interactive graph to visualize portfolio composition

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn UI
- **Backend**: Prisma, CockroachDB
- **Charting**: Recharts

## Getting Started

### Prerequisites

- Node.js
- bun or npm
- CockroachDB instance

### Installation

1. Clone the repository:

```bash
git clone git@github.com:frmuller41182/p5-frontend-nextjs-2024.git
cd wealthwave
```

2. Install dependencies:

```bash
bun install
```

3. Set up the database:

- Create a `.env` file at the root of the project and add your CockroachDB connection string:

```bash
DATABASE_URL="your-cockroachdb-connection-string"
```

- Push the Prisma schema to your database:

```bash
bunx prisma db push
```

- Seed the database:

```bash
bunx prisma db seed
```

## Running the Application

4. Start the development server:

```bash
bun run dev
```

5. Open http://localhost:3000 in your browser to view the application.
