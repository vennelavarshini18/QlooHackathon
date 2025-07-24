import { matchUsers } from '@/lib/matcher';
import { userProfiles } from '@/lib/dataStore';

export async function POST(req) {
  const { userId } = await req.json();
  const currentUser = userProfiles.find(u => u.userId === userId);

  if (!currentUser) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  const matches = matchUsers(currentUser, userProfiles);
  return Response.json({ matches });
}

//GET endpoint to return match results for all users
export async function GET() {
  const allMatches = userProfiles.map(user => {
    const matches = matchUsers(user, userProfiles);
    return {
      userId: user.userId,
      matches
    };
  });

  return Response.json(allMatches);
}
