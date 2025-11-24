# Use pnpm with Angular CLI

You can switch Angular CLI to use pnpm and avoid npm for installs. Here’s the quickest path.

## Option A: Recreate the app with pnpm (cleanest)
- **Enable Corepack (recommended)**
  - Run:
    ```
    node -v
    corepack enable
    corepack prepare pnpm@latest --activate
    ```
  - If Corepack isn’t available, install globally:
    ```
    npm i -g pnpm
    ```

- **Set Angular CLI to pnpm globally**
  - Run:
    ```
    ng config -g cli.packageManager pnpm
    ```

- **Delete the partially created app folder (failed install)**
  - Close any editors/Explorer windows pointing to it.
  - Run (Windows):
    ```
    rmdir /s /q first-app
    ```

- **Create the app with pnpm**
  - Run:
    ```
    ng new first-app --package-manager=pnpm
    ```
  - Then:
    ```
    cd first-app
    pnpm ng serve
    ```
  - Or:
    ```
    pnpm start
    ```

## Option B: Keep the current folder and finish install with pnpm
If you want to keep `first-app` that was created:

- **Clean locks and modules**
  - Close anything locking files (antivirus/Explorer).
  - Run:
    ```
    cd first-app
    rmdir /s /q node_modules
    del package-lock.json
    ```
- **Install with pnpm**
  - Run:
    ```
    pnpm install
    pnpm ng serve
    ```

## If you’re behind a proxy or see ECONNRESET again
- **Configure pnpm proxy**
  ```
  pnpm config set proxy http://your-proxy:port
  pnpm config set https-proxy http://your-proxy:port
  pnpm config set strict-ssl false
  ```
- **Windows file locks (EPERM) tips**
  - Run terminal as Administrator.
  - Exclude the project path from antivirus real-time scanning.
  - Ensure the folder isn’t open in Explorer.

## Daily use with pnpm
- **Add deps**
  - `pnpm add <pkg>`
  - `pnpm add -D <pkg>`
- **Run Angular CLI**
  - Inside the project: `pnpm ng <command>` (e.g., `pnpm ng serve`, `pnpm ng generate component hello`)
  - Or: `pnpm exec ng <command>`

# Summary
I outlined two ways to use pnpm: recreate the Angular app with pnpm (cleanest) or convert your current folder by reinstalling with pnpm. I also included proxy/EPERM fixes specific to Windows. Tell me which option you prefer and I’ll guide you step by step.

---
# Use npm with Angular CLI

You can absolutely use npm. Given the earlier ECONNRESET and EPERM errors, here’s a reliable path with npm on Windows.

## Recommended setup
- **Use Node LTS**
  - Check: `node -v`
  - For Angular 18+, Node 18/20 LTS is recommended.
- **Tell Angular CLI to use npm**
  - Global: `ng config -g cli.packageManager npm`
  - Per command: `ng new first-app --package-manager=npm`

## If you want to keep the existing folder
- **Clean and reinstall**
  - From project root (`first-app`):
    ```
    rmdir /s /q node_modules
    del package-lock.json
    npm cache clean --force
    npm install
    ```
  - Start dev server:
    ```
    npm start
    ```
    or
    ```
    npx ng serve
    ```

## If the previous `ng new` failed mid-way
- **Safest is to recreate**
  - Close VS Code/Explorer windows on the folder
  - Remove:
    ```
    rmdir /s /q first-app
    ```
  - Recreate with npm:
    ```
    ng new first-app --package-manager=npm
    cd first-app
    npm start
    ```

## Fixing ECONNRESET (network) with npm
- **Quick retry with longer timeouts**
  ```
  npm config set fetch-retries 5
  npm config set fetch-retry-maxtimeout 60000
  npm config set fetch-timeout 120000
  npm config set progress false
  ```
- **If behind a proxy**
  ```
  npm config set proxy http://your-proxy:port
  npm config set https-proxy http://your-proxy:port
  npm config set strict-ssl false
  ```
  Replace with your actual proxy. Only set `strict-ssl false` if your proxy intercepts SSL.
- Optional mirrors (only if registry is flaky in your region):
  ```
  npm config set registry https://registry.npmmirror.com
  ```
  You can switch back later:
  ```
  npm config set registry https://registry.npmjs.org
  ```

## Fixing EPERM / file lock issues on Windows
- Close File Explorer windows and editors pointing to the folder.
- Temporarily pause antivirus for the project path or add an exclusion.
- Run terminal as Administrator if deletions fail.
- Then clean and reinstall:
  ```
  rmdir /s /q node_modules
  del package-lock.json
  npm cache clean --force
  npm install
  ```

## Daily use with npm
- Add deps: `npm install <pkg>` or `npm install -D <pkg>`
- Run Angular CLI: `npx ng <command>` (e.g., `npx ng serve`, `npx ng g component hello`)
- Scripts: `npm start`, `npm run build`, `npm test`

# Next step
Tell me whether you want to:
- Recreate the app with npm (cleanest), or
- Keep the current `first-app` and complete install with npm.

I’ll provide the exact commands for your chosen path.

# Summary
You can use npm by setting Angular CLI to npm, cleaning any partial install, and addressing network (ECONNRESET) and Windows lock (EPERM) issues with the steps above.

---
# Use Angular CLI in PowerShell (common fixes)
## 1) “ng.ps1 cannot be loaded because running scripts is disabled”

- Fix execution policy for current user (safe):
```powershell
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
 - Verify:
```powershell
    Get-ExecutionPolicy -List
```