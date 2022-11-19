# a11y Playground

## Goal

Discover and evaluate a11y tooling and efficient workflow for modern projects. 

## Tooling

### Browser

1. [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility toolkit
2. [WAVE](https://wave.webaim.org/extension/) - Web Accessibility Evaluation tool
3. [ARC Toolkit](https://www.tpgi.com/free-accessibility-testing-tools/) - On-Demand Testing

## Initial Analysis

Standard Create Vite project boilerplate with React with TypeScript (19-11-22)

Test URL: [http://localhost:5173](http://localhost:5173)

### axe DevTools (Total Issues: 6)

* (serious) Elements must have sufficent color contrast
* (moderate) Document should have one main landmark 
* (moderate) All page content should be contained by landmarks

**WAVE (Total Issues: 5)**

* Contrast Error - Very low contrast
* Alerts - No page regions
* Features - Linked image with alternative text
* Structural Elements - Heading level 1

**ARC Toolkit (Total Issues: 5)**

* (error) Insufficient normal text contrast
* (alert) Problematic `alt` text
* (alert) No nav landmark
* (alert) No bypass available

