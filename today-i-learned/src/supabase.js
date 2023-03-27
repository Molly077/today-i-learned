
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mwjsxeqcfseylpnlntly.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13anN4ZXFjZnNleWxwbmxudGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc2OTMsImV4cCI6MTk5Mjk5MzY5M30.KVSPxyM2a-oax8URg0ovxm7E6SP-yemF9gRDjlGyUWA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase