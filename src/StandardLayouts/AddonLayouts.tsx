import { BlockLayout, BlockEnums } from 'types'

export const horizontalThreeColumnAddonLayout: BlockLayout = {
  blockType: BlockEnums.HStack,
  blocks: [
    {
      blockType: BlockEnums.VStack,
      blocks: [
        { blockType: BlockEnums.Title },
        {
          blockType: BlockEnums.Subtitle,
          styleOverride: {
            color: 'gray',
          },
        },
      ],
      styleOverride: {
        flex: '0 0 20em',
        alignSelf: 'flex-start',
        alignItems: 'center',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        flex: '1 0 15em',
        maxWidth: '20em',
      },
    },
    {
      blockType: BlockEnums.Price,
      styleOverride: { flex: '0 0 auto', margin: '0 2em' },
    },
    {
      blockType: BlockEnums.AddRemoveButton,
      styleOverride: {
        flex: '0 0 7em',
        margin: '0 2em',
      },
    },
  ],
}

export const cardAddonLayout: BlockLayout = {
  blockType: BlockEnums.VStack,
  blocks: [
    {
      blockType: BlockEnums.Title,
      styleOverride: {
        color: 'black',
        alignSelf: 'left',
        textAlign: 'left',
      },
    },
    {
      blockType: BlockEnums.Subtitle,
      styleOverride: {
        color: 'black',
        alignSelf: 'left',
        textAlign: 'left',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Price,
      styleOverride: {
        color: 'black',
        alignSelf: 'left',
        fontWeight: 'bold',
      },
    },
    {
      blockType: BlockEnums.AddRemoveButton,
      styleOverride: {
        alignSelf: 'center',
        width: '300px',
        background: 'black',
        color: 'white',
      },
    },
  ],
  styleOverride: {
    width: '18em',
    height: '15em',
    border: '2px solid black',
    padding: '1em',
    background: 'white',
    justifyContent: 'space-around',
    margin: '1em',
    color: 'black',
    borderRadius: '5px',
  },
}

export const WifiMaxAddonLayout: BlockLayout = {
  blockType: BlockEnums.VStack,
  blocks: [
    {
      blockType: BlockEnums.Title,
      styleOverride: {
        color: 'black',
        alignSelf: 'left',
        textAlign: 'left',
      },
    },
    {
      blockType: BlockEnums.Subtitle,
      styleOverride: {
        color: 'black',
        alignSelf: 'left',
        textAlign: 'left',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Price,
      styleOverride: {
        color: 'black',
        alignSelf: 'left',
        fontWeight: 'bold',
      },
    },
    {
      blockType: BlockEnums.AddRemoveButton,
      styleOverride: {
        alignSelf: 'center',
        width: '300px',
        background: 'black',
        color: 'white',
      },
    },
  ],
  styleOverride: {
    width: '18em',
    height: '16em',
    border: '2px solid black',
    padding: '1em',
    background: 'white',
    justifyContent: 'space-around',
    margin: '1em',
    color: 'black',
    borderRadius: '5px',
  },
}
export const highlightedCardAddonLayout: BlockLayout = {
  blockType: BlockEnums.VStack,
  blocks: [
    {
      blockType: BlockEnums.Title,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Subtitle,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Price,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    },
    {
      blockType: BlockEnums.AddRemoveButton,
      styleOverride: {
        alignSelf: 'center',
        width: '200px',
        background: 'black',
        color: 'white',
      },
    },
  ],
  styleOverride: {
    width: '18em',
    height: '20em',
    border: '2px solid black',
    padding: '1em',
    background: 'white',
    justifyContent: 'space-around',
    margin: '1em',
    color: 'black',
    borderRadius: '5px',
  },
}
export const testLayout: BlockLayout = {
  blockType: BlockEnums.HStack,
  blocks: [
    {
      blockType: BlockEnums.VStack,
      blocks: [
        {
          blockType: BlockEnums.Title,
          styleOverride: {
            color: 'red',
          },
        },
        {
          blockType: BlockEnums.Subtitle,
          styleOverride: {
            color: 'gray',
          },
        },
      ],
      styleOverride: {
        flex: '0 0 50%',
        alignItems: 'center',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        flex: '1 0 auto',
        width: 'fit-content',
        alignItems: 'flex-start',
      },
    },
  ],
}

export const StorePageAddonLayout: BlockLayout = {
  blockType: BlockEnums.VStack,
  blocks: [
    {
      blockType: BlockEnums.Title,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Subtitle,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Price,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    },
    {
      blockType: BlockEnums.AddRemoveButton,
      styleOverride: {
        alignSelf: 'center',
        width: '200px',
        background: 'black',
        color: 'white',
      },
    },
  ],
  styleOverride: {
    width: '20em',
    height: '28em',
    border: '2px solid black',
    padding: '1em',
    background: 'white',
    justifyContent: 'space-around',
    margin: '1em',
    color: 'black',
    borderRadius: '7px',
  },
}

export const StorePageAddonLayoutScenarios123: BlockLayout = {
  blockType: BlockEnums.VStack,
  blocks: [
    {
      blockType: BlockEnums.Title,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Subtitle,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        color: 'black',
        textAlign: 'center',
      },
    },
    {
      blockType: BlockEnums.Price,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    },
    {
      blockType: BlockEnums.AddRemoveButton,
      styleOverride: {
        alignSelf: 'center',
        width: '200px',
        background: 'black',
        color: 'white',
      },
    },
  ],
  styleOverride: {
    width: '20em',
    height: '31em',
    border: '2px solid #83358e',
    padding: '1em',
    background: 'white',
    justifyContent: 'space-around',
    margin: '1em',
    color: 'black',
    borderRadius: '7px',
  },
}

export const xtraBroadBandLayout: BlockLayout = {
  blockType: BlockEnums.VStack,
  blocks: [
    {
      blockType: BlockEnums.Title,
      styleOverride: {
        color: 'black',
      },
    },
    {
      blockType: BlockEnums.Subtitle,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
      },
    },
    {
      blockType: BlockEnums.Features,
      styleOverride: {
        color: 'black',
        textAlign: 'center',
      },
    },
    {
      blockType: BlockEnums.Price,
      styleOverride: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    },
    {
      blockType: BlockEnums.AddRemoveButton,
      styleOverride: {
        alignSelf: 'center',
        width: '200px',
        background: 'black',
        color: 'white',
      },
    },
  ],
  styleOverride: {
    width: '18em',
    height: '25em',
    border: '2px solid #228B22',
    padding: '1em',
    background: '#D3F8D3',
    justifyContent: 'space-around',
    margin: '1em',
    color: 'black',
    borderRadius: '7px',
  },
}
