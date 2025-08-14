import { SplashItem } from 'types'
// import splashImageSrc from 'images/logos/splashImage.png'
import splashRouterSrc from 'images/splash-router.png'
import splashAwardsSrc from 'images/splash-awards.png'

export const baseSplashScreen: { title: string; items: SplashItem[] } = {
  title: 'Smith’s Broadband Offers You',
  items: [
    {
      id: '1',
      src: splashRouterSrc,
    },
    {
      id: '2',
      title: 'Intelligent WiFi & Full Fibre Broadband',
      paragraph: `<p>Our powerful WiFi auto-optimises for the fastest, most reliable connection across all your devices</p>
        <p>
        We are the UK’s largest full fibre provider with speeds of up to 910 Mbps. Stream, game, and work without limits. Our powerful WiFi auto-optimises for the fastest, most reliable connection across all your devices.
       </p>
       <p>
        Enjoy no set-up fees, unlimited broadband usage, and your landline included across all plans.
        </p>
        `,
    },
    {
      id: '3',
      title: 'What is Pro II?',
      paragraph: `<p>
      Our most advanced and fastest WiFi technology throughout the home, allowing you to do more of what you love. Powered by WiFi 6E, Pro II comes with our Super WiFi 6E Booster to connect over 150 devices and automatic 4G Broadband Back-up so you don’t lose connectivity when you need it most.
      </p>
       `,
    },
    {
      id: '4',
      title: 'Award-winning Home Broadband',
      paragraph: `
        <div style="display: flex; justify-content: center; align-items: center;">
          <img style="width: 100%" src="${splashAwardsSrc}" alt="Multiple awards" />
        </div>
       `,
    },
  ],
}
