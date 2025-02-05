import { createClient } from "@supabase/supabase-js";
import supabaseApiKeys from "./apiKeys";
const { supabaseUrl, supabaseKey } = supabaseApiKeys;

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
