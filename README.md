# 🚗 Insurance Selection App  

This project implements a **multi-step insurance selection system** where users can register, choose an insurance type, select a vehicle, pick an insurance provider, and apply discounts. Built using **Vite, React, Redux Toolkit, TypeScript, CSS Modules, and SASS**.  

## 📌 Features  

### **Page 1: User Registration**  
- A form for user registration with validation rules.
- Displays **error messages** when validation fails.  
- On successful registration, the **user’s name appears in the Navbar**, and they are redirected to the insurance selection page.  

### **Page 2: Select Insurance Type**  
- Users can choose **Third-Party Insurance**
- **Other insurance types are disabled**.  
- Clicking **Next** navigates to vehicle selection.  

### **Page 3: Select Vehicle Type & Model**  
- Fetches **vehicle types** via the `getVehicleTypes` API.  
- Once a vehicle type is selected, users can **choose a model** from the available options.  
- The **Back button** is always enabled.  
- The **Next button** is enabled only when valid selections are made.  

### **Page 4: Select Insurance Provider**  
- Fetches a list of **insurance companies** via the `getInsureCompanies` API.  
- Users can select an insurance provider.  
- The **Next button** is enabled only after a selection is made.  

### **Page 5: Select Discounts & Summary**  
- Fetches available **third-party insurance discounts** via the `getThirdDiscounts` API.  
- Users can select applicable discounts.  
- Clicking **Get Quote** shows a **modal with a summary** of all user-entered details.  

## 🔧 Tech Stack  

### **Frontend**  
- **React + TypeScript** for better type safety and maintainability.
- **Redux Toolkit** for state management.  
- **CSS Modules & SASS** for styling.  
- **Vite** for fast development.  

### **Backend API (External)**  
- **Fetches required data from API endpoints:**  
  - **Vehicle Types:** `/api/getVehicleTypes`  
  - **Insurance Companies:** `/api/getInsureCompanies`  
  - **Discounts:** `/api/getThirdDiscounts`  

## 🚀 Setup  

1. **Clone this repository:**  
   ```sh
   git clone https://github.com/Saamiraa/azki.git
2. **Navigate into the project directory:** 
   ```sh
   cd azki
3. **Install dependencies:** 
   ```sh
   npm install
4. **Start the development server:** 
   ```sh
   npm run dev