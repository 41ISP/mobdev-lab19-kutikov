#!/bin/bash

# Script to install Android build tools and Gradle in GitHub Codespaces
# This will set up everything needed to build Android APKs
#!/bin/bash

# Script to install Android build tools and Gradle in GitHub Codespaces
# This will set up everything needed to build Android APKs

set -e  # Exit on error

echo "=========================================="
echo "Android Build Environment Setup"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Install Java
echo -e "${YELLOW}[1/6] Installing Java JDK 17...${NC}"
sudo apt-get update -qq
sudo apt-get install -y openjdk-17-jdk wget unzip

# Verify Java installation
echo -e "${GREEN}✓ Java installed:${NC}"
java -version
echo ""

# Step 2: Set up environment variables
echo -e "${YELLOW}[2/6] Setting up environment variables...${NC}"
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export ANDROID_HOME=$HOME/android-sdk
export PATH=$PATH:$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools

echo "JAVA_HOME=$JAVA_HOME"
echo "ANDROID_HOME=$ANDROID_HOME"
echo ""

# Step 3: Download Android Command Line Tools
echo -e "${YELLOW}[3/6] Downloading Android SDK Command Line Tools...${NC}"
mkdir -p $ANDROID_HOME/cmdline-tools
cd $ANDROID_HOME/cmdline-tools

# Download latest command line tools
wget -q https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip
echo -e "${GREEN}✓ Downloaded${NC}"

# Unzip and organize
unzip -q commandlinetools-linux-9477386_latest.zip
mv cmdline-tools latest
rm commandlinetools-linux-9477386_latest.zip
echo -e "${GREEN}✓ Android SDK Command Line Tools installed${NC}"
echo ""

# Step 4: Accept licenses
echo -e "${YELLOW}[4/6] Accepting Android SDK licenses...${NC}"
yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses > /dev/null 2>&1
echo -e "${GREEN}✓ Licenses accepted${NC}"
echo ""

# Step 5: Install required SDK components
echo -e "${YELLOW}[5/6] Installing Android SDK components...${NC}"
$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.0" > /dev/null 2>&1
echo -e "${GREEN}✓ SDK components installed${NC}"
echo ""

# Step 6: Add to bashrc for persistence
echo -e "${YELLOW}[6/6] Making environment variables permanent...${NC}"

# Check if already in bashrc
if ! grep -q "ANDROID_HOME" ~/.bashrc; then
    echo "" >> ~/.bashrc
    echo "# Android SDK Environment Variables" >> ~/.bashrc
    echo "export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64" >> ~/.bashrc
    echo "export ANDROID_HOME=\$HOME/android-sdk" >> ~/.bashrc
    echo "export PATH=\$PATH:\$JAVA_HOME/bin:\$ANDROID_HOME/cmdline-tools/latest/bin:\$ANDROID_HOME/platform-tools" >> ~/.bashrc
    echo -e "${GREEN}✓ Added to ~/.bashrc${NC}"
else
    echo -e "${GREEN}✓ Already in ~/.bashrc${NC}"
fi
echo ""

# Summary
echo "=========================================="
echo -e "${GREEN}✓ Installation Complete!${NC}"
echo "=========================================="
echo ""
echo "Installed components:"
echo "  - Java JDK 17"
echo "  - Android SDK Command Line Tools"
echo "  - Android Platform 33"
echo "  - Android Build Tools 33.0.0"
echo ""
echo "Next steps:"
echo "  1. Run: source ~/.bashrc"
echo "  2. In your Capacitor project, run:"
echo "     npm install"
echo "     npm run build"
echo "     npx cap add android"
echo "     npx cap sync android"
echo "     chmod +x android/gradlew"
echo "     cd android && ./gradlew assembleDebug"
echo ""
echo "Your APK will be at:"
echo "  android/app/build/outputs/apk/debug/app-debug.apk"
echo ""
set -e  # Exit on error

echo "=========================================="
echo "Android Build Environment Setup"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Install Java
echo -e "${YELLOW}[1/6] Installing Java JDK 17...${NC}"
sudo apt-get update -qq
sudo apt-get install -y openjdk-17-jdk wget unzip

# Verify Java installation
echo -e "${GREEN}✓ Java installed:${NC}"
java -version
echo ""

# Step 2: Set up environment variables
echo -e "${YELLOW}[2/6] Setting up environment variables...${NC}"
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export ANDROID_HOME=$HOME/android-sdk
export PATH=$PATH:$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools

echo "JAVA_HOME=$JAVA_HOME"
echo "ANDROID_HOME=$ANDROID_HOME"
echo ""

# Step 3: Download Android Command Line Tools
echo -e "${YELLOW}[3/6] Downloading Android SDK Command Line Tools...${NC}"
mkdir -p $ANDROID_HOME/cmdline-tools
cd $ANDROID_HOME/cmdline-tools

# Download latest command line tools
wget -q https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip
echo -e "${GREEN}✓ Downloaded${NC}"

# Unzip and organize
unzip -q commandlinetools-linux-9477386_latest.zip
mv cmdline-tools latest
rm commandlinetools-linux-9477386_latest.zip
echo -e "${GREEN}✓ Android SDK Command Line Tools installed${NC}"
echo ""

# Step 4: Accept licenses
echo -e "${YELLOW}[4/6] Accepting Android SDK licenses...${NC}"
yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses > /dev/null 2>&1
echo -e "${GREEN}✓ Licenses accepted${NC}"
echo ""

# Step 5: Install required SDK components
echo -e "${YELLOW}[5/6] Installing Android SDK components...${NC}"
$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.0" > /dev/null 2>&1
echo -e "${GREEN}✓ SDK components installed${NC}"
echo ""

# Step 6: Add to bashrc for persistence
echo -e "${YELLOW}[6/6] Making environment variables permanent...${NC}"

# Check if already in bashrc
if ! grep -q "ANDROID_HOME" ~/.bashrc; then
    echo "" >> ~/.bashrc
    echo "# Android SDK Environment Variables" >> ~/.bashrc
    echo "export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64" >> ~/.bashrc
    echo "export ANDROID_HOME=\$HOME/android-sdk" >> ~/.bashrc
    echo "export PATH=\$PATH:\$JAVA_HOME/bin:\$ANDROID_HOME/cmdline-tools/latest/bin:\$ANDROID_HOME/platform-tools" >> ~/.bashrc
    echo -e "${GREEN}✓ Added to ~/.bashrc${NC}"
else
    echo -e "${GREEN}✓ Already in ~/.bashrc${NC}"
fi
echo ""

# Summary
echo "=========================================="
echo -e "${GREEN}✓ Installation Complete!${NC}"
echo "=========================================="
echo ""
echo "Installed components:"
echo "  - Java JDK 17"
echo "  - Android SDK Command Line Tools"
echo "  - Android Platform 33"
echo "  - Android Build Tools 33.0.0"
echo ""
echo "Next steps:"
echo "  1. Run: source ~/.bashrc"
echo "  2. In your Capacitor project, run:"
echo "     npm install"
echo "     npm run build"
echo "     npx cap add android"
echo "     npx cap sync android"
echo "     chmod +x android/gradlew"
echo "     cd android && ./gradlew assembleDebug"
echo ""
echo "Your APK will be at:"
echo "  android/app/build/outputs/apk/debug/app-debug.apk"
echo ""