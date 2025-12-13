# Wasilah365 — High-Level Architecture

This document outlines architectural decisions at a **conceptual level**, not implementation detail.

## Frontend
- Built with React Native using Expo
- Screen-based navigation (intentions, prayer, reflection)
- Emphasis on simplicity and readability

## Data Model (Conceptual)
- Intention
  - date
  - text
- Reflection
  - date
  - optional notes
- PrayerTimes
  - location-based
  - calculated or fetched

## Data Storage
- Local-first persistence (AsyncStorage or similar)
- No hard dependency on backend in V1
- Sync is optional and deferred

## Authentication
- Not required for core V1 functionality
- Planned for future versions to enable syncing
- Likely Firebase or Supabase Auth

## Backend
- Minimal or non-existent in V1
- Only introduced when syncing or advanced features are needed

## Guiding Principles
- Avoid premature abstraction
- Prefer clarity over cleverness
- Optimize for iteration, not scale