# Understanding Project Management in NodeJS

## a. Package Managers

### What is a Package Manager?

A **package manager** is a tool that helps developers install, update, remove, and manage external libraries or packages that a project depends on. These packages contain reusable code written by other developers.

**Example:**
Instead of writing authentication logic from scratch, you can install an existing package that already provides it.

---

### Why do we need package managers in backend development?

In backend development, applications depend on many libraries for tasks like:

* Handling HTTP requests
* Connecting to databases
* Authentication and security
* Logging and validation

Package managers:

* Save development time
* Ensure consistent versions across teams
* Automatically handle dependencies of dependencies

---

### Problems faced if package managers are not used

If package managers are not used:

* Developers must manually download and manage libraries
* Version conflicts may occur
* Difficult to reproduce the project on another system
* Collaboration becomes harder
* Higher chance of bugs due to mismatched dependencies

---

## b. NPM (Node Package Manager)

### What is NPM?

**NPM (Node Package Manager)** is the default package manager for Node.js. It comes bundled with Node.js and is used to install and manage JavaScript packages.

---

### Why is NPM important for Node.js applications?

NPM is important because:

* It provides access to thousands of open-source packages
* Helps manage project dependencies efficiently
* Makes project setup faster and standardized
* Supports scripts for automation (like running servers or tests)

---

### How NPM helps in managing dependencies

NPM:

* Installs required packages using simple commands
* Records dependencies in `package.json`
* Locks exact versions using `package-lock.json`
* Updates packages safely

**Example:**

```bash
npm install express
```

This command installs Express and records it as a dependency.

---

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?

The command used is:

```bash
npm init
```

---

### Explain what `npm init` and `npm init -y` do

#### `npm init`

* Starts an interactive process
* Asks questions like project name, version, author, etc.
* Creates a `package.json` file based on your answers

#### `npm init -y`

* Skips all questions
* Creates `package.json` with default values
* Faster way to initialize a project

---

## d. Files and Folders Created After Project Initialization

### package.json

* Main configuration file of a Node.js project
* Stores project metadata
* Lists dependencies and scripts

**Why it is important:**

* Required to install dependencies
* Helps others understand and run the project

---

### node_modules

* Contains all installed dependencies
* Automatically created when packages are installed

**Why it is important:**

* Holds actual code of external libraries

---

### package-lock.json

* Automatically generated file
* Records exact versions of installed packages

**Why it is important:**

* Ensures the same dependency versions across all environments
* Improves consistency and reliability

---

## GitHub Best Practices

### Files/Folders that should NOT be pushed to GitHub

* `node_modules/`

**Why:**

* Very large in size
* Can be regenerated using `npm install`
* Makes repository heavy and slow

---

### Files that MUST be committed to GitHub

* `package.json`
* `package-lock.json`
* Source code files

**Why:**

* Required to install dependencies
* Ensures consistent project setup for all developers

---

## Submission Instructions

* All answers written in `answer.md`
* Use proper headings and formatting
* Push the file to GitHub
* Submit the GitHub repository link
