# Projekt 2 - Logistiksystem / Project 2 - Logistics System

## 🇸🇪 Instruktioner / dokumentation

### MVC + Routes
Projektet följer MVC-modellen, *Model-View-Controller*, med en extra mapp för *Routes*.

### Index
Det finns en index-sida för att enkelt kunna navigera runt mellan de fyra stora Routsen

### Endpoints
Varje path kommer att börja med localhost:PORT,

för anställda */employees*,

för ordrar */orders*,

för produkter */products*,

för lagerlokaler */warehouses*,

för anställda per veckodag */employees/on/:weekday*, t.ex. */employees/on/monday*,

för anställda sorterade via användarnamn */employee/:username*, t.ex. *employee/sebastian.jensen*, *employee/johan.kateby*,

för aktiva ordrar, d.v.s. de som måste levereras */orders/active*,

för produkter som inte finns i lager, */products/out_of_stock*

## 🇺🇸/🇬🇧 Instructions / documnentation

### MVC + Routes
This project follows the MVC model (Model-View-Controller), with an additional folder for the Routes.

### Index
Thruoug the index-page it's easy to navigate between the four main Routes

## Endpoints
Every path will start with localhost:PORT, where PORT is defined by the user in Server.js,

to see employees, type: /employees

for orders, type: /orders,

for products, type: /products,

for warehouses / storage locations, type: /warehouses,

to see which employees work on a specific day, type: /employees/on/:weekday, e.g. /employees/on/monday,

for employees by username, type: /employee/:username, e.g. employee/sebastian.jensen, employee/johan.kateby,

for active orders, type: /orders/active,

for products not in store, type /products/out_of_stock