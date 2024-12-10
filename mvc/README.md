# Login Demo MVC

This is a demo application built using the Model-View-Controller (MVC) pattern in .NET 8 SDK. The purpose of this application is to illustrate server-rendered views (HTML documents) and how they interact with the client.

By observing the browser's Network Panel, you can see how document responses are handled in a classic server-rendered application.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yalathiya/Server-Client-Communication-Strategies.git
cd Server-Client-Communication-Strategies
cd mvc
cd LoginDemo
```

### 2. Build & Run the Project
```bash
dotnet build
dotnet run
```

## Project Structure
```bash
LoginDemo/
├── Controllers/
│   └── HomeController.cs   # Handles routing and logic for pages
├── Models/                 # Placeholder for future models
├── Views/
│   ├── Home/
│   │   ├── Index.cshtml     # Home page
│   │   ├── Login.cshtml     # Login page
│   │   ├── Privacy.cshtml   # Privacy page
│   ├── Shared/
│       ├── _ViewImports.cshtml  # Shared imports
│       ├── _ViewStart.cshtml    # Layout configuration
├── wwwroot/                # Static files (CSS, JS, images)
├── appsettings.json        # App configuration
├── Dockerfile              # Docker build instructions
├── Program.cs              # Entry point of the application
├── LoginDemo.csproj        # Project file
└── .dockerignore           # Files to exclude from Docker build

```

## Testing

![alt text](https://github.com/yalathiya/Server-Client-Communication-Strategies/blob/main/mvc/LoginDemo/Screenshot%20(282).png)