import AccountForm from './account-form'
import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <AccountForm user={user} />
}