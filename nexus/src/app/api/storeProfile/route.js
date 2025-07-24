import { userProfiles } from '@/lib/dataStore';


export async function POST(req) {
  const body = await req.json();
  const { userId, tags, qloo_keywords } = body;

  // 1. Simple validation
  if (!userId || !tags || !qloo_keywords) {
    return Response.json({ error: 'Missing fields' }, { status: 400 });
  }

  // 2. Store user profile
  userProfiles.push({ userId, tags, qloo_keywords });

  return Response.json({ message: 'Profile stored successfully' });
}

// 3. For retrieving all profiles, use get function
export async function GET() {
  return Response.json(userProfiles);
}
