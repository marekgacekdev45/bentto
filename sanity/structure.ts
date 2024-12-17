import { Image } from 'lucide-react'
import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Galeria')
        .icon(Image)
        .child(
          S.document()
            .schemaType('gallery')
            .documentId('gallery')
        ),
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId(); 
        return id !== undefined && !['gallery'].includes(id); 
      }),
    ]);
