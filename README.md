# uid_projectfinal
# 🏍️ Motoinfo

Motoinfo is a web-based information and e-commerce platform for automobile enthusiasts. It combines company and car data, accessories, F1 and racing insights, and allows users to browse, search, and simulate purchases through a sleek frontend.

---

## 📚 Features

- Explore popular car companies and vehicle models
- Detailed sections for accessories, F1, and motorsport
- Functional pages for login, signup, cart, and checkout
- Search and order confirmation interface
- Desktop app compatibility using Electron

---

## 🗂️ Project Structure

```bash
.
├── assets/                # Media and static files
├── cars/                  # Information on different cars
├── companies/             # Automobile company pages
├── f1/                    # Formula 1 related content
├── image/                 # Project-related images
├── node_modules/          # Node.js dependencies
├── MOTOINFOWin32-x64/     # Electron build output
├── about.html             # About the platform
├── accessories.html       # Accessories listing
├── cart.html              # Shopping cart
├── checkout.html          # Checkout flow
├── login.html             # User login
├── signup.html            # User registration
├── products.html          # Product listings
├── order-success.html     # Order confirmation page
├── search.html            # Search interface
├── script.js              # Custom JS for interactivity
├── slideshow.js           # Image slideshow script
├── main.js                # Main Electron/Node script
├── styles.css             # Main styling sheet
├── package.json           # Node.js project config
└── README.md              # This file
🚧 Difficulties Faced
🔗 Page Linking
Managing navigation across multiple HTML pages.

Keeping consistent UI and header/footer throughout.

🎨 Styling & Responsiveness
Aligning sections properly across different screen sizes.

Styling large sets of static content without clutter.

🛒 Cart & Checkout
Implementing cart logic using only front-end JavaScript.

Simulating item storage, total calculation, and transition to checkout.

🔍 Search & Filters
Filtering/searching through local data on the frontend.

Making search relevant without a backend/database.

📦 Electron Packaging
Setting up the Electron environment to run as a desktop app.

Handling different file paths and static file loading in the executable.

📁 Folder Management
Organizing multiple folders and subcategories for cars, companies, F1, and accessories.

Avoiding broken links due to deep folder nesting or incorrect relative paths.

📌 Tech Stack
HTML5, CSS3

JavaScript (Vanilla)

Node.js (for Electron build)

Electron (for desktop version
