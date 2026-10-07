# My Weekly Planner — Firebase notifications

Frontend: GitHub Pages.
Backend: Firebase Anonymous Auth + Firestore + scheduled Cloud Function + FCM.

The app keeps the modern weekly planner UI and school schedule. Weekly tasks can now have a start time and a reminder (for example, Maths at 17:00, remind 10 minutes before). The scheduled function checks every minute and sends the FCM push even when the PWA is closed.

See FIREBASE_DEPLOY.md for the one-time deployment steps.
