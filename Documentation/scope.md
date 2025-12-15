# Wasilah365 — V1 Scope

This document defines the **explicit scope** of version 1 to prevent feature creep and overengineering.

## V1 Goals (Must-Have)
- User can create a daily intention
- User can view today’s intention clearly
- User can see prayer times for their location
- User can log short reflections
- App feels calm, fast, and intentional

## Nice-to-Have (Only if time allows)
- Simple history view (past intentions)
- Optional reminders (local notifications)
- Light progress indicators (non-competitive)

## Explicitly Out of Scope for V1
- Social features
- Public profiles
- Leaderboards or aggressive streaks
- Advanced analytics
- Multi-device sync guarantees
- Community content or feeds

## Success Criteria for V1
- App launches without friction
- Core loop works without onboarding fatigue
- A user can use the app daily without stress
- Codebase remains understandable and flexible

If a feature does not support these outcomes, it does not belong in V1.

## Current Progress (as of this snapshot)
- Daily intention is auto-created and stored locally with completion tracking
- Navigation scaffold exists for Intentions and Settings
- Prayer times, reflections, history, and reminders are not implemented yet
