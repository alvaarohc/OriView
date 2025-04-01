import { getUser } from '@/actions/user';
import { createClient } from '@/utils/supabase/server';
import DashboardUI from './ui';

export default async function DashboardPage() {
  const supabase = await createClient();
  const user = await getUser();

  // TODO: Fix destructuring
  const { data } = await supabase
    .from('user_profiles')
    .select('username')
    .match({ id: user!.id })
    .single();

  return <DashboardUI initialUsername={data?.username} />;
}
