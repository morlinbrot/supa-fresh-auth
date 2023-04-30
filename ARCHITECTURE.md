# Session handling with Redis

- Both Supabase and Redis are initialised in `main.ts` to be available as
  singletons throughout our app.
- In `main.ts`, we monitor for the `SIGNED_IN` and `TOKEN_REFRESHED` events
  (which we trigger in our api routes, e.g. `signInWithPassword` in
  `sign-in.ts`) in `onAuthStateChange` and persist a new and updated sessions in
  Redis.
- In `_middleware.ts`, we extract the access token from our cookie and check if
  we have a corresponding sesion in Redis.
