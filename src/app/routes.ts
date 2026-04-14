import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./components/DashboardLayout";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import AppointmentBooking from "./pages/AppointmentBooking";
import MedicalHistory from "./pages/MedicalHistory";
import PrescriptionViewer from "./pages/PrescriptionViewer";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Prescriptions from "./pages/Prescriptions";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DoctorDashboard },
      { path: "doctor", Component: DoctorDashboard },
      { path: "patient", Component: PatientDashboard },
      { path: "appointments", Component: Appointments },
      { path: "patients", Component: Patients },
      { path: "prescriptions", Component: Prescriptions },
      { path: "settings", Component: Settings },
    ],
  },
  {
    path: "/book-appointment",
    Component: AppointmentBooking,
  },
  {
    path: "/medical-history",
    Component: MedicalHistory,
  },
  {
    path: "/prescription/:id",
    Component: PrescriptionViewer,
  },
]);
