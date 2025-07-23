import React from 'react'

function ContactUsPage() {
  return (
    <>
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <textarea rows="4" placeholder="Message" className="w-full p-3 border rounded"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
    </>
  )
}

export default ContactUsPage;