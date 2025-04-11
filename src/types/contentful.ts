export interface ContentfulAssetFile {
  url: string;
  details: {
    size: number;
    image?: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

export interface ContentfulAssetFields {
  title: string;
  description: string;
  file: ContentfulAssetFile;
}

export interface ContentfulAssetType {
  contentTypeId: "asset";
  fields: ContentfulAssetFields;
}