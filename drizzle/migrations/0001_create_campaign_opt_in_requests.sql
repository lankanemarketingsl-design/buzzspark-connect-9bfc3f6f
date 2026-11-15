CREATE TABLE public.opt_in_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 reference text NOT NULL UNIQUE CHECK (reference ~ '^BI-[A-Z0-9]{8}$'),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL CHECK (length(trim(full_name)) BETWEEN 1 AND 100),
 email text CHECK (email IS NULL OR (length(email) <= 254 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$')),
 phone text CHECK (phone IS NULL OR phone ~ '^\+[1-9][0-9]{7,14}$'),
 channels text[] NOT NULL CHECK (cardinality(channels) BETWEEN 1 AND 3 AND channels <@ ARRAY['email','sms','whatsapp']::text[]),
 consent_confirmed boolean NOT NULL CHECK (consent_confirmed = true),
 consent_text text NOT NULL DEFAULT 'I am 18 or older, these contact details are mine, and I agree to receive Buzz Connect offers, promotions, events and learning opportunities through the channels I selected. I can opt out at any time.' CHECK (consent_text = 'I am 18 or older, these contact details are mine, and I agree to receive Buzz Connect offers, promotions, events and learning opportunities through the channels I selected. I can opt out at any time.'),
 notice_version text NOT NULL DEFAULT 'campaign-opt-in-v1' CHECK (notice_version = 'campaign-opt-in-v1'),
 status text NOT NULL DEFAULT 'new' CHECK (status IN ('new','approved','rejected')),
 admin_notes text NOT NULL DEFAULT '' CHECK (length(admin_notes) <= 2000),
 reviewed_at timestamptz,
 reviewed_by uuid,
 CHECK (NOT ('email' = ANY(channels)) OR email IS NOT NULL),
 CHECK (NOT (channels && ARRAY['sms','whatsapp']::text[]) OR phone IS NOT NULL)
);
GRANT INSERT ON public.opt_in_requests TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.opt_in_requests TO authenticated;
GRANT ALL ON public.opt_in_requests TO service_role;
ALTER TABLE public.opt_in_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public submits new opt-in requests" ON public.opt_in_requests FOR INSERT TO anon, authenticated WITH CHECK (status = 'new' AND admin_notes = '' AND reviewed_at IS NULL AND reviewed_by IS NULL AND consent_confirmed = true);
CREATE POLICY "Admins read opt-in requests" ON public.opt_in_requests FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins review opt-in requests" ON public.opt_in_requests FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete opt-in requests" ON public.opt_in_requests FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX opt_in_requests_status_created_idx ON public.opt_in_requests (status, created_at DESC);