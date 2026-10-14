# Production build fingerprint

The static build now generates `/build-info.json`. It reports only the build provider, source branch and source commit SHA supplied by the build environment. It creates no backend, cookies, analytics, request logs or persistent user data.

After the owner deploys a commit to Production, check:

```text
https://cabinetcergy.vercel.app/build-info.json
```

Compare `commitSha` and `branch` with the source shown in that Vercel deployment's details. For a Git-connected production deployment, the expected branch is `main` and the SHA should match the deployed source commit. If the file is missing, or the SHA is old, the production alias is not serving this build. If `commitSha` is `unavailable`, check whether Vercel's system environment variables are exposed to the build.

This is a static file generated at build time. It does not trigger, create, or promote a Vercel deployment; deployment remains owner-managed.
