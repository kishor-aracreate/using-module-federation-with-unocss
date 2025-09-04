# Module Federation with UnoCSS

This project demonstrates the integration of Module Federation with UnoCSS in a monorepo setup, using Vite as the build tool. It consists of two applications: `host` and `remote`.

## Technologies Used

- **Module Federation**: For sharing code and dependencies between applications.
- **Vite**: A fast build tool that provides a great development experience.
- **UnoCSS**: An instant on-demand atomic CSS engine.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **pnpm**: A fast, disk space efficient package manager.

## Project Structure

The project is structured as a monorepo with two main applications:

- `host`: The container application that consumes modules exposed by the `remote` application.
- `remote`: The application that exposes modules to be consumed by the `host` application.

Each application has its own `package.json`, `vite.config.ts`, and `uno.config.ts` files, allowing for independent development and deployment while still leveraging Module Federation for code sharing.

## Setup Instructions

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd using-module-federation-unocss
    ```

2.  **Install dependencies:**

    Navigate to each application's directory and install the dependencies using `pnpm`.

    ```bash
    cd host
    pnpm install
    cd ../remote
    pnpm install
    cd ..
    ```

    Alternatively, you can install dependencies for both applications from the root directory if your pnpm version supports it (e.g., `pnpm install -r` or `pnpm install` if a workspace is configured). Given the current setup, it's recommended to run `pnpm install` in both `host` and `remote` directories.

## Running the Applications

To run the `host` and `remote` applications, you need to start them independently.

1.  **Start the `remote` application:**

    Open a new terminal, navigate to the `remote` directory, and start the development server:

    ```bash
    cd remote
    pnpm run dev
    ```

    The `remote` application will be running at `http://localhost:3001`.

2.  **Start the `host` application:**

    Open another new terminal, navigate to the `host` directory, and start the development server:

    ```bash
    cd host
    pnpm run dev
    ```

    The `host` application will be running at `http://localhost:3000`. It will consume the `remoteEntry.js` from the `remote` application running on port 3001.

Now you can access the `host` application in your browser at `http://localhost:3000` to see Module Federation and UnoCSS in action!
