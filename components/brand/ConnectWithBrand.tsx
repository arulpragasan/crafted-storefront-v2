"use client"

import { useState } from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Typography } from "@/components/ui/Typography"
import { ConversationModal } from "@/components/brand/ConversationModal"

export function ConnectWithBrand({ brand }: any) {

  const [openConversation, setOpenConversation] = useState(false)

  return (
    <>
      <Section variant="feature">

        <Container size="narrow">

          <div className="text-center">

            <Typography as="h2" variant="headline">
              Connect with {brand.name}
            </Typography>

            <Typography
              variant="body"
              className="mt-4 text-neutral-600 leading-relaxed"
            >
              Interested in a bespoke piece or collaboration?
              Start a conversation with the designer team.
            </Typography>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-4">

              <button
                onClick={() => setOpenConversation(true)}
                className="px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px]"
              >
                Message the Designer
              </button>

              <Typography
                as="p"
                variant="caption"
                className="text-neutral-400"
              >
                Our atelier team typically responds within 24 hours.
              </Typography>

            </div>

          </div>

        </Container>

      </Section>

      {/* Conversation Modal */}
      {openConversation && (
        <ConversationModal
          brandName={brand.name}
          onClose={() => setOpenConversation(false)}
        />
      )}
    </>
  )
}