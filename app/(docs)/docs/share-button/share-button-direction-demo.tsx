"use client"

import React from "react"
import { Mail, MessageCircle, Twitter } from "lucide-react"
import {
  ShareButton,
  type ShareAction,
} from "@/components/rithmui/share-button"

const actions: ShareAction[] = [
  { icon: <Twitter size={15} />, label: "Share on X", onSelect: () => {} },
  { icon: <Mail size={15} />, label: "Email", onSelect: () => {} },
  { icon: <MessageCircle size={15} />, label: "Message", onSelect: () => {} },
]

export default function ShareButtonDirectionDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-10 py-10">
      <div className="flex w-full max-w-sm items-center justify-end">
        <ShareButton
          direction="left"
          copyValue="https://rithmui.com"
          actions={actions}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        <ShareButton size="sm" copyValue="https://rithmui.com" />
        <ShareButton size="md" copyValue="https://rithmui.com" />
        <ShareButton size="lg" copyValue="https://rithmui.com" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Fans out to the left, plus the three trigger sizes
      </p>
    </div>
  )
}
