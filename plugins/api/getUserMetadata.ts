import { User } from '@supabase/supabase-js';

export type UserMetadata = {
  id: string;
  email?: string;
  username?: string;
  avatarUrl?: string;
  fullName?: string;
};
const getUserMetadata = (user: User): UserMetadata => ({
  id: user.id,
  email: user.email,
  username: user.user_metadata?.username,
  avatarUrl: user.user_metadata?.avatar_url,
  fullName: user.user_metadata?.full_name,
});

export default getUserMetadata;
