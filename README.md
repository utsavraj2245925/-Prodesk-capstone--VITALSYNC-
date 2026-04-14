# 🏥 VitalSync – Healthcare Patient Dashboard

## 📌 Project Overview

**VitalSync** is a modern healthcare management web application designed to streamline interactions between **patients and doctors**. It provides a centralized platform for booking appointments, tracking medical history, managing prescriptions, and monitoring real-time doctor availability.

This system improves efficiency in hospitals and clinics by digitizing patient records and enabling seamless communication between healthcare providers and patients.

---

## 🎯 Track

**Fullstack Development**

---

## ⚙️ Tech Stack

### Frontend

* Next.js (App Router)
* Tailwind CSS
* Zustand (State Management)
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose ODM)

### Authentication

* JSON Web Tokens (JWT)
* Role-Based Access Control (Doctor / Patient)

### Real-Time

* Socket.io (Doctor Availability)

### Charts & Visualization

* Recharts / Chart.js

---

## 🚀 Core Features

### 👨‍⚕️ Doctor Features

* View daily appointments
* Toggle availability (Online/Offline)
* Add and manage prescriptions
* Access patient medical history
* Real-time status updates

---

### 🧑‍💻 Patient Features

* Book appointments with doctors
* View upcoming and past appointments
* Access complete medical history timeline
* View and download prescriptions
* Check real-time doctor availability

---

### 📅 Appointment System

* Select doctor, date, and time slots
* Prevent double booking
* Appointment status tracking:

  * Pending
  * Confirmed
  * Completed

---

### 🧾 Medical History Timeline

* Interactive vertical timeline UI
* Displays:

  * Visit dates
  * Diagnoses
  * Notes
  * Prescriptions

---

### 💊 Prescription Management

* Doctors can create prescriptions
* Includes:

  * Medicines list
  * Dosage instructions
  * Notes

---

### 📡 Real-Time Features

* Live doctor availability using Socket.io
* Instant UI updates across dashboards

---

### 📊 Dashboard Analytics

* Total patients count
* Appointment statistics
* Visual charts (daily/weekly trends)

---

## 🎨 UI/UX Design

* Clean, modern healthcare design
* Responsive layout
* Sidebar + Top Navigation
* Card-based UI with soft shadows
* Rounded corners (12px–16px)
* Color Theme:

  * Primary: Blue (#2563EB)
  * Secondary: Green (#10B981)
  * Background: Light (#F9FAFB)

---

## 🧠 State Management (Zustand)

Store structure:

```bash
store/
 ├── authStore.js
 ├── userStore.js
 ├── appointmentStore.js
 ├── doctorStore.js
 ├── prescriptionStore.js
```

---

## 🗄 Database Schema

### Users

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "doctor | patient"
}
```

### Doctors

```json
{
  "userId": "ObjectId",
  "specialization": "string",
  "availability": "boolean"
}
```

### Appointments

```json
{
  "patientId": "ObjectId",
  "doctorId": "ObjectId",
  "date": "Date",
  "status": "pending | confirmed | completed"
}
```

### Prescriptions

```json
{
  "appointmentId": "ObjectId",
  "medicines": ["string"],
  "notes": "string"
}
```

---

## 🔌 API Endpoints

### Auth

```
POST /api/auth/register
POST /api/auth/login
```

### Doctors

```
GET /api/doctors
PATCH /api/doctors/availability
```

### Appointments

```
GET /api/appointments
POST /api/appointments
PATCH /api/appointments/:id
```

### Prescriptions

```
POST /api/prescriptions
GET /api/prescriptions/:patientId
```

---

## 📂 Project Structure

```
vitalsync/
├── client/ (Next.js frontend)
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── store/
│   ├── services/
│   └── utils/
│
├── server/ (Express backend)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
```

---

## 🧪 Best Practices Implemented

* Modular code architecture
* Reusable components
* Secure authentication
* Error handling & validation
* Loading states & skeleton UI
* Environment-based configuration

---

## 📸 Screenshots

> Add your UI screenshots here after development

---

## 🎨 Figma Design

> Add your Figma design link here

---

## 🧩 Architecture Diagram

> Add your ERD / State Diagram here

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/prodesk-capstone-vitalsync.git
cd prodesk-capstone-vitalsync
```

---

### 2. Setup Backend

```bash
cd server
npm install
npm run dev
```

---

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

### 4. Environment Variables

Create a `.env` file in the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 🌐 Deployment

* Frontend: Vercel
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 🔮 Future Enhancements

* Video consultation system
* AI-based diagnosis suggestions
* Mobile app version
* Notifications (SMS/Email)

---

## 👨‍💻 Author

**Your Name**

---

## ⭐ Acknowledgements

This project was built as part of a capstone assignment to demonstrate fullstack development skills, UI/UX design, and real-world application architecture.

---
