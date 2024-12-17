import { type SchemaTypeDefinition } from 'sanity'
import { gallery } from './gallery'
import { realisation } from './realisation'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery,realisation,post]
}
