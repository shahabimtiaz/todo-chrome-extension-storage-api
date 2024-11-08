# Todo Chrome Extension with Storage API

This is a simple **Todo Chrome Extension** that allows you to manage your tasks using the **Chrome Storage API** for persistent storage. You can add, update, delete, and view tasks directly from the Chrome extension popup.

## Features

- **Add tasks** to your to-do list.
- **Update tasks** after adding them.
- **Delete tasks** from your list.
- **Persistent storage** using Chrome's Storage API, so tasks are saved across browser sessions.

## Prerequisites

- Google Chrome installed.
- Basic knowledge of Chrome Extensions and the Storage API.

## Installation

1. Clone or download the repository:

    ```bash
    git clone https://github.com/shahabimtiaz/todo-chrome-extension-storage-api.git
    ```

2. Navigate to the extension directory:

    ```bash
    cd /path/to/todo-chrome-extension-storage-api
    ```

3. Open Chrome and go to the **Extensions** page (`chrome://extensions/`).
4. Enable **Developer Mode** in the top right corner.
5. Click on **Load unpacked** and select the folder where your project is located.
6. The extension should now be installed and ready to use!

## Usage

1. Click the extension icon in the Chrome toolbar to open the Todo popup.
2. **Add a new task** by typing in the input box and clicking the **Add** button.
3. **Edit a task** by clicking the **Update** button next to the task you want to edit.
4. **Delete a task** by clicking the **Delete** button next to the task.

All tasks will be stored in Chrome's local storage, so they will persist even if you close the browser or restart your computer.

## Files Structure

- **`popup.html`**: Contains the HTML structure for the extension's popup.
- **`popup.js`**: Handles the functionality (add, update, delete, and view tasks) using Chrome's Storage API.
- **`popup.css`**: Contains the styles for the extension popup.

## Code Explanation

### popup.js

- **Adding a Task**: The task is added to an array and stored using `chrome.storage.sync.set()`.
- **Updating a Task**: The task is retrieved, updated, and saved back to storage.
- **Deleting a Task**: The task is removed from the array and saved back to storage.
- **Viewing Tasks**: When the popup opens, tasks are retrieved from storage and displayed.

### popup.css

- The extension uses **flexbox** for layout and styling.
- Buttons for adding, updating, and deleting tasks are styled with hover effects.
- The task list is visually separated with subtle shadow effects to make the UI more interactive.

## Chrome Storage API

We are using **Chrome's Storage API** (`chrome.storage.sync`) for persisting the to-do list items across sessions.

- **`chrome.storage.sync.get()`**: Used to retrieve tasks from storage.
- **`chrome.storage.sync.set()`**: Used to save tasks to storage.

## Contributing

Feel free to fork the repository, make changes, and create pull requests if you'd like to contribute!

## License

This project is licensed under the MIT License.

---

### Notes

- This extension works only in **Google Chrome** since it relies on Chrome's specific APIs.
- You can modify the **manifest.json** if you want to customize the extension’s behavior or permissions.

---

Thank you for checking out this Chrome extension! If you have any questions or issues, feel free to open an issue in the GitHub repository.

