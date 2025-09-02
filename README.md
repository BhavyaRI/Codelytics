# Codelytic: Developer Analytics Dashboard

Codelytic is a developer analytics tool that helps programmers track their progress on coding platforms. It fetches data from platforms like Codeforces and LeetCode and presents it in a clean, visual dashboard. By converting raw API data into graphs and charts, it makes it easier for users to understand their strengths, weaknesses, and overall coding journey.

This tool solves the problem of manual tracking. Instead of going through platform profiles and counting solved problems by tags or difficulty, Codelytic provides a one-stop dashboard where everything is visualized in an easy-to-understand way.

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
    git clone https://github.com/your-username/Codelytic.git
    cd Codelytic
    ```

2.  **Install frontend dependencies:**
    ```sh
    cd client 
    npm install
    ```

3.  **Install backend dependencies:**
    ```sh
    cd server
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    ```sh
    cd server
    npm run dev
    ```

2.  **Start the frontend development server:**
    ```sh
    cd client
    npm run dev
    ```

Once both servers are running, open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

To use the application, simply enter your Codeforces or LeetCode username in the input field and click the "Search" button. The dashboard will then fetch and display your coding statistics. You can also navigate to the "Resources" page for learning materials or the "Contests" page to see upcoming events.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
