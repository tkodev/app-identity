import { dehydrate, QueryClient } from 'react-query'

const ssrQueryClient = async (fn: (queryClient: QueryClient) => Promise<void>) => {
  const queryClient = new QueryClient()
  await fn(queryClient)
  return dehydrate(queryClient)
}

export { ssrQueryClient }
