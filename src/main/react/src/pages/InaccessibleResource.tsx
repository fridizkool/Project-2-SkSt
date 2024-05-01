// TODO Add automatic redirect set to timer. And a manual 'back to home' button.

import { Link } from "@trussworks/react-uswds";

export default function InaccessibleResource() {

  return (
    <div>
      <h1>This page should be inaccessible</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link variant="nav" href={'/'}>Return to Home</Link>,

    </div>
  );
}