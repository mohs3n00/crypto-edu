# Source Inventory: Business Process Management (IS412)

**Course Title:** Business Process Management (IS412) — إدارة عمليات الأعمال  
**Instructor:** Dr. Nissreen El-Saber (Autumn 2022)  
**Curriculum Context:** Faculty of Computers and Information / Computer Science & Information Systems  
**Prerequisites:** IS201 Systems Analysis and Design, IS200 Database Systems, CS102 Programming II, CS101 Programming I  
**Inspection Date:** November 2026  
**Status:** 100% Inspected (All 7 files, 231 pages/slides analyzed)

---

## 1. Inventory Table

| # | File Name | Format | Pages | Role / Description | Inspection Status |
|---|---|---|---|---|---|
| 1 | `BPM_L1.pdf` | PDF Presentation | 33 | **Lecture 1:** Introduction to BPM, Course Aims, Perspectives, Canon HR Case Study, Adam Smith Division of Labour, Rummler-Brache Business Process Model, Definition of Business Process & BPM, Stachowiak Essence of Modeling, Business Process Model vs Instance, Reseller-Buyer Interaction, Weske BPM Lifecycle & Hierarchy, BPM Landscape (EAI, Workflows). | **Fully Inspected** (All 33 slides read and diagrams transcribed) |
| 2 | `BPM_L2.pdf` | PDF Presentation | 47 | **Lecture 2:** Core & Advanced BPM Concepts, Quality Process Metaphor (Kitchen & Airbus), Process vs Project, Functions vs Processes (End-to-End), Management Discipline vs Enabling Tech (BPMS), Organisational Commitment & Governance, Process Components (Input, Process, Output, People), BPM Lifecycle (6-phase circular & spiral models), Process Classifications (Continuous vs Ad Hoc, Simple vs Complex), IT Support Request Example, Process Ownership, Process Modeling Purposes, Standards (BPMN, EPC, UML, etc.), BPMN Structure (Flow Objects, Connecting Objects, Swimlanes, Artifacts), Boundary Timer Events (Leave Request & Pizza/Restaurant Collaboration). | **Fully Inspected** (All 47 slides read, tables and collaboration diagrams transcribed) |
| 3 | `3- BPM_L3.pdf` | PDF Presentation | 7 | **Lecture 3:** Practicing BPMN. Weske Fig 1.1 (Reseller ordering process with AND-split/join), Fig 1.2 (Buyer ordering process), Fig 1.3 (Buyer-Reseller choreography with Message flows), Fig 1.4 (Sequential Reseller variant with Buyer interaction), BPM Tools (Signavio, Edraw). | **Fully Inspected** (All 7 slides and Weske diagrams transcribed) |
| 4 | `Business Management Tools Quiz.pdf` | PDF Exam/Quiz | 3 | **Official Quiz Bank 1:** 10 Questions (5 True/False, 5 Multiple Choice) with model answers and rationales. Covers Tools vs Methods (Trello/Jira vs Scrum/Kanban), SWOT analysis and lack of prioritization, Balanced Scorecard (4 perspectives), OKRs (Objectives & Key Results), Lean (waste reduction) vs Six Sigma (defect/variation reduction), Porter's Five Forces (and limitation in digital ecosystems), Agile/Scrum (sprints, challenges with fixed scope/budget), PDCA Cycle (Plan-Do-Check-Act, lacks strategic direction alone). | **Fully Inspected** (10 questions, answers & rationales verified) |
| 5 | `Business Workflow Management Questions.pdf` | PDF Exam/Quiz | 4 | **Official Quiz Bank 2:** 14 Questions (10 Multiple Choice, 4 True/False) with model answers. Covers 4-Step Workflow Design Method (Identify Goals, Map & Bottlenecks, Design Improved, Test & Implement), 'Lead to order' in Sales, Workflow structures (Parallel, Sequential, Rules-based), Workflow components (Inputs, Tasks, People, Flow/Rules, Outputs), WfMS Capabilities (Design, Run, Monitor), Human vs System workflows, Implementation strategy (start with one, communicate & train), Automation criteria, KPIs (Cost vs Cycle Time), Continuous improvement lifecycle. | **Fully Inspected** (14 questions and model answers verified) |
| 6 | `Quiz on Tools for Building Business Processes.pdf` | PDF Exam/Quiz | 4 | **Official Quiz Bank 3:** 25 Questions (15 Multiple Choice, 10 True/False) with model answers and rationales. Covers Business Process definition, Workflow definition, Process modelling tools, BPMN Gateways, Sequence flow, GPSG (constraint-based), PSL (Process Specification Language), Workflow engine, WAPI (Workflow Application Programming Interface), Process instance states (Inactive, Active, Suspended, Completed, Terminated), Workflow patterns (AND-split, XOR-split, OR-split, N-out-of-M join, Discriminator), Travel booking example, Invoice approval example, IPO-based (WPDL, PIF, PSL) vs Constraint-based (GPSG), WfMC Reference Model (5 interfaces). | **Fully Inspected** (25 questions, answers & rationales verified) |
| 7 | `Sem_Process_Modeling_with_BPMN_13-14.pdf` | PDF Seminar Slide Deck | 133 | **Comprehensive Reference:** Modeling Business Processes with BPMN (Andrea Marrella, Sapienza Università di Roma). Primary source referenced in Dr. Nissreen's slides and quiz questions. Covers BPMN 2.0 Metamodel, Sequence Flow, Gateways (Exclusive XOR, Parallel AND, Inclusive OR, Complex, Event-Based), Events (Start, Intermediate, End; Catching vs Throwing; Timer, Message, Error, Escalation, Signal, Compensation), Activities (Tasks, Sub-processes, Transactions), Swimlanes (Pools, Lanes), Artifacts (Data Objects, Data Store, Annotations, Groups), Workflow Patterns, Choreography, Collaboration diagrams. | **Fully Inspected** (All 133 slides surveyed; key definitions, patterns, and exercises mapped) |

---

## 2. Gaps and Conflicts Identification

- **No Missing or Corrupted Files:** All 7 files opened and rendered successfully with PyMuPDF/pypdf.
- **Image-Only Slides Decoded:** Slides in L1 (7, 8, 17, 22, 23, 28-32), L2 (3-6, 23, 24, 30, 31, 33, 43, 45, 46), and L3 (3-6) were extracted as high-resolution assets and visually inspected:
  - L1 Fig 1.5, Fig 1.6, Fig 2.26 are from Mathias Weske's *Business Process Management: Concepts, Languages, Architectures*.
  - L1 slide 7 is Adam Smith's pin-maker division of labour (1776).
  - L1 slide 8 is Rummler & Brache (1990) horizontal cross-functional process view.
  - L1 slide 17 is Therefore™ Case Manager (Canon HR solution).
  - L1 slide 22 is Herbert Stachowiak's model concept (Space Shuttle abstraction).
  - L1 slide 23 is Office typing process abstraction to BPMN.
  - L2 slide 3-6: Dirty vs clean kitchen, plane cockpit vs Airbus (quality assurance metaphor).
  - L2 slide 23-24: 6-phase BPM lifecycle (circular and spiral iterative models).
  - L2 slide 30-31: Comparison tables (Continuous vs Ad Hoc, Simple vs Complex).
  - L2 slide 33: IT Support Request end-to-end example (Appian).
  - L2 slide 43: BPMN element taxonomy tree.
  - L2 slide 45: Employee-Manager Leave Request BPMN with 1-day Boundary Timer Event.
  - L2 slide 46: Customer-Vendor Pizza/Lunch Collaboration BPMN with 60-min Event-Based Gateway.
  - L3 slides 3-6: Weske Fig 1.1, 1.2, 1.3, 1.4 (Reseller, Buyer, Choreography, Reseller Variant).
- **Terminology Consistency:**
  - WfMC Reference Model specifies **5 interfaces** around the workflow enactment service (Interface 1: Process Definition, Interface 2: Workflow Client Apps, Interface 3: Invoked Applications, Interface 4: Inter-engine Collaboration, Interface 5: Administration & Monitoring). Quiz Question 19 explicitly tests that it is 5, not 3.
  - Lean focuses on **waste elimination**; Six Sigma focuses on **defect and variation reduction**.
  - Cycle time is the **time required to complete a case**; Cost KPI is the **expenditure associated with each completed case**.

