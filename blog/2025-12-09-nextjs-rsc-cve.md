---
title: "Critical Security Vulnerability in Next.js"
slug: nextjs-rsc-cve
authors:
  - name: Tom Lam
    title: Software Developer
    url: https://github.com/ShigureDD
    image_url: https://github.com/ShigureDD.png
tags:
  - next.js
  - cve
  - rsc
date: 2025-12-09 GMT+8
description: "ritical vulnerability has been identified in the React Server Components in Next.js"
---

# CVE-2025-66478: Critical Security Vulnerability in Next.js

**Published:** December 3rd, 2025  
**CVSS Score:** 10.0 (Critical)  
**Source:** [Next.js Security Advisory](https://nextjs.org/blog/CVE-2025-66478)

## Overview

A critical vulnerability has been identified in the React Server Components (RSC) protocol that can allow remote code execution (RCE) when processing attacker-controlled requests in unpatched environments. This vulnerability originates from the upstream React implementation ([CVE-2025-55182](https://www.cve.org/CVERecord?id=CVE-2025-55182)).

## Impact

The vulnerable RSC protocol allowed untrusted inputs to influence server-side execution behavior. Under specific conditions, an attacker could craft requests that trigger unintended server execution paths, resulting in remote code execution.

**All users should upgrade to a patched version immediately.**

## Affected Versions

Applications using React Server Components with the App Router are affected when running:

- Next.js 15.x
- Next.js 16.x
- Next.js 14.3.0-canary.77 and later canary releases

**Not affected:**

- Next.js 13.x
- Next.js 14.x stable
- Pages Router applications
- Edge Runtime

## Fixed Versions

The vulnerability is fully resolved in:

- **15.0.5** (for 15.0.x)
- **15.1.9** (for 15.1.x)
- **15.2.6** (for 15.2.x)
- **15.3.6** (for 15.3.x)
- **15.4.8** (for 15.4.x)
- **15.5.7** (for 15.5.x)
- **16.0.7** (for 16.0.x)
- **15.6.0-canary.58** (for 15.x canary releases)
- **16.1.0-canary.12** (for 16.x canary releases)

## Solution: How to Fix the Vulnerability

### Step 1: Check Your Current Version

First, verify which version of Next.js you're currently using:

```bash
npm list next
# or
cat package.json | grep next
```

### Step 2: Choose Your Upgrade Path

#### Option A: Automated Fix Tool (Recommended)

The easiest way to fix the vulnerability is using the official automated tool:

```bash
npx fix-react2shell-next
```

This interactive tool will:

- Check your current Next.js version
- Determine the correct patched version for your release line
- Automatically update your `package.json` and `package-lock.json`
- Provide clear instructions for next steps

#### Option B: Manual Upgrade

If you prefer to upgrade manually, install the appropriate patched version based on your current release:

```bash
# For Next.js 15.0.x
npm install next@15.0.5

# For Next.js 15.1.x
npm install next@15.1.9

# For Next.js 15.2.x
npm install next@15.2.6

# For Next.js 15.3.x
npm install next@15.3.6

# For Next.js 15.4.x
npm install next@15.4.8

# For Next.js 15.5.x
npm install next@15.5.7

# For Next.js 16.0.x
npm install next@16.0.7
```

#### Option C: Upgrade to Latest Stable (Recommended for New Projects)

If you're starting fresh or can upgrade to the latest version:

```bash
npm install next@latest
```

This will install the latest patched version (16.0.7 or newer).

### Step 3: Handle Canary Releases

If you're using canary releases:

- **Next.js 14.3.0-canary.77 or later:** Downgrade to stable 14.x

  ```bash
  npm install next@14
  ```

- **Using canary for PPR (Partial Prerendering):** Update to a patched canary
  ```bash
  npm install next@15.6.0-canary.58   # for 15.x canary
  npm install next@16.1.0-canary.12   # for 16.x canary
  ```

### Step 4: Update Dependencies

After installing the patched version, update your lock file:

```bash
npm install
# or
npm update
```

### Step 5: Verify the Fix

Confirm that the patched version is installed:

```bash
npm list next
```

You should see one of the patched versions listed in the "Fixed Versions" section above.

### Step 6: Test Your Application

Before deploying, thoroughly test your application:

```bash
npm run build
npm run start
```

Test critical functionality, especially:

- Server Components
- API routes
- Server Actions
- Data fetching

### Step 7: Deploy the Patched Version

Deploy your updated application to production immediately:

```bash
# Example for Vercel
vercel --prod

# Example for other platforms
git add package.json package-lock.json
git commit -m "security: upgrade Next.js to patch CVE-2025-66478"
git push
```

### Step 8: Rotate Secrets (Critical)

**If your application was online and unpatched as of December 4th, 2025 at 1:00 PM PT**, you must rotate all secrets:

1. **Environment Variables:**

   - Database credentials
   - API keys
   - OAuth secrets
   - JWT secrets
   - Encryption keys
   - Any other sensitive credentials

2. **How to Rotate:**

   - Update values in your hosting platform (Vercel, AWS, etc.)
   - Update `.env` files (never commit these!)
   - Update CI/CD pipeline secrets
   - Update third-party service API keys

3. **Priority Order:**
   - Start with most critical secrets (database, payment processors)
   - Then rotate API keys and OAuth credentials
   - Finally, rotate less critical keys

### Step 9: Monitor for Issues

After deployment:

- Monitor application logs for errors
- Check error tracking (Sentry, etc.)
- Verify all features work correctly
- Monitor for any suspicious activity

### Important Notes

- **No Workaround Available:** There is no workaround for this vulnerability. Upgrading is the only solution.
- **Immediate Action Required:** This is a critical RCE vulnerability. Upgrade as soon as possible.
- **Backward Compatibility:** Patched versions maintain backward compatibility with your existing code.
- **Breaking Changes:** The security patches do not introduce breaking changes to the Next.js API.

### Troubleshooting

If you encounter issues during upgrade:

1. **Clear cache:**

   ```bash
   rm -rf .next
   rm -rf node_modules
   npm install
   ```

2. **Check for conflicting dependencies:**

   ```bash
   npm ls react react-dom
   ```

3. **Review Next.js migration guide:**
   - [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
   - [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-16)

## Resources

- [Next.js Security Advisory (CVE-2025-66478)](https://github.com/vercel/next.js/security/advisories/GHSA-9qr9-h5gf-34mp)
- [React Security Advisory (CVE-2025-55182)](https://www.cve.org/CVERecord?id=CVE-2025-55182)
- [React Blog: Critical Security Vulnerability](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)
- [Fix Tool Repository](https://github.com/vercel-labs/fix-react2shell-next)

## Discovery

Discovered and responsibly disclosed by [Lachlan Davidson](https://github.com/lachlan2k).
