# Supa Fresh Auth

An example app built with Deno's [Fresh](https://fresh.deno.dev/) framework,
using [Supabase](https://supabase.com/) and [Redis](https://redis.io/) to
implement a simple cookie-based authentication scheme.

[Here's an article](https://dev.to/morlinbrot/simple-auth-with-denos-fresh-supabase-2e68) I wrote about building this.

Consider leaving me a star!

[![Github Repo Stars](https://img.shields.io/github/stars/morlinbrot/supa-fresh-auth?style=social)](https://github.com/morlinbrot/supa-fresh-auth)

## Usage

You need to have Redis installed and a Supabase project set up.

Create a `.env` file with the following variables:

```
SUPABASE_URL=https://<projectName>.supabase.co
SUPABASE_KEY=<api_key>
```

Run the app:

```
deno task start
```

This will watch the project directory and restart as necessary.
