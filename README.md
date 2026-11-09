```
┌─[ victor@castle ]────────────────────────────────────┐
│                                                        │
│  ██╗   ██╗ ██╗  ██████╗  ████████╗  ██████╗  ██████╗   │
│  ██║   ██║ ██║ ██╔════╝  ╚══██╔══╝ ██╔═══██╗ ██╔══██╗  │
│  ██║   ██║ ██║ ██║          ██║    ██║   ██║ ██████╔╝  │
│  ╚██╗ ██╔╝ ██║ ██║          ██║    ██║   ██║ ██╔══██╗  │
│   ╚████╔╝  ██║ ╚██████╗     ██║    ╚██████╔╝ ██║  ██║  │
│    ╚═══╝   ╚═╝  ╚═════╝     ╚═╝     ╚═════╝  ╚═╝  ╚═╝  │
│                                                        │
│  $ whoami                                              │
│  web developer · game tinkerer · ai-wrangler           │
│  $ cat ~/interests.txt                                 │
│  linux  terminals  rubiks-cubes  roguelikes            │
│  $ echo $MATRIX                                        │
│  the color of television, tuned to a dead channel      │
│  $ cd castle-of-basilisk && ./build.sh                 │
│  compiling rust -> wasm ... done. she is awake.        │
│  $ █                                                   │
└────────────────────────────────────────────────────────┘
                                        ~  ~   ~
                               ~ ~ ~ ~   ~
                        ~~ ~   ~~
                   ~ ~ ~~
            B ~~~
```

> *"Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation, by children being taught mathematical concepts… A graphic representation of data abstracted from the banks of every computer in the human system. Unthinkable complexity. Lines of light ranged in the nonspace of the mind, clusters and constellations of data. Like city lights, receding..."*
>
> — William Gibson, *Neuromancer*

-----

Hello!
I'm a coding enthusiast who likes to learn new technologies just to see them running.
I like terminal applications and Linux, and my main hobby is learning new Rubik's cube algs.
I'm currently rediscovering the React web and Java worlds and being amazed at how much they improved :o

Check out my [portfolio](https://victorhugobatista.github.io/portfolio/#/) — a ReactJS site of my own, with a [blog](https://victorhugobatista.github.io/portfolio/#/blog) where I write about the things I build ([source here](https://github.com/VictorHugoBatista/portfolio)).

Background: BSc in Computer Science (Universidade Cruzeiro do Sul) — and back in 2011, 1st place in the Logic & OO Programming olympiad (level II) with team Breakdown.

## 🕸️ A decade of web, the long way around

10+ years shipping for the web, each stack sedimenting over the last:

- **2015–2019** — jQuery components, WordPress themes and plugins, PHP (with a pinch of Laravel)
- **2019–2021** — Vue and React frontends, Node/NestJS APIs
- **now** — full-stack at [Thepes](https://br.linkedin.com/company/thepes/): NestJS as the daily bread, a bit of C# from a past project, and AI-assisted development baked into the workflow (more below)

And then there's the pile of things I only know because I like to see them running — Java/Spring Boot, Terraform, the occasional framework of the month. Studied, toyed with, never professional. That's what personal repos are for :o

### 🕹️ Games I built by hand

My favorite kind of project — every line typed by myself, no agents, no shortcuts:

- 🚲 **[RetroBikes](https://github.com/RetroBikes)** — multiplayer tron-like bike game of my own, built on [Colyseus](https://colyseus.io/): a TypeScript game server holding the real logic, and a React client rendering the state and sending the direction events
- 🐍 **[SpeedSnake](https://github.com/VictorHugoBatista/SpeedSnake)** — snake on canvas with ReactJS, Konva and Zustand — [playable in your browser](https://victorhugobatista.github.io/SpeedSnake/)
- ⭕ **[vue-tic-tac-toe](https://github.com/VictorHugoBatista/vue-tic-tac-toe)** — yet another tic-tac-toe, made with Vue
- 🔢 **[vue-sudoku-board](https://github.com/VictorHugoBatista/vue-sudoku-board)** — sudoku board in Vue
- 📰 **[wp-crosswords](https://github.com/VictorHugoBatista/wp-crosswords)** — interactive crossword puzzles as a WordPress plugin

## 🤖 Building with AI — ralph loops and agent teams

The hand-built decade taught me where quality comes from — so AI entered my workflow with the humans keeping the architecture and the agents doing the heavy lifting. In production, not just in side projects:

- **Ralph loop at work** — autonomous agent loops (select → prompt → execute → evaluate) running Claude through Copilot on real stories: one small task at a time, with quality gates and human review after every cycle. No "integration week" — bugs get caught while the context is fresh.
- **Multi-agent orchestration** — nowadays I coordinate several agents with Orca + Claude on a Python project: parallel subtasks, fresh context per task, implementer and reviewer agents working as a team. Hive minds were fiction once — Wintermute would be proud.
- **Claude, GPT and GLM as interchangeable parts** — I pick the model per job: small and fast for spec review and text processing, stronger ones for code execution and review. The model is a pluggable piece; the workflow stays.
- **Test harness** — wrote a full-stack automated testing interface in Python + Node, because agent-generated code only counts when the quality gates say so.

The method behind all of this is written up in **[light-sdd-workflow](https://github.com/VictorHugoBatista/light-sdd-workflow)** — featured below.

## 🏰 Featured projects

- 🦎 **[castle-of-basilisk](https://github.com/VictorHugoBatista/castle-of-basilisk)** — vibecoded survival-horror roguelike with 80s ASCII aesthetics: pure Rust compiled to raw WebAssembly (zero crates, ~27 KB), BFS-driven monster AI, procedural floors with their own temperaments, fear and hallucination systems, fully synthesized WebAudio. Built with agent loops — [playable in your browser](https://victorhugobatista.github.io/castle-of-basilisk/).
- 📘 **[light-sdd-workflow](https://github.com/VictorHugoBatista/light-sdd-workflow)** — my lightweight, language-agnostic methodology for building software with LLMs: humans own business logic and architecture decisions, AI agents accelerate execution. Spec-driven, ralph-loop powered, tool-agnostic by design — because the model you use today won't be the one you use next month.

## 🧰 The toolbox

| area | stack | proof it works |
|------|-------|----------------|
| 🖥️ frontend | VueJS · React · React Native · Angular · jQuery | [portfolio](https://github.com/VictorHugoBatista/portfolio) · [SpeedSnake](https://github.com/VictorHugoBatista/SpeedSnake) |
| ⚙️ backend | Node (JS/TS) — NestJS & Express · PHP — WordPress & Laravel | [nestjs-reactive-api-demo](https://github.com/VictorHugoBatista/nestjs-reactive-api-demo) |
| 🗄️ databases | MySQL · PostgreSQL · MongoDB | [personal-note-manager](https://github.com/VictorHugoBatista/personal-note-manager) |
| 🚢 devops | Docker · Kubernetes · ASDF | [php-mysql-env-builder](https://github.com/VictorHugoBatista/php-mysql-env-builder) |
| 🎮 games | Colyseus · Konva · Zustand · canvas2D · Rust → WASM | [RetroBikes](https://github.com/RetroBikes) · [castle-of-basilisk](https://github.com/VictorHugoBatista/castle-of-basilisk) |
| 🤖 ai workflow | Claude · GPT · GLM · ralph loop · Orca multi-agent | [light-sdd-workflow](https://github.com/VictorHugoBatista/light-sdd-workflow) |
| 📚 the study pile | Java/Spring Boot · Terraform · a pinch of C# | toy repos only :o |

```
             .-~~~~-.
         ≈≈≈( °   B )~ ~ ~ ~ ~ ~
             `-~~~~-'         ~ ~ ~
                                  ~ ~
                    ▄▄ ▄▄ ▄▄ ▄▄ ▄▄  ~
                    |           |   ~ ~
                    |           |  ~
         ~ ~ ~ ~ ~  |           | ~ ~ ~ ~ ~
       ~ ~ ~        |  ▄▄ ▄▄    |   ~ ~ ~
                    |           |
                    |           |
                    | · · · · · |
                    |           |
      ~ ~ ~ ~ ~ ~   |           |  ~ ~ ~ ~ ~
        ~ ~ ~       |  ▄▄ ▄▄    | ~ ~ ~
                    |           |
                    |           |
                    | · · · · · |
                    |           |
          ~ ~ ~ ~ ~ |           | ~ ~ ~ ~ ~
        ~ ~ ~       |           |    ~ ~
                    |    ╭──╮   |
                    |    │  │   |
                    |    │  │   |
                    |    ╰──╯   |
  ¥    ¶      ¥          ¥    ¶  ¶  §
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

 B head · ~ scales · ¥ skulls · ¶ bodies · § the crown
```
