# Let the Facebook pixel track Sri Lanka visitors

## Current situation
No, not yet. The site checks each visitor's country before turning on the pixel. On buzzconnect.lk that country check fails, so every visitor (including Sri Lanka) is treated as "unknown location" and the pixel stays off. With the banner removed, nobody is asked, so the pixel effectively never fires.

## Fix
- Add a backup country check that uses the visitor's device time zone (for example Asia/Colombo) when the main check fails.
- Visitors in Sri Lanka and other regions that don't require permission: pixel turns on automatically and sends page visits.
- Visitors in EU/UK/Switzerland/Canada, or with a browser "do not track" signal: pixel stays off (footer privacy settings still let them choose).
- Keep private pages (admin, unsubscribe, subscribe) excluded.

## After publishing
- Open buzzconnect.lk from Sri Lanka and confirm Meta's Test Events shows the PageView.

## Technical details
- In `src/lib/consent.ts`, when `/cdn-cgi/trace` fails or returns no country, fall back to `Intl.DateTimeFormat().resolvedOptions().timeZone`; map EU/UK/CH/Canada zones to "permission required", everything else to granted-by-default.
- Add tests: Asia/Colombo + failed trace → pixel loads; Europe/Berlin → blocked; GPC → blocked.
- Update privacy policy wording if region detection description changes.
