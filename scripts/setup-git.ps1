# Setup Git repository script for Windows PowerShell
# Usage: Open PowerShell in the project folder and run: .\scripts\setup-git.ps1

# Check git
try {
    git --version > $null 2>&1
} catch {
    Write-Error "Git no está instalado o no está en el PATH. Instálalo desde https://git-scm.com/download/win y vuelve a ejecutar este script."
    exit 1
}

Write-Host "Iniciando configuración del repo..." -ForegroundColor Cyan

# Initialize repo if not exists
if (-not (Test-Path .git)) {
    git init
    Write-Host "Repositorio Git inicializado." -ForegroundColor Green
} else {
    Write-Host "Ya existe un repositorio Git en esta carpeta." -ForegroundColor Yellow
}

# Optional: set user config if not present
$userName = git config user.name
$userEmail = git config user.email
if (-not $userName) {
    $name = Read-Host "No se encontró user.name. Ingresa tu nombre (git config user.name)" 
    if ($name) { git config user.name "$name" }
}
if (-not $userEmail) {
    $email = Read-Host "No se encontró user.email. Ingresa tu email (git config user.email)"
    if ($email) { git config user.email "$email" }
}

# Ensure .gitignore exists
if (-not (Test-Path ".gitignore")) {
    @"
node_modules/
.vscode/
.sass-cache/
css/main.css.map
npm-debug.log
*.log
.DS_Store
Thumbs.db
.env
.env.local
*.swp
"@ | Out-File -Encoding utf8 .gitignore
    Write-Host ".gitignore creado." -ForegroundColor Green
} else {
    Write-Host ".gitignore ya existe." -ForegroundColor Yellow
}

# Add all and commit
git add .
$exists = git status --porcelain
if ($exists) {
    git commit -m "Initial commit: proyecto frontend"
    Write-Host "Cambios comiteados." -ForegroundColor Green
} else {
    Write-Host "No hay cambios para commitear." -ForegroundColor Yellow
}

Write-Host "Repositorio listo localmente." -ForegroundColor Cyan
Write-Host "Para subir a GitHub (o cualquier remoto), crea primero el repo remoto y luego ejecuta:" -ForegroundColor White
Write-Host "  git remote add origin https://github.com/tu-usuario/tu-repo.git" -ForegroundColor Green
Write-Host "  git branch -M main" -ForegroundColor Green
Write-Host "  git push -u origin main" -ForegroundColor Green

Write-Host "Si tienes 'gh' (GitHub CLI) instalado, puedes crear y subir automáticamente con:" -ForegroundColor White
Write-Host "  gh repo create tu-usuario/tu-repo --public --source=. --remote=origin --push" -ForegroundColor Green

Write-Host "Listo." -ForegroundColor Cyan
