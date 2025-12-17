"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { CheckCircle2, Sparkles } from "lucide-react"

export default function NewTipPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (content.length < 50) {
      alert("내용은 최소 50자 이상 작성해주세요")
      return
    }

    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("꿀팁이 성공적으로 공유되었습니다!")
    router.push("/tips")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>꿀팁 공유하기</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">내 꿀팁 공유하기</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              당신의 성공 경험이 다른 사람에게 큰 도움이 됩니다
            </p>
          </div>

          <Card className="p-8 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="category" className="text-base font-semibold mb-2 block">
                  카테고리
                </Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger id="category" className="h-12">
                    <SelectValue placeholder="카테고리를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="물건 인식 & 그룹화">물건 인식 & 그룹화</SelectItem>
                    <SelectItem value="3인 분투 (이게 진짜 핵심)">3인 분투 (이게 진짜 핵심)</SelectItem>
                    <SelectItem value="방 기준 가격 제안">방 기준 가격 제안</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="title" className="text-base font-semibold mb-2 block">
                  제목
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="예: 신입생 스타터팩으로 3만원에 팔았어요!"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="content" className="text-base font-semibold mb-2 block">
                  내용
                </Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="구체적인 경험과 결과를 공유해주세요. 어떤 방법을 사용했고, 어떤 결과가 있었나요?"
                  rows={10}
                  className="resize-none leading-relaxed"
                  required
                />
                <p className="text-sm text-muted-foreground mt-2">최소 50자 이상 작성해주세요 ({content.length}/50)</p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={20} />
                  좋은 꿀팁의 조건
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>실제로 경험한 사실만 작성해주세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>구체적인 방법과 결과를 포함해주세요 (가격, 기간, 수량 등)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>다른 사람도 따라할 수 있도록 상세하게 작성해주세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>사진을 함께 첨부하면 더 좋아요 (선택사항)</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1 rounded-full bg-transparent"
                  onClick={() => router.back()}
                  disabled={isSubmitting}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  disabled={!title || !content || !category || content.length < 50 || isSubmitting}
                >
                  {isSubmitting ? "공유 중..." : "꿀팁 공유하기"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
