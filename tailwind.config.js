/** @type {import('tailwindcss').Config} */

const pxToVminMap = (designWith = 750) => {
  const result = {}
  for (let i = 0; i <= designWith; i++)
    result[i] = `${i / (designWith / 10)}rem`

  return result
}

const spacing = pxToVminMap()

const colors = {
  primary: '#FF5500',
  info: '#999',
  black: '#333',
  bgc: '#FFFDF7',
}

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'OPPOSans-R': 'OPPOSans-R, sans-serif',
        'OPPOSans-B': 'OPPOSans-B, sans-serif',
        'OPPOSans-L': 'OPPOSans-L, sans-serif',
        'OPPOSans-H': 'OPPOSans-H, sans-serif',
        'OPPOSans-M': 'OPPOSans-M, sans-serif',
        'FredokaOne-Regular': 'FredokaOne-Regular, sans-serif',
      },
      screens: {
        desktop: '960px', // => @media (min-width: 960px) { ... }
      },
      backgroundImage: {
        'contact-us': 'url(\'/img/contact/email.gif\')',
        'mobile-contact-us': 'url(\'/img/contact/mobile/email.png\')',
        'download-bg': 'url(\'/img/product/download-bg.png\')',
        'download-bg-active': 'url(\'/img/product/download-red-bg.png\')',
      },
      spacing,
      lineHeight: spacing,
      borderWidth: spacing,
      borderRadius: spacing,
      width: spacing,
      minHeight: spacing,
      minWidth: spacing,
      maxWidth: spacing,
      height: spacing,
      fontSize: spacing,
      padding: spacing,
      letterSpacing: spacing,
      textColor: colors,
      backgroundColor: colors,
      borderColor: colors,
      boxShadow: {
        input: '0px 2px 11px 0px rgba(111,111,111,0.15);',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
