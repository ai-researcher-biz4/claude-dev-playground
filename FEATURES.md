# Feature List - React Native Mobile App (CLI)

> This file serves as the master feature/task list for the project.
> Claude can reference this file to get instructions on what to build next.
> Mark features as `[x]` when completed, `[ ]` when pending, `[~]` when in progress.
> Always follow the CLAUDE.md coding standards.
> One the work done create a branch and raise PR

---

## Phase 1: Project Setup & Foundation

- [x] Initialize React Native CLI project with TypeScript template
- [x] Set up folder structure as per CLAUDE.md guidelines
- [x] Configure path aliases for absolute imports (`src/`)
- [x] Set up ESLint + Prettier with project conventions
- [x] Add `.editorconfig` for consistent formatting
- [x] Configure environment variables (`.env` with `react-native-config`)
- [x] Set up Git hooks with Husky (pre-commit lint + type check)

---

## Phase 2: Navigation

- [x] Install and configure React Navigation (native stack + bottom tabs)
- [x] Create root navigator (`src/navigation/RootNavigator.tsx`)
- [x] Create auth navigator (`src/navigation/AuthNavigator.tsx`)
- [x] Create main/tab navigator (`src/navigation/MainNavigator.tsx`)
- [x] Define route types (`src/types/navigation.ts`)
- [x] Implement deep linking configuration

---

## Phase 3: Theming & Styling

- [x] Create color constants (`src/constants/colors.ts`)
- [x] Create typography constants (`src/constants/typography.ts`)
- [x] Create spacing/sizing constants (`src/constants/dimensions.ts`)
- [x] Create global theme object (`src/styles/theme.ts`)
- [x] Add dark mode support with context/provider
- [x] Create common style utilities (`src/styles/commonStyles.ts`)

---

## Phase 4: Common / Reusable Components

- [ ] `CommonHeader` - reusable header with back button, title, right actions
- [ ] `CommonButton` - primary, secondary, outline, disabled variants
- [ ] `CommonInput` - text input with label, error message, icons
- [ ] `CommonLoader` - full screen and inline loading indicators
- [ ] `CommonModal` - reusable modal wrapper
- [ ] `CommonToast` - success, error, warning, info toast notifications
- [ ] `CommonEmptyState` - empty list placeholder with icon and message
- [ ] `CommonErrorBoundary` - error boundary wrapper component
- [ ] `CommonAvatar` - user avatar with fallback initials
- [ ] `CommonDivider` - horizontal/vertical divider line

---

## Phase 5: Authentication

- [ ] Create auth service (`src/services/authService.ts`)
- [ ] Create auth store/context (`src/store/authStore.ts`)
- [ ] Implement secure token storage (`react-native-keychain` or `encrypted-storage`)
- [ ] **Login Screen** - email/password login with validation
- [ ] **Register Screen** - sign up with name, email, password
- [ ] **Forgot Password Screen** - email-based password reset
- [ ] **OTP Verification Screen** - OTP input with resend timer
- [ ] Implement auto-login with stored refresh token
- [ ] Add biometric authentication (FaceID / Fingerprint)
- [ ] Handle auth token refresh and 401 interceptor

---

## Phase 6: API & Networking

- [ ] Set up Axios instance with base URL and interceptors (`src/services/apiService.ts`)
- [ ] Add request/response logging in dev mode
- [ ] Implement retry logic for failed requests
- [ ] Create API error handler utility (`src/utils/errorHandler.ts`)
- [ ] Add network connectivity listener (`src/hooks/useNetworkStatus.ts`)
- [ ] Create offline banner component

---

## Phase 7: State Management

- [ ] Choose and set up state management (Redux Toolkit)
- [ ] Create auth store/slice
- [ ] Create user profile store/slice
- [ ] Create app settings store/slice (theme, language, etc.)
- [ ] Implement state persistence (AsyncStorage / MMKV)

---

## Phase 8: Core Screens

- [ ] **Home Screen** - dashboard/landing page after login
- [ ] **Profile Screen** - user profile view and edit
- [ ] **Settings Screen** - app settings (theme, language, notifications)
- [ ] **Notifications Screen** - list of notifications with read/unread
- [ ] **Search Screen** - global search with filters
- [ ] **Detail Screen** - generic detail page template

---

## Phase 9: Forms & Validation

- [ ] Set up form handling library (React Hook Form / Formik)
- [ ] Create validation schemas (`src/validations/`)
  - [ ] Login validation
  - [ ] Registration validation
  - [ ] Profile update validation
- [ ] Create reusable form field components
- [ ] Implement keyboard-aware scroll views for form screens

---

## Phase 10: Localization (i18n)

- [ ] Set up `react-native-localize` + `i18next`
- [ ] Create locale files (`src/locales/en.json`, `src/locales/hi.json`, etc.)
- [ ] Create translation hook/utility (`src/hooks/useTranslation.ts`)
- [ ] Add language switcher in settings
- [ ] Support RTL layouts if needed

---

## Phase 11: Push Notifications

- [ ] Set up Firebase Cloud Messaging (FCM) for Android
- [ ] Set up APNs for iOS
- [ ] Create notification handler service (`src/services/notificationService.ts`)
- [ ] Handle foreground, background, and quit-state notifications
- [ ] Implement notification navigation (deep link on tap)
- [ ] Add notification permission request flow

---

## Phase 12: Media & Permissions

- [ ] Implement image picker (camera + gallery)
- [ ] Implement image cropping/compression
- [ ] Handle runtime permissions (camera, storage, location, notifications)
- [ ] Create permission request utility (`src/utils/permissionUtils.ts`)
- [ ] Add file upload service with progress tracking

---

## Phase 13: Performance & Optimization

- [ ] Implement FlatList/SectionList optimizations (keyExtractor, getItemLayout)
- [ ] Add image caching (`react-native-fast-image`)
- [ ] Implement lazy loading / code splitting for screens
- [ ] Add skeleton loading placeholders
- [ ] Optimize re-renders with `React.memo`, `useMemo`, `useCallback`
- [ ] Set up Flipper for debugging (if not already)

---

## Phase 14: Testing

- [ ] Set up Jest for unit testing
- [ ] Set up React Native Testing Library for component tests
- [ ] Write unit tests for utility functions
- [ ] Write unit tests for services (API, auth)
- [ ] Write component tests for common components
- [ ] Write integration tests for auth flow
- [ ] Set up Detox or Maestro for E2E testing (optional)

---

## Phase 15: CI/CD & Release

- [ ] Set up Fastlane for iOS and Android builds
- [ ] Configure code signing (iOS provisioning profiles, Android keystore)
- [ ] Set up GitHub Actions / CI pipeline (lint, test, build)
- [ ] Add app versioning strategy (auto-increment build numbers)
- [ ] Configure staging and production environments
- [ ] Set up crash reporting (Firebase Crashlytics / Sentry)
- [ ] Set up analytics (Firebase Analytics / Mixpanel)

---

## How to Use This File

1. **Pick a feature** — Choose a pending `[ ]` item to work on
2. **Tell Claude** — Example: _"Implement the Login Screen from Phase 5"_
3. **Claude will follow** — CLAUDE.md coding standards automatically
4. **Mark complete** — Update `[ ]` to `[x]` when done

### Quick Commands for Claude

| Command | Description |
|---|---|
| _"What features are pending?"_ | Lists all `[ ]` items |
| _"Start Phase 2"_ | Begins working on all Phase 2 tasks |
| _"Implement [feature name]"_ | Works on a specific feature |
| _"What's next?"_ | Suggests the next logical feature to build |
| _"Mark [feature] as done"_ | Updates the checkbox to `[x]` |

---

> **Note:** This feature list is a living document. Update it as requirements evolve.
> All implementations must follow the rules defined in `CLAUDE.md`.
