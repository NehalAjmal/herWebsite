# HerBloom Web Platform

Welcome to the official landing page and static web portal for **HerBloom** — your intelligent, secure, and personalized companion for every stage of your health journey.

This repository contains the source code for the HerBloom website, built to showcase the app's features, provide legal/policy information, and serve as the main download portal for users.

---

## 🚀 Technologies Used

This project is a modern, single-page React application optimized for lightning-fast performance:
- **React 18** for core UI component architecture
- **Vite** for blazing fast build tooling and hot-module replacement
- **Vanilla CSS** with a custom Glassmorphism aesthetic and responsive Bento Grids
- **React Icons** for lightweight, scalable vector iconography

---

## 💻 Running the Site Locally

To run the website on your own machine for development, testing, or making edits:

1. **Ensure you have Node.js installed.**
2. **Clone this repository** and navigate to the project folder:
   ```bash
   cd herwebsite
   ```
3. **Install the required dependencies:**
   ```bash
   npm install
   ```
4. **Start the local development server:**
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

---

## 📱 Updating App Downloads

The website provides a direct download link for the Android APK in the Hero section. 
To update the downloadable file when you release a new version of the app:

1. Drop the new `.apk` file into the `/public` folder of this repository.
2. Ensure the file is named exactly `HerBloom.apk` (or update the filename in `App.jsx` to match).
3. Push your code. When users click the "Get it on Android" button, their browser will automatically trigger the secure file download directly from your hosting provider.

---

## 🌐 Publishing to the Web (Vercel)

Vercel is the absolute best and easiest place to host a React/Vite website. It is completely free, blazing fast, and handles custom domains effortlessly.

### Step 1: Push your code to GitHub
If your project isn't already on GitHub, you need to push it there. Vercel supports **Private** repositories on their free tier, so your code remains secure.
1. Create a free account on [GitHub](https://github.com/).
2. Create a new repository called `herwebsite`.
3. Open your terminal, and run these commands to push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/herwebsite.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign up using your GitHub account.
2. Click **"Add New Project"**.
3. It will show a list of your GitHub repositories. Find `herwebsite` and click **"Import"**.
4. Vercel automatically detects that you are using React and Vite! You don't need to change any settings.
5. Click the big **"Deploy"** button.
6. Wait about 60 seconds. Your website is now live on the internet! Vercel will give you a free link (e.g., `herwebsite.vercel.app`).

---

## 🔗 Adding Your Custom Domain

Once your site is live on Vercel, connecting your custom domain (like `herbloom.com` or `naaricare.com`) takes only 2 minutes.

1. Go to your project dashboard on Vercel.
2. Click on the **"Settings"** tab, then click **"Domains"** on the left side.
3. Type in your custom domain (e.g., `herbloom.com`) and click **"Add"**.
4. Vercel will now show you a screen with DNS records (usually an `A Record` pointing to `76.76.21.21` or a `CNAME` record).
5. Open a new tab and log into your domain registrar (GoDaddy, Namecheap, Google Domains, etc.).
6. Find the **"DNS Management"** or **"Advanced DNS"** section for your domain.
7. Add the exact record that Vercel told you to add.
8. Go back to Vercel. Within a few minutes, Vercel will verify the domain, automatically generate a free SSL certificate (the secure padlock icon), and your site will be live on your custom domain!

---
*Made with ❤️ for women everywhere.*
