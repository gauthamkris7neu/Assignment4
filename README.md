# Assignment4
Web Design Assignment 4 - Gautham Venkata Krishna Prasad (FeedBack Form)
## Description
This assignment submission includes an HTML feedback form with a dynamic JavaScript function that adds additional checkbox options based on the user's selection from a dropdown menu. The purpose is to gather more specific feedback from users depending on the type of service they select from the dropdown.

## Features
- Dropdown menu for service type selection
- Dynamic addition of checkboxes based on service type
- Clean and responsive form design

## HTML Structure
The HTML contains:
- A `select` element with `id="selection"` for service types.
- A `div` container with `id="checkboxContainer"` where dynamic checkboxes will be appended.

## JavaScript Functionality
The JavaScript file contains a function `addCheckbox()` that:
- Listens for a change in the dropdown menu.
- Clears any previously generated checkboxes.
- Dynamically creates checkboxes with labels corresponding to the selected service type.

## Usage
1. User selects a service type from the dropdown menu.
2. The `addCheckbox()` function triggers and adds relevant checkboxes below the dropdown.
3. User can then select any of the additional options provided by the checkboxes.
