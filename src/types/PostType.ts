import { Entry, EntryFieldTypes } from "contentful";
import { ContentfulAssetType } from "./contentful";

type PostType = {
  contentTypeId: "posts";
  fields: {
    title: string;
    slug: string;
    description: string;
    featuredImage: EntryFieldTypes.AssetLink;
    body: string;
    keywords: string[];
    codepen: EntryFieldTypes.RichText;
    gallery: Entry<ContentfulAssetType>[];
  };
};

export default PostType;