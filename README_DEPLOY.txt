ANNADATA AGRI & SEEDS WEBSITE - FREE HOSTING GUIDE

Best free option: Cloudflare Pages

1. Create GitHub account: https://github.com
2. Create new repository: annadata-agri-seeds
3. Upload all files from this ZIP into the repository.
4. Create Cloudflare account: https://dash.cloudflare.com
5. Go to Workers & Pages > Create > Pages > Connect to Git.
6. Select your GitHub repo.
7. Build settings:
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   Root directory: / (leave blank)
8. Click Save and Deploy.

Alternative: Vercel
- Import GitHub repo
- Framework: Vite
- Build command: npm run build
- Output directory: dist

Local test on computer:
1. Install Node.js LTS
2. Open folder in VS Code
3. Run: npm install
4. Run: npm run dev
5. Open local link shown in terminal

Important:
- This is a React/Vite website, not a direct drag-and-drop HTML site.
- Do NOT upload this ZIP directly to GitHub Pages as static files before build.
- Cloudflare Pages/Vercel will build it automatically for free.
