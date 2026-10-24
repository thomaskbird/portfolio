import type {Metadata} from "next";
import {ReactNode} from "react";
import client from "@/services/api";
import config from "@/config/sites";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

// Server-side metadata for article pages so titles, descriptions and
// Open Graph previews are present in the crawlable HTML.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await client.getEntries({
      content_type: 'posts',
      'fields.slug': slug,
      limit: 1,
    } as any);

    const page: any = res.items[0];
    if (!page) {
      return { title: 'Blog' };
    }

    const title = page.fields.title as string;
    // First paragraph of the description, trimmed to the last full sentence under 300 characters.
    const firstParagraph = ((page.fields.description as string) ?? '').split('\n')[0];
    const clipped = firstParagraph.slice(0, 300);
    const lastStop = clipped.lastIndexOf('. ');
    const description = clipped.length < firstParagraph.length && lastStop > 80 ? clipped.slice(0, lastStop + 1) : clipped;
    const imageUrl = page.fields.featuredImage?.fields?.file?.url;
    const image = imageUrl ? `https:${imageUrl}` : config.meta.ogImage;
    const url = `${config.url}/page/${slug}`;

    return {
      title,
      description,
      keywords: page.fields.keywords as string[] | undefined,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title,
        description,
        images: [image],
        publishedTime: page.fields.publishedAt ?? page.sys.createdAt,
        authors: ['Thomas Bird'],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return { title: 'Blog' };
  }
}

export default function Layout({ children }: LayoutProps) {
  return children;
}
