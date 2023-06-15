import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c96eb91aad2f410abf53f9bf0a207e7c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "写字的地方",
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: '豆花儿',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // instagram: 'youlin_music',
  // social usernames (optional)
  //twitter: 'transitive_bs',
  //github: 'transitive-bullshit',
  //linkedin: 'youlin-liu',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
     '/about': 'b027ba89454d40538b1cc5681bf5191a'
  },
//  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '有关于我',
      pageId: 'b027ba89454d40538b1cc5681bf5191a'
    }
  ]
})
