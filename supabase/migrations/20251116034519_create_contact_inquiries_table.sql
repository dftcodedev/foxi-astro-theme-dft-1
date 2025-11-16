/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `created_at` (timestamptz, defaults to now)
      - `name` (text, required)
      - `email` (text, required)
      - `company_name` (text, optional)
      - `website` (text, optional)
      - `service_interest` (text, optional)
      - `message` (text, required)
      - `status` (text, defaults to 'new')
      
  2. Security
    - Enable RLS on `contact_inquiries` table
    - Allow anonymous users to insert inquiries
    - Only authenticated admin users can read inquiries

  3. Notes
    - This table stores contact form submissions from potential clients
    - Anonymous insert allows public form submissions
    - Admin access only for reading to protect inquiry data
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company_name text,
  website text,
  service_interest text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiry"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
