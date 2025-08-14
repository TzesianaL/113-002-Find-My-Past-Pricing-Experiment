import { AddonPageOptions, BasketPageOptions, StorePageOptions } from 'types'

export const baseStorePageOptions: StorePageOptions = {
  introText: `
    <style>
      .responsive-image-container .desktop-image {
        display: block;
        width: 566px;
      }
      .responsive-image-container .mobile-image {
        display: none;
        width: 100%;
        max-width: 320px;
      }
      @media (max-width: 768px) {
        .responsive-image-container .desktop-image {
          display: none;
        }
        .responsive-image-container .mobile-image {
          display: block;
        }
      }
    </style>
  `,
  hidePrice: false,
  footerText: `<p style="font-size: 12px; color: #666; padding-top: 12px; text-align: center;">Annual Price Increase: During your minimum period, the monthly cost will increase each year on 1 April by £1.80 for Pay monthly plans with Airtime/Data, and £3 for Home Broadband plans.</p>`,
}

export const baseBasketPageOptions: BasketPageOptions = {
  footerText: `<p style="font-size: 12px; color: #666; padding-top: 12px; text-align: center;">Prices shown include VAT unless otherwise stated, the VAT rate payable is 20% where standard VAT rate applies. Monthly subscription charges subject to annual increase of the CPI rate (published January of that year) + 3.9%. Adjusted amount from your April bill. Terms apply. See vodafone.co.uk/pricechanges for details.</p>`,
}

export const baseAddonPageOptions: AddonPageOptions = {
  footerText: ``,
}
