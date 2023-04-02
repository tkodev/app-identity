import { NextFavicon } from '~/types/favicon'

type FaviconProps = {
  favicon?: NextFavicon
}

const Favicon: React.FC<FaviconProps> = (props) => {
  const { favicon } = props ?? {}
  const { themeColor, configSrc, manifestSrc, xsIcon, smIcon, favIcon, maskIcon, touchIcon } = favicon ?? {}

  return favicon ? (
    <>
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="msapplication-config" content={configSrc} />
      <link rel="manifest" href={manifestSrc} />
      <link rel="icon" type="image/png" sizes="16x16" href={xsIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={smIcon} />
      <link rel="shortcut icon" href={favIcon} />
      <link rel="mask-icon" href={maskIcon} color={themeColor} />
      <link rel="apple-touch-icon" sizes="180x180" href={touchIcon} />
    </>
  ) : null
}

export { Favicon }
