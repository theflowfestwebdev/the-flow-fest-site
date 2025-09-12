import { Suspense } from "react"
import ContactPage from "./contact_page"

export default function ContactRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPage />
    </Suspense>
  )
}
