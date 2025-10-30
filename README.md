# FarmLink

FarmLink is a web-based platform that facilitates direct connections between farmers and chefs, streamlining the farm-to-table supply chain process.

## Features

- **User Authentication**
  - Secure login and registration system
  - Role-based access (Farmers and Chefs)

- **Dashboard Interface**
  - Separate dashboards for farmers and chefs
  - Analytics and performance metrics
  - Interactive charts and data visualization

- **Contract Management**
  - Create and manage supply contracts
  - Track contract status and fulfillment
  - Digital agreement system

- **Delivery System**
  - Track produce deliveries
  - Delivery status monitoring
  - Real-time updates

- **Offer Management**
  - Create and respond to supply offers
  - Price negotiation platform
  - Seasonal produce listings

- **Request System**
  - Chefs can create produce requests
  - Farmers can browse and respond to requests
  - Request status tracking

- **Maps Integration**
  - Location-based services using Mapbox
  - Delivery route visualization
  - Geographic distance calculation

## Tech Stack

### Frontend
- HTML5/CSS3
- JavaScript
- AngularJS
- Bootstrap
- Chart.js for analytics
- Mapbox GL for mapping features

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- JWT for authentication

## Project Structure

```
├── backend/               # Server-side code
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Request handlers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── utils/        # Utility functions
│   └── uploads/          # File upload directory
│
├── frontend/             # Client-side code
│   ├── assets/          # Static resources
│   ├── dashboard/       # Dashboard views
│   └── js/             # JavaScript files
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- NPM or Yarn

## API Documentation

The API endpoints are organized into the following categories:

- `/api/auth` - Authentication routes
- `/api/contracts` - Contract management
- `/api/deliveries` - Delivery tracking
- `/api/offers` - Offer management
- `/api/requests` - Request handling

Detailed API documentation is available in the backend documentation.
