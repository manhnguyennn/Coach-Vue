#!/bin/bash

# CoachConnect Nuxt.js - GitHub Deployment Script
# Run this script from your project root directory

echo "🚀 Preparing to deploy CoachConnect Nuxt.js to GitHub..."
echo ""

# Check if we're in the right directory
if [ ! -d "nuxt-coach-connect" ]; then
    echo "❌ Error: nuxt-coach-connect directory not found!"
    echo "Please run this script from the project root directory."
    exit 1
fi

# Navigate to the Nuxt.js project
cd nuxt-coach-connect

echo "📁 Current directory: $(pwd)"
echo ""

# Check if this is already a git repository
if [ -d ".git" ]; then
    echo "⚠️  Git repository already exists. Removing it to start fresh..."
    rm -rf .git
fi

# Initialize new git repository
echo "🔧 Initializing new Git repository..."
git init

# Add all files
echo "📦 Adding all files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: CoachConnect Nuxt.js application

- Complete Vue.js/Nuxt.js coaching platform
- Responsive design with SCSS
- Coach search and filtering
- AI recommendations page
- Modern component architecture"

echo ""
echo "✅ Git repository prepared successfully!"
echo ""
echo "🔗 Next steps:"
echo "1. Create a new empty repository on GitHub (don't add README, .gitignore, or license)"
echo "2. Copy your repository URL (e.g., https://github.com/username/repo-name.git)"
echo "3. Run these commands:"
echo ""
echo "   git remote add origin YOUR_GITHUB_REPO_URL"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Replace YOUR_GITHUB_REPO_URL with your actual GitHub repository URL."
echo ""
echo "🎉 Your Nuxt.js project will then be live on GitHub!"