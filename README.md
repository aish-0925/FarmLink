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

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file with necessary environment variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the API endpoint in `js/config.js`

4. Serve the frontend:
   ```bash
   npm start
   ```

## API Documentation

The API endpoints are organized into the following categories:

- `/api/auth` - Authentication routes
- `/api/contracts` - Contract management
- `/api/deliveries` - Delivery tracking
- `/api/offers` - Offer management
- `/api/requests` - Request handling

Detailed API documentation is available in the backend documentation.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@farmlink.com or join our Slack channel.

## Acknowledgments

- Thanks to all the farmers and chefs who provided valuable feedback
- The open-source community for the amazing tools and libraries