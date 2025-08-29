---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

## get azure key vault

```json
//launchsettings.json
{
  "profiles": {
    "XService": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "launchUrl": "swagger",
      "applicationUrl": "https://localhost:7248;http://localhost:5019",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development",
        "VaultUri": "https://{vault-name}.vault.azure.net/"
      }
    },
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "launchUrl": "swagger",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development",
        "VaultUri": "https://{vault-name}.vault.azure.net/"
      }
    }
  }
}
// appsetting.json
{
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com/",
    //"Domain": "",
    "TenantId": "",
    "ClientId": "",
    "AllowWebApiToBeAuthorizedByACL": true,
    "ClientCredentials": [
      {
        "SourceType": "ClientSecret",
        "ClientSecret": "@Microsoft.KeyVault(SecretUri=https://{vault-name}.azure.net/secrets/{secret-name})"
      }
    ]
  }
}
```

```c#
public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((context, config) =>
            {
                if (context.HostingEnvironment.IsDevelopment())
                {
                    var keyVaultEndpoint = new Uri(Environment.GetEnvironmentVariable("VaultUri")); //AzureAd--ClientCredentials--0--ClientSecret on key vault
                    config.AddAzureKeyVault(keyVaultEndpoint, new VisualStudioCredential());
                }
            })
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>()
                .ConfigureLogging((context, logging) =>
                {
                    logging.ClearProviders();
                    logging.AddConfiguration(context.Configuration.GetSection("Logging"));
                    //logging.AddEventSourceLogger();
                    logging.AddConsole();
                    logging.AddAzureWebAppDiagnostics();
                    logging.AddApplicationInsights();
                    logging.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace);
                }).UseNLog();
            });

}

```
