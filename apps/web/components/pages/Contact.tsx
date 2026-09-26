"use client";

import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-gray-50">
      {/* Page Header */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 text-4xl font-bold">
            Contact Us
          </h1>

          <p className="text-blue-100">
            Get in touch with Nagar Palika Parishad,
            Etah
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-blue-900">
              Get in Touch
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-blue-700" />

                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Office Address
                  </h4>

                  <p className="text-gray-700">
                    Nagar Palika Parishad Etah
                    <br />
                    G.T. Road, Near Station Road
                    <br />
                    Etah - 207001
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-blue-700" />

                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Telephone
                  </h4>

                  <p className="text-gray-700">
                    Office: +91 5724-222-111
                    <br />
                    Toll-Free: 1800-123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-blue-700" />

                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Email
                  </h4>

                  <p className="text-gray-700">
                    info@etahparishad.gov.in
                    <br />
                    grievance@etahparishad.gov.in
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-blue-700" />

                <div>
                  <h4 className="mb-1 font-bold text-gray-900">
                    Office Hours
                  </h4>

                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday &amp; Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-8 text-3xl font-bold text-blue-900">
              Send us a Message
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject of your inquiry"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write at least 10 characters..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-2.5 font-semibold text-white transition hover:bg-blue-800"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="w-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-blue-900">
              <MapPin className="h-6 w-6 text-blue-700" />
              Find Us on Google Maps
            </h3>

            <p className="ml-8 text-sm text-gray-500">
              Nagar Palika Parishad, G.T. Road, Etah
            </p>
          </div>

          <div className="h-[450px] w-full overflow-hidden rounded-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8521571439446!2d78.65860717616142!3d27.567083032360814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a350bfb683bf%3A0xe726487a3cbbfb9a!2sNagar%20Palika%20Parishad%20Office%2C%20Etah!5e0!3m2!1sen!2sin!4v1717930000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nagar Palika Parishad Etah Location"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
