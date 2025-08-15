import { SplashItem } from 'types'
import splashImg from 'images/logos/splash-img.png'
import img1 from 'images/logos/img_1.png'
import img2 from 'images/logos/img_2.png'
import img3 from 'images/logos/img_3.png'

export const baseSplashScreen: { title: string; items: SplashItem[] } = {
  title: '',
  items: [
    {
      id: '1',
      src: splashImg,
    },
    {
      id: '2',
      title: '',
      paragraph: `<p style="font-size: 30px; font-weight: bold;">Start your family history journey</p>
      <p style="font-size: 20px;">Discover your ancestors' stories and understand what their lives were really like.</p>
        <div style="font-size: 20px;">
          <div style="display: flex; align-items: flex-start; font-size: 20px; margin-bottom: 12px;">
            <img src=${img1} alt="1" style="width: 30px; height: 30px; flex-shrink: 0; margin-right: 12px;" />
            <span style="flex: 1;">Start your family tree in minutes with our easy-to-use Family Tree builder</span>
          </div>
          <div style="display: flex; align-items: flex-start; font-size: 20px; margin-bottom: 12px;">
            <img src=${img2} alt="2" style="width: 30px; height: 30px; flex-shrink: 0; margin-right: 12px;" />
            <span style="flex: 1;">Follow your ancestors along the paths they took in life in our billions of British and Irish genealogy records</span>
          </div>
          <div style="display: flex; align-items: flex-start; font-size: 20px; margin-bottom: 12px;">
            <img src=${img3} alt="3" style="width: 30px; height: 30px; flex-shrink: 0; margin-right: 12px;" />
            <span style="flex: 1;">Expand your tree with our exclusive record sets and newspaper archive</span>
          </div>
        </div>
        `,
    },
    {
      id: '3',
      title: '',
      paragraph: `<p style="font-size: 30px; font-weight: bold;">Start your tree in minutes</p>
      <ul style="font-size: 20px; padding-left: 20px;">
        <li style="margin-bottom: 8px;">Use our family tree builder to trace your ancestors and their unique stories through time.</li>
        <li style="margin-bottom: 8px;">It starts with just a name. Add the family members you already know, and we’ll start our detective work.</li>
        <li style="margin-bottom: 8px;">Our Smart Hints feature will look for your relatives in our genealogy records and let you know when we find something.</li>
        <li style="margin-bottom: 8px;">Find connections you share in millions of other Findmypast members’ family trees.</li>
      </ul>

       `,
    },
    {
      id: '4',
      title: '',
      paragraph: `<p style="font-size: 30px; font-weight: bold;">Expand your Tree like never before </p>
      <ul style="font-size: 20px; padding-left: 20px;">
        <li style="margin-bottom: 8px;">Follow your ancestors along the paths they took in life in our billions of British and Irish genealogy records.</li>
        <li style="margin-bottom: 8px;">Explore our exclusive and unique records. From key national collections to millions of local and regional resources, see your family in a different light.</li>
        <li style="margin-bottom: 8px;">The home of the British Newspaper Archive – the largest online collection of British and Irish Newspaper in the world.</li>
        <li style="margin-bottom: 8px;">Exclusive product features like Maps and Workspaces, or advanced research tool, bring a new way for you to expand your tree.</li>
      </ul>
       `,
    },
  ],
}
