# Hacker Portfolio — AI & Tooling Ecosystem Guide

This document provides a comprehensive reference for installing, configuring, and executing the advanced AI agentic ecosystem, local inference gateway, security testing tools, code analysis linters, knowledge graphs, and automation workflows integrated into [Hacker-Portfolio](https://github.com/Sudo-Vire/Portfolio).

---

## 1. Local Model Gateway (Omniroute Gateway)
Provides high-speed local inference, complete data privacy, and zero external costs.

- **Base Endpoint**: `http://localhost:20128/v1`
- **Default Model**: `openai/antigravity/gemini-3.1-flash-lite`
- **Usage**: Automatically powers local agents, virtual office sessions, and editor tooling via OpenAI-compatible endpoints.

---

## 2. Dual Agent Ecosystem (`agency-agents` + `claude-subagents`)
Combines macro-level domain agents with granular micro-subagents for engineering, security, design, and project management.

- **Macro Catalog (`agency-agents`)**: Located in `~/IA/agency-agents/`. Covers software architecture, backend, frontend, UI/UX, cybersecurity, product management, and finance.
- **Tactical Granular Layer (`claude-subagents`)**: Located in `~/IA/claude-subagents/categories/`. Micro-agents optimized for specific frameworks and language tasks.

---

## 3. Architectural Knowledge Graph (Graphify)
Transforms codebase structure, files, and relationships into a persistent knowledge graph with community detection and query capabilities.

- **Output Directory**: [graphify-out/](/C:/Users/victo/WebProjects/Hacker-Portfolio/graphify-out/)
- **Key Reports**: [GRAPH_REPORT.md](/C:/Users/victo/WebProjects/Hacker-Portfolio/graphify-out/GRAPH_REPORT.md)
- **Execution**:
  ```bash
  graphify query "Explain the MVC component structure"
  ```

---

## 4. Cybersecurity & Pentesting (Strix)
Autonomous AI penetration testing and vulnerability auditing mapped to OWASP Top 10 and API Security Top 10.

- **Key Skills**: `find-security-vulnerabilities-in-code`, `penetration-testing-with-strix`, `owasp-top-10-testing`.
- **Execution**:
  ```bash
  strix scan --target . --output vulnerabilities.json
  ```

---

## 5. Linters, Formatters & Quality Gates (Biome & Ruff)
Ultra-fast code formatting and syntax checks across languages.

- **JavaScript / TypeScript / Web**: **Biome** (`biome check`)
- **Python**: **Ruff** (`ruff check`, `ruff format`)
- **Execution**:
  ```bash
  npx @biomejs/biome check .
  ruff check .
  ruff format .
  ```

---

## 6. Autonomous E2E Browser Testing (Browser-Use & Playwright)
AI-driven browser automation and end-to-end visual testing for web interfaces.

- **Tools**: Playwright integration (`openBrowserPage`, `readPage`) + Browser-Use framework.
- **Purpose**: Autonomous regression testing, layout verification, and interactive component validation.

---

## 7. Git Workflow & Automated Changelogs (Git-Cliff)
Professional git lifecycle management using Conventional Commits and automated changelog generation.

- **Conventional Commit Types**: `feat`, `fix`, `refactor`, `perf`, `style`, `docs`, `test`, `chore`, `ci`, `build`.
- **Changelog Generation**:
  ```bash
  git-cliff -o CHANGELOG.md
  ```

---

## 8. Quick Installation & Setup Summary

1. **Clone Repository**:
   ```bash
   git clone https://github.com/Sudo-Vire/Portfolio.git
   cd Portfolio
   ```
2. **Start Local Gateway**: Ensure Omniroute is active at `http://localhost:20128/v1`.
3. **Verify Architecture & Knowledge Graph**: Inspect [ARCHITECTURE.md](/C:/Users/victo/WebProjects/Hacker-Portfolio/ARCHITECTURE.md) and query graphify.
4. **Run Quality Checks**:
   ```bash
   npx @biomejs/biome check .
   ```
