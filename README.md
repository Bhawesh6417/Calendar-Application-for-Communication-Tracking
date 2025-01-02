# Communication Tracker

This project is a simple React-based application designed to help users track and schedule communications with companies. It includes a notification panel, a modal for logging communication, and a calendar view for visualizing scheduled interactions.

---

## Features

- **Notification Panel**: Displays a list of upcoming tasks and notifications.
- **Communication Modal**: Allows users to log or schedule communications, including the method, date, and comments.
- **Calendar View**: Provides a calendar to visualize communication schedules.

---

## Setup Instructions

### Prerequisites

Before starting, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** (npm is bundled with Node.js)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

---

## Deployment Instructions

1. **Build the Application**:
   ```bash
   npm run build
   ```

   This will generate a production-ready build in the `build/` directory.

2. **Deploy to a Static Server**:
   Upload the `build/` directory to a hosting service like Netlify, Vercel, or any static server.

3. **Using `serve`** (for local testing):
   ```bash
   npm install -g serve
   serve -s build
   ```

   The application will be available at `http://localhost:5000`.

---

## Application Functionality

### Components

1. **NotificationPanel.js**:
   - Displays a list of predefined notifications.
   - Example notifications include reminders to follow up with companies or schedule LinkedIn posts.

2. **CommunicationModal.js**:
   - Modal to log communication details.
   - Users can select the communication method (e.g., email, call), specify a date, and add comments.

3. **CalendarView.js**:
   - Interactive calendar to display and select dates for scheduled communications.
   - Utilizes the `react-calendar` library.

4. **index.js**:
   - Entry point of the application.

### Styling

- Basic styling is included using Tailwind CSS classes.
- Update `index.css` to customize styles as needed.

---

## Known Limitations

1. **Static Notifications**:
   - The notifications are currently hardcoded and do not reflect dynamic data. Future updates could fetch notifications from an API.

2. **No Backend Integration**:
   - Communication logs are not saved persistently. This can be addressed by integrating a backend or using local storage.

3. **Limited Calendar Functionality**:
   - The calendar does not display specific events yet. Enhancements could include marking dates with events or integrating with external calendar APIs (e.g., Google Calendar).

4. **No Authentication**:
   - There is no user authentication or role management implemented.

---

## Future Enhancements

- Add backend integration to persist communication data.
- Implement dynamic notifications fetched from a database or API.
- Enhance the calendar view to display detailed event information.
- Add authentication for secure access to user-specific data.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For questions or suggestions, feel free to reach out:
- Email: bhawesh6417@gmail.com
- GitHub: https://github.com/Bhawesh6417

