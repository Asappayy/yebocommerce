import  createClient from '@sanity/client'
import sanityClient from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';



import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
})
