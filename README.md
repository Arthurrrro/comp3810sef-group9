## js_server
### js_server/server.js
- **Express.js**: Node.js web framework
- **Cookie Parser**: Handles HTTP cookies
- **MongoDB Database Connection**
- **Cross-Origin Request Handling**
- **Supports Multiple Frontend Domains**
- **Automatic Local Development Environment Detection**
- **CRUD Management System** covering multiple business modules
- **Serves both React Frontend and Express API** from the same server
- **Supports React Router Client-Side Routing**
- **API Requests** routed to corresponding backend endpoints
- **Page Requests** return React application's index.html
- **Security Features**
  - CORS Configuration: Controls cross-origin access
  - Environment Variables: Protects sensitive information
  - Google OAuth Authentication: Identity verification system

### js_server/orderBean
- Contains preset data templates that can be temporarily stored
- Data models for: staff, fruits, countries, cities, locations, inventory, borrows, deliveries

### js_server/orderDB
- Controls database operations: read, delete, update, insert
- Database access layer for all collections

### js_server/routes
- Exposes API endpoints for frontend connectivity
- RESTful API routes for all business modules

### js_server/package.json
- **Full-Stack Project** - Includes frontend build processes
- **Modern Configuration** - Uses environment variables and hot reloading
- **Authentication Integration** - Supports Google OAuth
- **Database Driven** - MongoDB data persistence
- **Development Friendly** - Distinguishes between development and production environments

## Views
### Views/src/components
- User Interface components
- **AddFruit**: Component for creating new fruits
- **AddInventory**: Component for adding inventory records
- **AddDeliveries**: Component for creating delivery records
- **AddStaffDialog**: Component for adding new staff members
- **StaffList/StaffManagement**: Staff list and management interface
- **fruitinformation**: Fruit information display and editing
- **Deliverieslist**: Delivery list and management
- **Order**: Order management interface
- **PartitionOrders**: Inventory partition management
- **RequestBorrow**: Request borrowing interface
- **borrowConfirm**: Borrow confirmation interface
- **Yield**: Production yield reporting and analytics
- **profile**: User profile management

### Views/src/utils/auth.js
- Controls login routing paths

### Views/src/components/GetAPI/Getapi.js
- Connects to and consumes backend APIs

### Views/package-lock.json
**Technology Stack Characteristics:**
1. **Modern Frontend Stack**
   - React 19 + Material-UI + React Router
   - Enterprise-grade technology choices

2. **Complete Development Experience**
   - Built-in testing configuration
   - Code quality linting
   - Performance monitoring

3. **Rich Feature Integration**
   - Chart displays (Recharts)
   - Google Login (OAuth)
   - Responsive design (MUI)

4. **Production Ready**
   - Optimized build configuration
   - Browser compatibility handling
   - Performance monitoring integration

### Views/src/App.js
- **Login Status Management** - Controls user login/logout states
- **Google OAuth Integration** - Uses Google accounts for authentication
- **Conditional Rendering** - Displays different interfaces based on login status

### Views/src/index.js
- **Application Startup** - Mounts React components to the DOM
- **Root Component Rendering** - Initializes the entire application


# Fruit-Order-System

A simple fruit ordering system using the MERN stack.

## Project Information

**Group Number:** comp3810-group9

**Students:**

| Name | SID |
|------|-----|
| Tse Cheuk Wa | 12958473 |
| Man Ka Lok | 3896396 |
| LIU Jiahong | 13896612 |
| Leung Yi Chen | 13897565 |

## Cloud-Based Server URL

**Production Server:** `https://comp3810sef-group9.onrender.com/`

---

# run npm
# 1.
cd js_server && npm install && cd ../Views && npm install && cd .. && npm install concurrently
# 2.
npx concurrently "cd js_server && node server.js" "cd Views && npm start"

---

## Operation Guides

### Login/Logout Pages

#### Valid Login Credentials

**Manager Accounts:**
- Email: `john@us.com` / Password: `password1`
- Email: `li@china.com` / Password: `password2`
- Email: `tanaka@jp.com` / Password: `password3`
- Email: `emma@au.com` / Password: `password4`
- Email: `carlos@es.com` / Password: `password5`

**Staff/Warehouse Accounts:**
- Email: `mike@us.com` / Password: `password6`
- Email: `sato@jp.com` / Password: `password8`
- Email: `liam@au.com` / Password: `password9`
- Email: `maria@es.com` / Password: `password10`

**Shop Accounts:**
- Email: `david@us.com` / Password: `password12`
- Email: `zhang@china.com` / Password: `password13`
- Email: `yamada@jp.com` / Password: `password14`

#### Sign-In Steps

1. Navigate to the login page at `https://comp3810sef-group9.onrender.com/`
2. Enter your email and password, OR
3. Click "Sign in with Google" to use Google OAuth authentication
4. Upon successful login, you will be redirected to the main dashboard
5. Use the logout button in the sidebar to sign out

**Note:** Only staff members with `status: true` can log in. Disabled accounts (`status: false`) will be rejected.

---

### CRUD Web Pages

#### Create Operations

- **Add Fruit**: Navigate to "Fruit" → "Add Fruit" (Manager only)
  - Fill in fruit name, origin country, price, unit, description
  - Click "Add Fruit" button to create

- **Add Inventory**: Navigate to "Inventory" → "Add Inventory"
  - Select fruit, location, and enter quantity
  - Click "Add Inventory" button

- **Add Delivery**: Navigate to "Deliveries" → "Add Delivery" (Manager/Warehouse only)
  - Fill in delivery details (from/to locations, fruit, quantity, dates)
  - Click "Create Delivery" button

- **Add Staff**: Navigate to "Staff" → "List Staff" → Click "Add Staff" button (Manager only)
  - Fill in staff information (name, email, password, phone, job, location)
  - Click "Add" button

#### Read Operations

- **View Fruits**: Navigate to "Fruit" → "Fruit Information"
  - Displays all fruits in a table with search and pagination

- **View Inventory**: Navigate to "Inventory" → "My Inventory"
  - Shows inventory records filtered by user's location

- **View Deliveries**: Navigate to "Deliveries" (Manager/Warehouse only)
  - Displays all delivery records with filtering options

- **View Staff**: Navigate to "Staff" → "List Staff" (Manager only)
  - Shows all staff members with search functionality

- **View Orders**: Navigate to "My Inventory" → "My Inventory"
  - Displays orders and reservations

#### Update Operations

- **Edit Fruit**: Navigate to "Fruit" → "Fruit Information" → Click "Edit" button on a fruit row (Manager only)
  - Modify fruit details and click "Save Changes"

- **Edit Staff**: Navigate to "Staff" → "List Staff" → Click "Edit" button (Manager can edit Staff/Shop, Staff can edit Shop only)
  - Update staff information and click "SAVE CHANGES"

- **Edit Delivery**: Navigate to "Deliveries" → Click "Edit" button on a delivery row
  - Modify delivery details and save

- **Update Inventory**: Navigate to "Inventory" → "My Inventory"
  - Update inventory quantities as needed

#### Delete Operations

- **Delete Fruit**: Navigate to "Fruit" → "Fruit Information" → Click "Delete" button on a fruit row (Manager only)
  - Confirm deletion in the dialog

- **Delete Staff**: Navigate to "Staff" → "List Staff" → Click "Delete" button (Manager only)
  - Confirm deletion

- **Delete Delivery**: Navigate to "Deliveries" → Click "Delete" button on a delivery row
  - Confirm deletion

**Permission Notes:**
- **Manager**: Can perform all CRUD operations on all modules
- **Staff/Warehouse**: Can create/read/update inventory, deliveries, and borrows; limited staff management
- **Shop**: Can only read inventory and create borrow requests

---

### RESTful CRUD Services

#### API Base URL
- **Production**: `https://comp3810sef-group9.onrender.com`
- **Local Development**: `http://localhost:3020`

#### Complete API Endpoints

##### Fruits API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/fruits` | Get all fruits |
| POST | `/fruits` | Create new fruit(s) |
| PUT | `/fruits/:id` | Update fruit by ID |
| DELETE | `/fruits/:id` | Delete fruit by ID |

##### Staff API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/staff` | Get all staff members |
| GET | `/staff/information/:email` | Get staff information by email |
| POST | `/staff` | Create new staff member(s) |
| PUT | `/staff/:id` | Update staff by ID (requires authentication & permission) |
| DELETE | `/staff/:id` | Delete staff by ID |
| POST | `/staff/login` | Staff login (email/password) |
| POST | `/staff/google-login` | Google OAuth login |
| GET | `/staff/login/:email/:password` | URL parameter login (legacy) |

##### Authentication API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/auth/check` | Check authentication status |
| POST | `/auth/logout` | Logout current user |

##### Countries API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/countries` | Get all countries |

##### Cities API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cities` | Get all cities |
| GET | `/cities/country/:countryId` | Get cities by country ID |
| GET | `/cities/:id` | Get city by ID |
| POST | `/cities` | Create new city |
| PUT | `/cities/:id` | Update city by ID |
| DELETE | `/cities/:id` | Delete city by ID |
| GET | `/cities/stats/count-by-country` | Get city count statistics by country |

##### Locations API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/locations` | Get all locations |
| POST | `/locations` | Create new location |
| PUT | `/locations/:id` | Update location by ID |
| DELETE | `/locations/:id` | Delete location by ID |

##### Inventory API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/inventory` | Get all inventory records |
| POST | `/inventory` | Create new inventory record |
| PUT | `/inventory/:id` | Update inventory by ID |
| DELETE | `/inventory/:id` | Delete inventory by ID |

##### Deliveries API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/deliveries` | Get all deliveries |
| GET | `/deliveries/report` | Get delivery report |
| GET | `/deliveries/annual-summary/:year` | Get annual delivery summary |
| POST | `/deliveries` | Create new delivery |
| PUT | `/deliveries/:id` | Update delivery by ID |
| DELETE | `/deliveries/:id` | Delete delivery by ID |

##### Borrows API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/borrows` | Get all borrow records |
| POST | `/borrows` | Create new borrow request |
| PUT | `/borrows/:id` | Update borrow by ID |
| DELETE | `/borrows/:id` | Delete borrow by ID |

---

# API Testing Commands (Production - Render)

## 1. GET - Get all fruits
```bash
curl -X GET https://comp3810sef-group9.onrender.com/fruits
```

## 2. POST - Create new fruit
```bash
curl -X POST https://comp3810sef-group9.onrender.com/fruits -H "Content-Type: application/json" -d "{\"fruitsArray\": [{\"_id\": 8888, \"name\": \"Apple\", \"originCountryId\": 1, \"price\": 5.50, \"unit\": \"kg\", \"description\": \"Fresh red apples\"}]}"
```

## 3. PUT - Update fruit
```bash
curl -X PUT https://comp3810sef-group9.onrender.com/fruits/8888 -H "Content-Type: application/json" -d "{\"name\": \"Green Apple\", \"originCountryId\": 1, \"price\": 6.00}"
```

## 4. DELETE - Delete fruit
```bash
curl -X DELETE https://comp3810sef-group9.onrender.com/fruits/8888
```

#### Staff API Testing Examples

**1. GET - Get all staff**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/staff
```

**2. POST - Staff login**
```bash
curl -X POST https://comp3810sef-group9.onrender.com/staff/login -H "Content-Type: application/json" -d "{\"email\": \"john@us.com\", \"password\": \"password1\"}"
```

**3. GET - Check authentication**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/auth/check -b cookies.txt
```

**4. POST - Create staff (requires authentication)**
```bash
curl -X POST https://comp3810sef-group9.onrender.com/staff -H "Content-Type: application/json" -b cookies.txt -d "{\"staffArray\": [{\"name\": \"New Staff\", \"email\": \"newstaff@test.com\", \"password\": \"password123\", \"phone\": \"1234567890\", \"job\": \"warehouse\", \"locationId\": 1001, \"status\": true}]}"
```

**5. PUT - Update staff (requires authentication & permission)**
```bash
curl -X PUT https://comp3810sef-group9.onrender.com/staff/6 -H "Content-Type: application/json" -b cookies.txt -d "{\"name\": \"Updated Name\", \"email\": \"mike@us.com\", \"job\": \"warehouse\", \"phone\": \"6789012345\", \"locationId\": 1002, \"status\": true}"
```

**6. DELETE - Delete staff (requires authentication & permission)**
```bash
curl -X DELETE https://comp3810sef-group9.onrender.com/staff/6 -b cookies.txt
```

#### Other API Testing Examples

**Get all countries:**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/countries
```

**Get all cities:**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/cities
```

**Get all locations:**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/locations
```

**Get all inventory:**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/inventory
```

**Get all deliveries:**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/deliveries
```

**Get all borrows:**
```bash
curl -X GET https://comp3810sef-group9.onrender.com/borrows
```

---

# API Testing Commands (Local Development)

## 1. GET - Get all fruits
```bash
curl -X GET http://localhost:3020/fruits
```

## 2. POST - Create new fruit
```bash
curl -X POST http://localhost:3020/fruits -H "Content-Type: application/json" -d "{\"fruitsArray\": [{\"_id\": 8888, \"name\": \"Apple\", \"originCountryId\": 1, \"price\": 5.50, \"unit\": \"kg\", \"description\": \"Fresh red apples\"}]}"
```

## 3. PUT - Update fruit
```bash
curl -X PUT http://localhost:3020/fruits/8888 -H "Content-Type: application/json" -d "{\"name\": \"Green Apple\", \"originCountryId\": 1, \"price\": 6.00}"
```

## 4. DELETE - Delete fruit
```bash
curl -X DELETE http://localhost:3020/fruits/8888
```
