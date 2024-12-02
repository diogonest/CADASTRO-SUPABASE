import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ksgekwqwgoxbokkeiack.supabase.co'
const supabaseKey
export const supabase = createClient(supabaseUrl, supabaseKey)
