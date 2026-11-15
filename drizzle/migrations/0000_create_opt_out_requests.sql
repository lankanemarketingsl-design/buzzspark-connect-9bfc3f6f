CREATE TABLE public.opt_out_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text,
  email text,
  phone text,
  channels text[] NOT NULL DEFAULT '{}',
  message_types text[] NOT NULL DEFAULT '{}',
  sender_name text,
  message_text text,
  screenshot_paths text[] NOT NULL DEFAULT '{}',
  comments text,
  contact_back boolean NOT NULL DEFAULT false,
  consent_confirmed boolean NOT NULL DEFAULT false,
  sender_check text NOT NULL DEFAULT 'unchecked',
  status text NOT NULL DEFAULT 'new',
  admin_notes text,
  processed_at timestamptz,
  processed_by uuid,
  CONSTRAINT opt_out_contact_required CHECK (email IS NOT NULL OR phone IS NOT NULL),
  CONSTRAINT opt_out_consent_required CHECK (consent_confirmed = true),
  CONSTRAINT opt_out_sender_check_valid CHECK (sender_check IN ('unchecked','ours','not_ours','unclear')),
  CONSTRAINT opt_out_status_valid CHECK (status IN ('new','in_progress','done','not_from_us','rejected')),
  CONSTRAINT opt_out_channels_valid CHECK (channels <@ ARRAY['email','sms','whatsapp','all']::text[]),
  CONSTRAINT opt_out_message_text_length CHECK (message_text IS NULL OR length(message_text) <= 2000),
  CONSTRAINT opt_out_comments_length CHECK (comments IS NULL OR length(comments) <= 1000)
);

GRANT INSERT ON public.opt_out_requests TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.opt_out_requests TO authenticated;
GRANT ALL ON public.opt_out_requests TO service_role;

ALTER TABLE public.opt_out_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an opt-out request"
ON public.opt_out_requests FOR INSERT TO anon, authenticated
WITH CHECK (consent_confirmed = true AND (email IS NOT NULL OR phone IS NOT NULL));

CREATE POLICY "Admins can view opt-out requests"
ON public.opt_out_requests FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update opt-out requests"
ON public.opt_out_requests FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete opt-out requests"
ON public.opt_out_requests FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE VIEW public.do_not_contact_list
WITH (security_invoker = true) AS
SELECT email, phone, channels, processed_at
FROM public.opt_out_requests
WHERE status = 'done';

GRANT SELECT ON public.do_not_contact_list TO authenticated;
GRANT ALL ON public.do_not_contact_list TO service_role;

CREATE POLICY "Anyone can upload opt-out screenshots"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'opt-out-screenshots');

CREATE POLICY "Admins can read opt-out screenshots"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'opt-out-screenshots' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete opt-out screenshots"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'opt-out-screenshots' AND public.has_role(auth.uid(), 'admin'));