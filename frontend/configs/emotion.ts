import createCache from '@emotion/cache';

// util
const createEmotionCache = () => {
  return createCache({ key: 'css' });
}

// export
export {
  createEmotionCache
}