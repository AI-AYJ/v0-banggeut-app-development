"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { use, useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { sampleListings } from "@/lib/sample-data"
import { ArrowLeft, Send, User, CheckCircle2, ImageIcon } from "lucide-react"
import { notFound } from "next/navigation"

type Message = {
  id: string
  sender: "me" | "seller"
  text: string
  time: string
}

export default function ChatPage({ params }: { params: Promise<{ listingId: string }> }) {
  const { listingId } = use(params)
  const listing = sampleListings.find((item) => item.id === listingId)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "seller",
      text: "안녕하세요! 방끗에 관심 가져주셔서 감사합니다 😊",
      time: "오후 2:30",
    },
    {
      id: "2",
      sender: "seller",
      text: "궁금하신 점이 있으시면 편하게 물어보세요!",
      time: "오후 2:30",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  if (!listing) {
    notFound()
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    const now = new Date()
    const timeStr = now.toLocaleTimeString("ko-KR", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })

    // Add my message
    const myMessage: Message = {
      id: Date.now().toString(),
      sender: "me",
      text: newMessage,
      time: timeStr,
    }
    setMessages([...messages, myMessage])
    setNewMessage("")

    // Auto reply from seller
    setTimeout(() => {
      const autoReplies = [
        "네, 상태는 아주 좋습니다! 직접 보시면 만족하실 거예요 😊",
        "직거래는 강남역 근처에서 가능합니다!",
        "네, 아직 판매중입니다. 언제 거래 가능하신가요?",
        "사진 추가로 보내드릴게요!",
        "네, 가격 조금 조율 가능합니다. 쪽지로 말씀 나눠볼까요?",
      ]
      const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)]

      const sellerMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "seller",
        text: randomReply,
        time: new Date(now.getTime() + 1000).toLocaleTimeString("ko-KR", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      }
      setMessages((prev) => [...prev, sellerMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-4 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl h-full flex flex-col">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-4 self-start hover:bg-primary/10 rounded-full">
            <Link href={`/marketplace/${listingId}`}>
              <ArrowLeft className="mr-2" size={18} />
              뒤로 가기
            </Link>
          </Button>

          {/* Chat Header */}
          <Card className="p-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">김방끗</h2>
                  <Badge variant="outline" className="border-primary/30 text-xs">
                    <CheckCircle2 size={12} className="mr-1" />
                    정리 고수
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{listing.title}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{listing.price.toLocaleString()}원</p>
              </div>
            </div>
          </Card>

          {/* Messages Container */}
          <Card className="flex-1 p-4 mb-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-2 max-w-[70%] ${message.sender === "me" ? "flex-row-reverse" : ""}`}>
                    {message.sender === "seller" && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <User className="text-primary" size={16} />
                      </div>
                    )}
                    <div>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.sender === "me"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-muted text-foreground rounded-bl-sm"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                      <p
                        className={`text-xs text-muted-foreground mt-1 ${message.sender === "me" ? "text-right" : ""}`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </Card>

          {/* Message Input */}
          <Card className="p-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full flex-shrink-0 bg-transparent">
                <ImageIcon size={20} />
              </Button>
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="메시지를 입력하세요..."
                className="flex-1 rounded-full"
              />
              <Button onClick={handleSendMessage} size="icon" className="rounded-full flex-shrink-0">
                <Send size={20} />
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
