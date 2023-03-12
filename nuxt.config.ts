export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-simple-sitemap'],
  app: {
    head: {
      title: '亲子阅读-点读笔-毛毛虫点读笔-绘本-【小彼恩】',
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no , viewport-fit=cover',
        },
        { name: 'description', content: '小彼恩拥有丰富的顶级童书资源、完善的硬件自主研发体系、专业的客户服务体系，并不断整合全球资源配置，与国内外数十家顶级出版社达成战略合作，获得众多知名童书的独家授权。' },
        { name: 'keywords', content: '绘本,早教,点读笔,点读机,亲子阅读,毛毛虫点读笔,好饿的毛毛虫,牛津树' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://oss.xiaobien.com/static/images/www-xbe/favicon.ico',
        },
      ],
    },
  },
  sitemap: {
    hostname: 'https://test.com',
    urls: [
      { url: '/parenting/aaa-list', changefreq: 'monthly', priority: 0.3 },
      { url: '/parenting/ccc-list', changefreq: 'monthly', priority: 0.3 },
      { url: '/parenting/bbb-list', changefreq: 'monthly', priority: 0.3 },
      { url: '/parenting/bbb-list', changefreq: 'monthly', priority: 0.3 },
    ]
  },
  routeRules: {
    // modify the sitemap.xml entry for specific URLs
    '**': { sitemap: { changefreq: 'monthly', priority: 0.3 } }
  }
})
