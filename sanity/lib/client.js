import { createClient } from 'next-sanity'
import { ImageUrl } from '@sanity/image-url/'
import { urlForImage } from './image'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
})
