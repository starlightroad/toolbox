type UniqueID = string;

type RelativeURL = string;

export type Utility = {
  id: UniqueID;
  label: string;
  description: string;
  href: RelativeURL;
};

export type Metadata = {
  title: string;
  description: string;
  keywords?: string[];
};
