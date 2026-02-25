# Splitwiselite

## Project Overview

Splitwise is a minimal Expense Tracker user interface built using React.  
This project focuses entirely on frontend structure and layout design.  
It demonstrates how an expense management system can be visually organized before implementing backend logic.

The application is intentionally simple and clean.  
There are no animations, charts, advanced styling systems, or backend integrations.  
The goal is clarity, structure, and proper component separation.

---

## Core Objective

The main purpose of this project is to design a structured UI for an expense tracking system that allows:

1. Adding participants
2. Adding expenses involving selected participants
3. Viewing expense and balance logs

The project emphasizes layout organization and component-based architecture.

---

## Application Structure

The application is divided into three main sections:

### 1. Participant Management Panel (Left Section)

This section allows users to add participants one by one.

Conceptually, this represents the creation of users in a group expense system.

Fields included:

- User ID
- Name
- Add Participant Button
- Display area for participant list

The layout is vertically aligned and designed to be simple and intuitive.
Participants added here would later be used in the expense section.

This section demonstrates how input forms and list displays can coexist within a structured panel.

---

### 2. Expense Management Panel (Right Section)

This section allows users to create expenses involving previously added participants.

Fields included:

- Expense ID
- Description
- Amount
- Paid By (Dropdown)
- Participants (Multi-select)
- Split Type (Default: Equal Split)
- Add Expense Button

This panel represents the conceptual flow of creating an expense entry in a real-world expense management system.

Although the UI contains split type selection, no calculation logic is implemented in this version.
The design prepares the interface for future business logic integration.

The layout maintains clean vertical alignment and consistent spacing to preserve readability.

---

### 3. Output Log Panel (Bottom Section)

This section is designed to display:

- Added expenses
- Balance summaries
- Transaction logs

It uses a simple scrollable container styled like a console output.

This section represents how processed data would eventually be shown to the user once backend logic is implemented.

Currently, it serves as a placeholder area in the UI structure.

---

## Design Philosophy

The design follows these principles:

- Simplicity over decoration
- Structure over styling
- Clarity over complexity
- Component separation
- Beginner-friendly architecture

The UI avoids:

- Charts
- Financial dashboards
- Heavy animations
- Complex UI libraries
- Over-styling
- Advanced visual effects

This ensures the project remains focused on structural understanding rather than visual distraction.

---

## Technical Approach

The application uses:

- React functional components
- Plain CSS styling
- Flexbox layout system
- Component-based architecture

Each section of the application is logically separated into independent components.
This demonstrates how real-world applications are broken into modular parts.

The project intentionally avoids backend integration to keep the focus strictly on UI structure.

---

## Conceptual Flow of the Application

Even though no logic is implemented, the theoretical flow would be:

1. Add participants
2. Store participants in memory
3. Create an expense
4. Select payer and participants
5. Choose split type
6. Calculate shares (future implementation)
7. Update balances (future implementation)
8. Display results in output panel

The current UI prepares the structure for this entire workflow.

---

## Why This Project Matters

This project is useful for:

- Beginners learning React component structure
- Practicing layout design
- Understanding UI separation before backend integration
- Preparing for full-stack expansion
- Demonstrating architectural thinking in interviews

It shows how to design a system interface first before implementing business logic.

---

## Future Scope

This project can be extended by adding:

- Expense split logic (Equal / Percentage / Exact)
- Balance calculation engine
- Settlement optimization
- Backend API integration
- Database storage
- Authentication system
- Multi-group support

The current UI serves as a foundation for all future expansions.

---

## Conclusion

Splitwise UI is a structured, minimal, and professional frontend foundation for an expense tracking system.

It focuses on:

- Clean design
- Logical separation
- Maintainable structure
- Scalability preparation

It is intentionally simple but architecturally sound.

The project demonstrates how good software begins with clear structure before adding complexity.
