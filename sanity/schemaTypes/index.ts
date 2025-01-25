import { type SchemaTypeDefinition } from 'sanity'
import { realisation } from './realisation'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [realisation,post]
}
