#!/bin/bash

# Function to create directory if it doesn't exist
create_dir() {
    if [ ! -d "$1" ]; then
        mkdir -p "$1"
        echo "Created directory: $1"
    fi
}

# Function to create file if it doesn't exist
create_file() {
    if [ ! -f "$1" ]; then
        touch "$1"
        echo "Created file: $1"
    fi
}

# Create root structure
create_file ".gitignore"
create_file "package.json"
create_file "turbo.json"
create_file "README.md"

# Create apps structure
create_dir "apps/web"
cd "apps/web"

create_file "package.json"
create_file "next.config.js"
create_file "tsconfig.json"

create_dir "public"
create_dir "src"

# Create src structure
cd "src"

# Create app structure
create_dir "app/(auth)/login"
create_file "app/(auth)/login/page.tsx"

create_dir "app/(auth)/signup/student"
create_file "app/(auth)/signup/student/page.tsx"

create_dir "app/(auth)/signup/alumni"
create_file "app/(auth)/signup/alumni/page.tsx"

create_dir "app/(auth)/verify"
create_file "app/(auth)/verify/page.tsx"

create_dir "app/dashboard"
create_file "app/dashboard/page.tsx"
create_file "app/dashboard/layout.tsx"

create_dir "app/dashboard/alumni"
create_file "app/dashboard/alumni/page.tsx"

create_dir "app/dashboard/student"
create_file "app/dashboard/student/page.tsx"

create_dir "app/profile/[id]"
create_file "app/profile/[id]/page.tsx"

create_dir "app/profile/edit"
create_file "app/profile/edit/page.tsx"

create_dir "app/events"
create_file "app/events/page.tsx"

create_dir "app/events/[id]"
create_file "app/events/[id]/page.tsx"

create_dir "app/chat/[id]"
create_file "app/chat/[id]/page.tsx"

create_dir "app/donate"
create_file "app/donate/page.tsx"

# Create components structure
create_dir "components/ui"
create_file "components/ui/Button.tsx"
create_file "components/ui/Input.tsx"

create_dir "components/layout"
create_file "components/layout/Header.tsx"
create_file "components/layout/Footer.tsx"
create_file "components/layout/Sidebar.tsx"

create_dir "components/forum"
create_file "components/forum/ForumList.tsx"
create_file "components/forum/ForumPost.tsx"

create_dir "components/profile"
create_file "components/profile/ProfileCard.tsx"
create_file "components/profile/ProfileForm.tsx"

create_dir "components/chat"
create_file "components/chat/ChatWindow.tsx"
create_file "components/chat/MessageList.tsx"

# Create lib structure
create_dir "lib"
create_file "lib/auth.ts"
create_file "lib/api.ts"
create_file "lib/utils.ts"

# Create hooks structure
create_dir "hooks"
create_file "hooks/useAuth.ts"
create_file "hooks/useApi.ts"

# Create context structure
create_dir "context"
create_file "context/AuthContext.tsx"

# Create styles structure
create_dir "styles"
create_file "styles/globals.css"

cd ..

# Create server structure
create_dir "server/api/auth"
create_file "server/api/auth/[...nextauth].ts"

create_dir "server/api/users"
create_file "server/api/users/route.ts"

create_dir "server/api/profiles"
create_file "server/api/profiles/route.ts"

create_dir "server/api/events"
create_file "server/api/events/route.ts"

create_dir "server/api/chat"
create_file "server/api/chat/route.ts"

create_dir "server/api/donations"
create_file "server/api/donations/route.ts"

create_dir "server/services"
create_file "server/services/imageVerification.ts"
create_file "server/services/contentModeration.ts"
create_file "server/services/chatService.ts"

create_dir "server/db"
create_file "server/db/schema.prisma"
create_file "server/db/index.ts"

create_dir "server/utils"
create_file "server/utils/serverUtils.ts"

cd ../..

# Create packages structure
create_dir "packages/ui"
create_file "packages/ui/package.json"
create_file "packages/ui/tsconfig.json"
create_dir "packages/ui/src"
create_file "packages/ui/src/index.ts"

create_dir "packages/config/eslint-config"
create_dir "packages/config/tailwind-config"

create_dir "packages/tsconfig"
create_file "packages/tsconfig/base.json"

# Create .github structure
create_dir ".github/workflows"
create_file ".github/workflows/ci.yml"

echo "Folder structure created successfully!"
