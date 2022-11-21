# a11y Playground

## Goal

Discover and evaluate a11y tooling and efficient workflow for modern projects. 

### Initial Analysis

Generate a standard Create Vite project boilerplate with React with TypeScript (19-11-22)

Test performed on the homepage URL: [http://localhost:5173](http://localhost:5173)

## Browser Extensions

*Tl;dr as the issues are fairly consistently reported choose one and run it from devtools before asking for a code review.*

To get a baseline of issues each extension finds I installed each one and run a full-page scan. 

1. [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility toolkit

### axe DevTools (Total Issues: 6)

* (serious) Elements must have sufficent color contrast
* (moderate) Document should have one main landmark 
* (moderate) All page content should be contained by landmarks

2. [WAVE](https://wave.webaim.org/extension/) - Web Accessibility Evaluation tool

### WAVE (Total Issues: 5)

* Contrast Error - Very low contrast
* Alerts - No page regions
* Features - Linked image with alternative text
* Structural Elements - Heading level 1

3. [ARC Toolkit](https://www.tpgi.com/free-accessibility-testing-tools/) - On-Demand Testing

### ARC Toolkit (Total Issues: 5)

* (error) Insufficient normal text contrast
* (alert) Problematic `alt` text
* (alert) No nav landmark
* (alert) No bypass available

## Editor Extensions

* [vscode axe linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)

It points out some basics (missing alt tag etc) inline while you code. It's not comprehensive enough to replace **axe DevTools** but the DX makes install worthwhile. 

