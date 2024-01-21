import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabaseOptions = {};

if (!supabaseUrl || !supabaseKey) {
    console.log('Supabase key or url are unreadable from the .env file.')
}

export const supabaseClient = createClient(supabaseUrl, supabaseKey, supabaseOptions)