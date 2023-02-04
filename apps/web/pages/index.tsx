import { Button } from "ui";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://bxliyxwwagabvhdqrdoi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bGl5eHd3YWdhYnZoZHFyZG9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU1MjE5MDcsImV4cCI6MTk5MTA5NzkwN30.UuTWVWooetbGZn1mByAzfGhIETFMafGFu_rnFXiHimM')

export default function Web({ countries }) {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select()

  return {
    props: {
      countries: data
    },
  }
}
