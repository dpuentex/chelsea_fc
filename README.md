# chelsea_fc

Chelsea FC website

Chelsea FC MOCK
Table of Contents
Introduction
Features
Technologies Used
Installation
Backend Setup
Frontend Setup
Project Structure
API Endpoints
Components
Usage
License

Introduction
Chelsea FC MOCK is a full-stack web application designed for Chelsea club-related activities. The app features various sections such as players, fixtures, a shop, and a stadium. Users can view player details, fixture details, browse and purchase items from the shop, and leave comments.

Features
Players Section: View all players, and individual player details including stats.
Fixtures Section: View all fixtures and individual fixture details.
Shop Section: Browse and purchase items, including jerseys and training kits.
Stadium Section: Information and image slider for the stadium.
Comments Section: Leave and view comments on fixtures and players.
Responsive Design: Optimized for both desktop and mobile devices.
Technologies Used
Frontend: React, React Router, CSS (with custom styling), Slick Carousel for image sliders.
Backend: Express, Node.js, dotenv for environment variables.
Database: Assumed to be using a relational database (e.g., MySQL, PostgreSQL).
Miscellaneous: react-icons for icons.
Installation
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/dpuentex/chelsea_fc.git
cd chelsea_fc/backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and set your environment variables:

env
Copy code
PORT=7000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the client directory:

bash
Copy code
cd ../client
Install dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
Project Structure
plaintext
Copy code
sports-club-app/
│
├── backend/
│ ├── controllers/
│ │ ├── commentsController.js
│ │ ├── fixturesController.js
│ │ ├── playersController.js
│ │ └── shopsController.js
│ ├── models/
│ │ ├── Player.js
│ │ ├── Shop.js
│ │ └── Fixture.js
│ ├── .env
│ ├── index.js
│ └── package.json
│
├── client/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ │ ├── css/
│ │ │ ├── imgs/
│ │ │ └── extra_data/
│ │ ├── components/
│ │ │ ├── Footer.js
│ │ │ ├── Header.js
│ │ │ ├── ImageSlider.js
│ │ │ ├── PlayersPage.js
│ │ │ ├── PlayerPage.js
│ │ │ ├── Fixtures.js
│ │ │ ├── FixturePage.js
│ │ │ ├── Shop.js
│ │ │ ├── SideNav.js
│ │ │ └── SupportPage.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── package.json
│ └── package.json
└── README.md
API Endpoints
Players

GET /api/players: Get all players.
GET /api/players/:id: Get player by ID.
Shops

GET /api/shops: Get all shop items.
GET /api/shops/:id: Get shop item by ID.
Fixtures

GET /api/fixtures: Get all fixtures.
GET /api/fixtures/:id: Get fixture by ID.
Comments

GET /api/comments: Get all comments.
Components
PlayersPage
Displays a list of all players with their names, numbers, and profile pictures.

PlayerPage
Shows detailed information about a selected player, including stats and profile picture.

Fixtures
Lists all fixtures with their locations, home and away teams, and their logos.

FixturePage
Shows detailed information about a selected fixture.

Shop
Main shop page with sections for jerseys, training kits, and a shopping cart.

ImageSlider
Component to display image sliders, used in the shop and stadium sections.

SideNav
Side navigation bar for navigating between different sections of the app.Inspired by YouTube Video
Header and Footer
Common header and footer components used across the app.

Usage
Run the backend server (npm start in the backend directory).
Run the frontend development server (npm start in the client directory).
Open your browser and navigate to http://localhost:3000.

License
This project is licensed under the MIT License.
