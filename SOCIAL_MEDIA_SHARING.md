# Social Media Sharing Setup for Grounded

This document explains how the social media sharing metadata has been set up for the Grounded website and provides instructions for updating it when deploying to production.

## What's Been Implemented

The website now includes meta tags that enable rich previews when the site is shared on:

- Facebook
- Twitter
- WhatsApp
- Other platforms that support Open Graph protocol

When shared, the link will display:

- Title: "Grounded. | Earn Rewards for Sustainable Choices"
- Description: "Auto-track your eco-friendly habits and earn points for products. No journal required."
- Thumbnail: The hero section background image (citiscape.png)

## Current Implementation

The meta tags have been added to the `<head>` section of `index.html` and include:

1. **Open Graph tags** (for Facebook, WhatsApp, and other platforms)
2. **Twitter Card tags** (for Twitter)
3. **Additional SEO tags** (canonical URL, theme color)

## Before Deploying to Production

Before deploying the website to production, you need to update the following in the meta tags:

1. **Update image URLs to absolute paths**:

   - Change `content="images/citiscape.png"` to `content="https://getgrounded.io/assets/citiscape-K3ZEbMTr.png"`
   - This ensures the images load correctly when shared on social media

2. **Update the website URL**:

   - Change `content="https://getgrounded.io/"` to your actual domain if it changes
   - This applies to `og:url`, `twitter:url`, and the canonical link

3. **Verify image dimensions**:
   - The meta tags specify dimensions of 1200x630 pixels for the Open Graph image
   - If you modify the image, ensure it maintains these dimensions or update the meta tags accordingly

## Testing Social Media Sharing

After deployment, you can test how your links will appear when shared using these tools:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Additional Customization

You can further customize the social media sharing experience by:

1. **Creating platform-specific images**:

   - Design different images for different platforms
   - Add additional meta tags for platform-specific images

2. **Adding structured data**:
   - Implement JSON-LD structured data for enhanced search results
   - This can be added to the `<head>` section of your HTML

## Need Help?

If you need assistance with social media sharing setup, contact your web developer or refer to these resources:

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
