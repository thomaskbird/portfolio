type PostType = {
  author_id: string;
  body: string;
  created_at: string;
  deleted_at: string | null;
  description: string;
  id: string;
  keywords: string;
  nav_text: string;
  order: string;
  parent_id: string;
  slug: string;
  status: string;
  title: string;
  type: 'post';
  updated_at: string;
  version_of: string;
};

export default PostType;