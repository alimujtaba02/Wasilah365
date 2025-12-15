# Wasilah365 — High-Level Architecture

This document outlines architectural decisions at a **conceptual level**, not implementation detail.

## Frontend
- Built with React Native using Expo and Expo Router
- Tab navigation: Home (intention), Intentions (placeholder), Settings (placeholder)
- Emphasis on simplicity and readability

## Data Model (Conceptual)
- Intention
  - id
  - title
  - description
  - completed
  - date
  - category (optional)
- Reflection
  - date
  - optional notes
- PrayerTimes
  - location-based
  - calculated or fetched

## Data Storage
- Local-first persistence using AsyncStorage
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

## Current Implementation Snapshot
- `intentionService` seeds a default intention each day and persists completion to AsyncStorage
- Home screen reads the stored intention and allows marking it complete
- No backend calls, auth, or reflection/prayer features are implemented yet
