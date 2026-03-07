"use client"

import { useState } from "react"
import { Typography } from "@/components/ui/Typography"

export function ConversationModal({
  brandName = "Aaryav Atelier",
  onClose,
}: {
  brandName?: string
  onClose?: () => void
}) {

  const [message, setMessage] = useState("")

  const messages = [
    {
      id: 1,
      name: "You",
      text: "Hi, I'm interested in your bridal collection.",
      time: "10:12 AM",
    },
    {
      id: 2,
      name: brandName,
      text: "Thank you for reaching out. When is your wedding date?",
      time: "10:15 AM",
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">

      {/* Modal Container */}
      <div className="w-full max-w-2xl bg-white shadow-xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="px-8 py-6 border-b border-neutral-200 text-center relative">

          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-sm text-neutral-500 hover:text-neutral-900"
          >
            Close
          </button>

          <Typography
            as="p"
            variant="caption"
            className="tracking-[0.3em] text-neutral-500"
          >
            ATELIER
          </Typography>

          <Typography
            as="h3"
            variant="headline"
            className="mt-1"
          >
            {brandName}
          </Typography>

          <Typography
            as="p"
            variant="caption"
            className="mt-2 text-neutral-400"
          >
            Private consultation • Typically replies within 24 hours
          </Typography>

        </div>


        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-12 py-10 space-y-12">

          {messages.map((msg) => (

            <div key={msg.id}>

              <Typography
                as="p"
                variant="caption"
                className="text-neutral-500 tracking-wide"
              >
                {msg.name}
              </Typography>

              <Typography
                as="p"
                variant="body"
                className="mt-3 leading-relaxed max-w-lg"
              >
                {msg.text}
              </Typography>

              <Typography
                as="p"
                variant="caption"
                className="mt-2 text-neutral-400 text-xs"
              >
                {msg.time}
              </Typography>

            </div>

          ))}

        </div>


        {/* Composer */}
        <div className="border-t border-neutral-200 px-8 py-6">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message to the designer..."
            rows={3}
            className="w-full border border-neutral-200 px-4 py-3 text-sm resize-none focus:outline-none focus:border-neutral-400"
          />

          <div className="mt-4 flex justify-between items-center">

            <Typography
              as="p"
              variant="caption"
              className="text-neutral-400"
            >
              Your message will be sent directly to the designer team.
            </Typography>

            <button
              className="px-8 py-3 bg-neutral-900 text-white text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px]"
            >
              Send Message
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}