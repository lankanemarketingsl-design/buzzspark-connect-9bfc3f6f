
-- 1) Replace permissive INSERT policy on inquiries with validated WITH CHECK
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.inquiries;

CREATE POLICY "Public can submit valid inquiries"
ON public.inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  inquiry_type IS NOT NULL
  AND length(inquiry_type) <= 50
  AND (name IS NULL OR length(name) <= 200)
  AND (phone IS NULL OR length(phone) <= 30)
  AND (email IS NULL OR length(email) <= 320)
  AND (business IS NULL OR length(business) <= 200)
  AND (service IS NULL OR length(service) <= 200)
  AND (message IS NULL OR length(message) <= 5000)
  AND (source_page IS NULL OR length(source_page) <= 500)
  AND (source_url IS NULL OR length(source_url) <= 1000)
  AND (placement IS NULL OR length(placement) <= 100)
  AND (whatsapp_number IS NULL OR length(whatsapp_number) <= 30)
  AND (utm_source IS NULL OR length(utm_source) <= 200)
  AND (utm_medium IS NULL OR length(utm_medium) <= 200)
  AND (utm_campaign IS NULL OR length(utm_campaign) <= 200)
  AND (utm_content IS NULL OR length(utm_content) <= 200)
  AND (utm_term IS NULL OR length(utm_term) <= 200)
  AND (user_agent IS NULL OR length(user_agent) <= 1000)
);

-- 2) Lock down SECURITY DEFINER function execution
-- has_role is referenced inside RLS policies; authenticated needs it. Anon does not.
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- claim_admin_role is only meaningful for a signed-in user (reads auth.jwt()).
REVOKE ALL ON FUNCTION public.claim_admin_role() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_admin_role() TO authenticated, service_role;

-- handle_new_user_role is invoked by an auth trigger; no API role should call it.
REVOKE ALL ON FUNCTION public.handle_new_user_role() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.handle_new_user_role() TO service_role, supabase_auth_admin;
