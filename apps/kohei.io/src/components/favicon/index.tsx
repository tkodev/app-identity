const favicon = {
  themeColor: '#333333',
  configSrc: '/favicons/browserconfig.xml',
  manifestSrc: '/favicons/site.webmanifest',
  xsIcon: '/favicons/favicon-16x16.png',
  smIcon: '/favicons/favicon-32x32.png',
  favIcon: '/favicons/favicon.ico',
  maskIcon: '/favicons/safari-pinned-tab.svg',
  touchIcon: '/favicons/apple-touch-icon.png'
}

type FaviconProps = {
  //
}

const Favicon: React.FC<FaviconProps> = () => {
  const { themeColor, configSrc, manifestSrc, xsIcon, smIcon, favIcon, maskIcon, touchIcon } =
    favicon

  return (
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
  )
}

export { Favicon }
