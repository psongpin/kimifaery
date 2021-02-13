const getHeaderColor = (pathname: string, isOnTop: boolean): string => {
  const pathNameColorMap: Record<string, string> = {
    '/about': 'text-pink-dark',
    '/works': 'text-pink-dark',
    '/links': 'text-pink-darker',
    '/contact': 'text-pink-dark',
    '/': 'text-white',
  }

  if (isOnTop) {
    return pathNameColorMap[pathname] || 'text-pink-darker'
  }

  return 'text-white'
}

export default getHeaderColor
