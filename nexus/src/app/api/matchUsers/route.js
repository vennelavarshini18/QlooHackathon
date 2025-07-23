import { matchUsers } from '@/lib/matcher';

let userProfiles = []; // Import same object or move to DB later

export async function POST(req) {
  const { userId } = await req.json();
  const currentUser = userProfiles.find(u => u.userId === userId);

  if (!currentUser) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  const matches = matchUsers(currentUser, userProfiles);
  return Response.json({ matches });
}
