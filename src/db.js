import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wlnqwicpqjngmwqoolaa.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsbnF3aWNwcWpuZ213cW9vbGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MDUyNDYsImV4cCI6MjAzMTk4MTI0Nn0.olhDMi_zYI7fCApEKDioEDwCSZ92I1CQJi2mwtc4BDM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
