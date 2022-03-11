import { cmsClient } from '@/shared/configs'
import { CmsEntriesParams } from '@/shared/types'

type getCmsEntriesProps = {
  params: CmsEntriesParams
}

const getEntries = async <T = any>(props: getCmsEntriesProps) => {
  const { params } = props

  const response = await cmsClient.getEntries<T>(params)

  return response
}

export { getEntries }
