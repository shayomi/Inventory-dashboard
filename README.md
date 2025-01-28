Legion Inventory Dashboard

Legion is a full-stack inventory management dashboard designed for sneakers products. This application provides an intuitive interface for managing inventory, tracking stock, and ensuring streamlined operations for sneaker enthusiasts and retailers. The app is built using modern technologies, deployed on AWS services, and ensures scalability and reliability.

**Features**

Comprehensive Inventory Management: Add, edit, and delete sneaker products.
Real-Time Updates: Keep track of stock levels dynamically.
Interactive Dashboard: Visualize product data with charts and analytics.
Responsive Design: Optimized for desktop, tablet, and mobile devices.
Secure Authentication: User login and session management.
AWS-Powered Deployment: Fully deployed using AWS Amplify, EC2, and S3 for robust performance.


**Tech Stack**

Frontend

Next.js: A React-based framework for building fast and scalable web applications.
Tailwind CSS: Utility-first CSS framework for styling.

Backend
Node.js: JavaScript runtime for server-side development.
Express.js: Minimal and flexible Node.js web application framework.
MongoDB: NoSQL database for storing product and user data.

**Deployment**

Frontend: Hosted on AWS Amplify for seamless CI/CD and scalability.
Backend: Deployed on AWS EC2 for reliable and customizable server management.
Storage: AWS S3 for storing assets and static files.

**Installation and Setup**

Prerequisites
Node.js (v16 or higher)
MongoDB (local or cloud instance)
AWS account

**Local Development Setup**

Clone the repository:
git clone (https://github.com/shayomi/Inventory-dashboard.git
cd legion-inventory-dashboard

Install dependencies:

# For frontend
cd frontend
npm install

# For backend
cd ../backend
npm install

Set up environment variables:
Create a .env file in both the frontend and backend directories with the following:

Frontend (.env.local):

NEXT_PUBLIC_API_URL=http://localhost:5000

Backend (.env):

PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
AWS_S3_BUCKET=your-s3-bucket-name
AWS_ACCESS_KEY=your-aws-access-key
AWS_SECRET_KEY=your-aws-secret-key

Start the application:

# Start the backend
cd backend
npm run dev

# Start the frontend
cd ../frontend
npm run dev

Access the app locally at http://localhost:3000.

**Deployment**

AWS Services Used

**Frontend:**

Deployed via AWS Amplify for automatic builds and hosting.

**Backend:**

Hosted on an AWS EC2 instance for complete control over server configurations.

**Storage:**

AWS S3 for storing static assets (e.g., images, documents).

**Deployment Steps**

**Frontend Deployment (AWS Amplify):**

Connect your GitHub repository to AWS Amplify.
Configure build settings (defaults are usually sufficient for Next.js).
Deploy and monitor the app via the Amplify console.

**Backend Deployment (AWS EC2):**

SSH into your EC2 instance.
Clone the repository and navigate to the backend directory.
Install dependencies and start the server:

npm install
pm2 start server.js

**Configure AWS S3:**

Upload your assets to the S3 bucket.
Ensure proper bucket policies and permissions are set for public access.

**Usage**

Log In: Use your credentials to access the dashboard.
Manage Inventory: Add, update, or delete sneaker products.
View Analytics: Use the dashboard’s visual tools to track inventory trends.
Upload Images: Upload sneaker images to AWS S3 for each product.

**Screenshots**

Add screenshots of your application (dashboard, product page, etc.) for better visualization.

**Contributing**

Contributions are welcome! Follow these steps to contribute:
Fork the repository.
Create a new branch:
git checkout -b feature-name
Make your changes and commit them:
git commit -m "Added feature-name"
Push to the branch:
git push origin feature-name
Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

**Acknowledgements**

AWS for reliable cloud services.
Next.js and Node.js for powering the app.
Tailwind CSS for styling.
All contributors and collaborators.

**Contact**

For any questions or feedback, feel free to reach out:
Email: steve.legion94@gmail.com
GitHub: [shayomi](https://github.com/shayomi/Inventory-dashboard/

