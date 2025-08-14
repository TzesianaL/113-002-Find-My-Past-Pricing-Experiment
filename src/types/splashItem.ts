export interface SplashImageItem {
  src: string
  id: string
}

export interface SplashTextItem {
  title: string
  paragraph: string
  id: string
}

export type SplashItem = SplashImageItem | SplashTextItem
