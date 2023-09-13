import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
      <>
        <Head>
          <title>Contact me</title>
          <meta name="descritpion" content="Share a message" />
        </Head>
        <ContactForm />
      </>
  )
}

export default ContactPage;