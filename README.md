# Projekt 2 - Logistiksystem / Project 2 - Logistics System

## 🇸🇪 Instruktioner / dokumentation

### MVC + Routes
Projektet följer MVC-modellen, *Model-View-Controller*, med en extra mapp för *Routes*.

### Endpoints
Varje path kommer att börja med localhost:PORT,

för anställda */employees*,

för ordrar */orders*,

för produkter */products*,

för lagerlokaler */warehouses*,

för anställda per veckodag */employees/on/:weekday*, t.ex. */employees/on/monday*,

för anställda sorterade via användarnamn */employee/:username*, t.ex. *employee/sebastian.jensen*, *employee/johan.kateby*,

## 🇺🇸/🇬🇧 Instructions / documnentation

### MVC + Routes
This project follows the MVC model (Model-View-Controller), with an additional folder for the Routes.

## Endpoints
Every path will start with localhost:PORT, where PORT is defined by the user in Server.js,

to see employees, type: */employees*

for orders, type: */orders*,

for products, type: */products*,

for warehouses / storage locations, type: */warehouses*,

to see which employees work on a specific day, type: */employees/on/:weekday*, e.g. */employees/on/monday*,

for employees by username, type: */employee/:username*, t.ex. *employee/sebastian.jensen*, *employee/johan.kateby*,