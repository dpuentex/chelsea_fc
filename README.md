# Chelsea FC MOCK

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Usage](#usage)
- [License](#license)

## Introduction

<p>Chelsea FC MOCK is a full-stack web application designed for Chelsea club-related activities. The app features various sections such as players, fixtures, a shop, and a stadium. Users can view player details, fixture details, browse and purchase items from the shop, and leave comments.</p>

## Features

<ul>
  <li><strong>Players Section</strong>: View all players, and individual player details including stats.</li>
  <li><strong>Fixtures Section</strong>: View all fixtures and individual fixture details.</li>
  <li><strong>Shop Section</strong>: Browse and purchase items, including jerseys and training kits.</li>
  <li><strong>Stadium Section</strong>: Information and image slider for the stadium.</li>
  <li><strong>Comments Section</strong>: Leave and view comments on fixtures and players.</li>
  <li><strong>Responsive Design</strong>: Optimized for both desktop and mobile devices.</li>
</ul>

## Technologies Used

<ul>
  <li><strong>Frontend</strong>: React, React Router, CSS (with custom styling), Slick Carousel for image sliders.</li>
  <li><strong>Backend</strong>: Express, Node.js, dotenv for environment variables.</li>
  <li><strong>Database</strong>: Assumed to be using a relational database (e.g., MySQL, PostgreSQL).</li>
  <li><strong>Miscellaneous</strong>: react-icons for icons.</li>
</ul>

## Installation

### Backend Setup

<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/dpuentex/chelsea_fc.git
cd chelsea_fc/backend</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a `.env` file in the backend directory and set your environment variables:
    <pre><code>PORT=7000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name</code></pre>
  </li>
  <li>Start the backend server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

### Frontend Setup

<ol>
  <li>Navigate to the client directory:
    <pre><code>cd ../client</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the frontend development server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

## Project Structure

<pre><code>chelsea_fc/
├── backend/
│   ├── controllers/
│   │   ├── commentsController.js
│   │   ├── fixturesController.js
│   │   ├── playersController.js
│   │   └── shopsController.js
│   ├── models/
│   │   ├── Player.js
│   │   ├── Shop.js
│   │   └── Fixture.js
│   ├── .env
│   ├── index.js
│   └── package.json
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── css/
│   │   │   ├── imgs/
│   │   │   └── extra_data/
│   │   ├── components/
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── ImageSlider.js
│   │   │   ├── PlayersPage.js
│   │   │   ├── PlayerPage.js
│   │   │   ├── Fixtures.js
│   │   │   ├── FixturePage.js
│   │   │   ├── Shop.js
│   │   │   ├── SideNav.js
│   │   │   └── SupportPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
│   └── package.json
└── README.md</code></pre>

## API Endpoints

### Players

<ul>
  <li><strong>GET /api/players</strong>: Get all players.</li>
  <li><strong>GET /api/players/:id</strong>: Get player by ID.</li>
</ul>

### Shops

<ul>
  <li><strong>GET /api/shops</strong>: Get all shop items.</li>
  <li><strong>GET /api/shops/:id</strong>: Get shop item by ID.</li>
</ul>

### Fixtures

<ul>
  <li><strong>GET /api/fixtures</strong>: Get all fixtures.</li>
  <li><strong>GET /api/fixtures/:id</strong>: Get fixture by ID.</li>
</ul>

### Comments

<ul>
  <li><strong>GET /api/comments</strong>: Get all comments.</li>
</ul>

## Components

<ul>
  <li><strong>PlayersPage</strong>: Displays a list of all players with their names, numbers, and profile pictures.</li>
  <li><strong>PlayerPage</strong>: Shows detailed information about a selected player, including stats and profile picture.</li>
  <li><strong>Fixtures</strong>: Lists all fixtures with their locations, home and away teams, and their logos.</li>
  <li><strong>FixturePage</strong>: Shows detailed information about a selected fixture.</li>
  <li><strong>Shop</strong>: Main shop page with sections for jerseys, training kits, and a shopping cart.</li>
  <li><strong>ImageSlider</strong>: Component to display image sliders, used in the shop and stadium sections.</li>
  <li><strong>SideNav</strong>: Side navigation bar for navigating between different sections of the app.</li>
  <li><strong>Header and Footer</strong>: Common header and footer components used across the app.</li>
</ul>

## Future add-ons

  </li>
  <li><strong>News Page</strong>: News Page, with Slide article and newspaper layout blog on CHELSEA FC.</li>
  <li><strong>Create account/Log-in</strong>: Create account/Log-in have purchased items be in history</li>
    <li><strong>Connect store to the back end</strong>: Connect store to the back end to connect to the inventory so checking out affects the item inventory</li>
      <li><strong>Trivia Game</strong>: Make a Chelsea trivia game that has a high score available in the user account with a leader board that posts the top 10 USERS' score with a privacy option for those who don't want their userPublic</li>

</ul>

## Usage

<ol>
  <li>Run the backend server:
    <pre><code>npm start</code></pre>
  </li>
  <li>Run the frontend development server:
    <pre><code>npm start</code></pre>
  </li>
  <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>.</li>

## Link to DEPLOY

<li>https://chelsea-fc.onrender.com </li>
