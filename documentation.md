TASK MANAGER APP

STACK: 
    Frontend: ReactJS Vite
    Backend: NodeJS(v4) Express
    Database: PostgreSQL(Supabase)

SET UP:
    Backend:
    run commands //in order:
    
        cd app
        cd be
        npm install      //To install all packages and dependencies

        // run the backend, run command

        npm start
    
    Backend dependencies and version
    
        "@supabase/supabase-js": "^2.112.2",
        "cors": "^2.8.6",
        "dotenv": "^17.4.2",
        "express": "^5.2.1",
        "nodemon": "^3.1.14"

    Backend Structure: 
        "Layered Monolith"  // this is to easily find errors and bugs

        Structure Flow:

            Repository -> Service -> Controller -> Route


    Frontend:
    run command (in order)
        cd ..   // to go back to 'app' directory
        cd fe
        npm install //To install all packages and dependencies

        // run the frontend, run command

        npm run dev

    Frontend dependencies and verions:

        "tailwindcss/vite": "^4.3.3",
        "axios": "^1.19.0",
        "react": "^19.2.8",
        "react-dom": "^19.2.8",
        "react-hot-toast": "^2.6.0",
        "react-icons": "^5.7.0",
        "tailwindcss": "^4.3.3"



