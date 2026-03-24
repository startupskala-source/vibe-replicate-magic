import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesUpdate } from "@/integrations/supabase/types";
import { useAuth } from "./use-auth";

type Profile = Tables<"profiles">;
type ProfileUpdate = TablesUpdate<"profiles">;

interface UseProfileReturn {
  profile: Profile | null;
  loading: boolean;
  updating: boolean;
  updateProfile: (updates: Omit<ProfileUpdate, "id">) => Promise<{ error: Error | null }>;
  refetch: () => Promise<void>;
}

export function useProfile(): UseProfileReturn {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchProfile = async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (!error) {
      setProfile(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const updateProfile = async (updates: Omit<ProfileUpdate, "id">) => {
    if (!user) return { error: new Error("Usuário não autenticado") };

    setUpdating(true);
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: user.id, ...updates, updated_at: new Date().toISOString() });

    if (!error) {
      await fetchProfile();
    }
    setUpdating(false);

    return { error: error ? new Error(error.message) : null };
  };

  return { profile, loading, updating, updateProfile, refetch: fetchProfile };
}
