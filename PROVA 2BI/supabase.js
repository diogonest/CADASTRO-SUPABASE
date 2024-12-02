import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ksgekwqwgoxbokkeiack.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZ2Vrd3F3Z294Ym9ra2VpYWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMzcxNTcsImV4cCI6MjA0ODcxMzE1N30.T1saHUS360V4ogNgMPhKfD3Vxa1_XmcsGVzZaUpEcwk'
export const supabase = createClient(supabaseUrl, supabaseKey)