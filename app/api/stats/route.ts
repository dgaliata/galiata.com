import type { NextRequest } from 'next/server'

// In-memory storage for blog stats (this won't persist after server restart)
const blogStats: Record<string, Record<string, any>> = {};

// Example structure for blog stats
// blogStats: {
//   'slug1': { 'views': 10, 'likes': 5 },
//   'slug2': { 'views': 20, 'likes': 3 },
// }

export async function GET(request: NextRequest) {
  try {
    let { searchParams: params } = new URL(request.url);
    let slug = params.get('slug');
    let type = params.get('type'); // No need for StatsType if you're not using DB or strict types

    if (!slug || !type) {
      return Response.json(
        { message: 'Missing `type` or `slug` parameter!' },
        {
          status: 400,
        }
      );
    }

    // Fetch from in-memory object instead of DB
    let data = blogStats[slug]?.[type];
    if (!data) {
      return Response.json(
        { message: 'Stats not found for this slug and type.' },
        {
          status: 404,
        }
      );
    }

    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json(
      { message: 'Internal Server Error!' },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    let data = await request.json();
    let { type, slug, ...updates } = data;

    if (!slug || !type) {
      return Response.json(
        { message: 'Missing `type` or `slug` parameter!' },
        {
          status: 400,
        }
      );
    }

    // Update the in-memory object
    if (!blogStats[slug]) {
      blogStats[slug] = {};
    }
    blogStats[slug][type] = updates;

    return Response.json({ success: true, updatedStats: blogStats[slug] });
  } catch (e) {
    console.error(e);
    return Response.json({ message: 'Internal Server Error!' }, { status: 500 });
  }
}
