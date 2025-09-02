# Codelytics: Developer Analytics Dashboard

Codelytics is a developer analytics tool that helps programmers track their progress on coding platforms. It fetches data from platforms like Codeforces and LeetCode and presents it in a clean, visual dashboard. By converting raw API data into graphs and charts, it makes it easier for users to understand their strengths, weaknesses, and overall coding journey.

This tool solves the problem of manual tracking. Instead of going through platform profiles and counting solved problems by tags or difficulty, Codelytics provides a one-stop dashboard where everything is visualized in an easy-to-understand way.

## 🔹 Key Features

- **📊 Unified Dashboard**: Displays all your coding stats in one place.
- **📈 Rating-Wise Graphs**: Visualize the number of problems you've solved, broken down by difficulty rating.
- **🥧 Tag-Wise Pie Charts**: Understand your strengths and weaknesses with a tag-based breakdown of solved problems.
- **👤 User Profile**: Shows your profile information, current rating, and avatar.
- **📚 Resources Page**: Access a curated list of materials for Competitive Programming and DSA.
- **📅 Upcoming Contests**: Stay updated with a list of upcoming contests on Codeforces.
- **⚡ Responsive UI**: A fast, simple, and seamless user interface that works on any device.

## 🛠️ Technologies, Languages, and Frameworks Used

- **Frontend**: React.js with TailwindCSS
- **Charts/Graphs**: Nivocharts
- **Backend**: Node.js with Express.js
- **APIs**: Codeforces API, LeetCode GraphQL API
- **Other**: Axios for API calls, CORS for cross-origin handling

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/BhavyaRI/Codelytics.git
    cd Codelytics
    ```

2.  **Install frontend dependencies:**
    ```sh
    cd frontend 
    npm install
    ```

3.  **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    ```sh
    cd backend
    npm run dev
    ```

2.  **Start the frontend development server:**
    ```sh
    cd frontend
    npm run dev
    ```

## Usage

To use the application, simply enter your Codeforces or LeetCode username in the input field and click the "Search" button. The dashboard will then fetch and display your coding statistics. You can also navigate to the "Resources" page for learning materials or the "Contests" page to see upcoming events.

### Example

-   **For Codeforces:** `tourist`
-   **For LeetCode:** `Yawn_Sean`

## License

Distributed under the MIT License. See `LICENSE` for more information.
