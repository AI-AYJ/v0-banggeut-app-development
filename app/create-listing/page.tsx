"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Copy, CheckCircle2, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CreateListingPage() {
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  const listingTitle = "신입생 생활용품 스타터팩 (행거2개, 멀티탭, 거울)"
  const listingPrice = "10,000"
  const listingDescription = `🏠 신입생/자취생 필수 생활용품 스타터팩!

포함 물건:
✓ 행거 2개 - 옷 보관용
✓ 멀티탭 - 4구 멀티탭
✓ 거울 - 벽걸이/스탠드형

모두 깨끗하게 사용한 물건들이고 상태 양호합니다.
따로 사면 2만원 넘게 나오는데 묶음으로 저렴하게 드립니다!

이사 가면서 정리하는 거라 빠른 거래 원합니다.
직거래 선호 (학교 근처)`

  const handleCopy = () => {
    const text = `${listingTitle}\n\n가격: ${listingPrice}원\n\n${listingDescription}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePublish = () => {
    // Simulate publishing
    router.push("/my-page")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>AI가 생성한 판매글</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">자동 생성된 판매글</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              내용을 확인하고 수정하거나 바로 게시할 수 있습니다
            </p>
          </div>

          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-base font-semibold mb-2 block">
                  제목
                </Label>
                <Input
                  id="title"
                  defaultValue={listingTitle}
                  className="text-lg"
                  placeholder="판매글 제목을 입력하세요"
                />
              </div>

              <div>
                <Label htmlFor="price" className="text-base font-semibold mb-2 block">
                  가격
                </Label>
                <div className="relative">
                  <Input
                    id="price"
                    type="text"
                    defaultValue={listingPrice}
                    className="text-lg pr-12"
                    placeholder="가격을 입력하세요"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">원</span>
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-base font-semibold mb-2 block">
                  설명
                </Label>
                <Textarea
                  id="description"
                  defaultValue={listingDescription}
                  rows={12}
                  className="resize-none leading-relaxed"
                  placeholder="판매글 내용을 입력하세요"
                />
              </div>

              <div className="bg-accent/50 rounded-lg p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="text-primary" size={20} />
                  AI 추천 팁
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>신입생/자취생을 대상으로 한 묶음 상품으로 구성했습니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>개별 가격 대비 할인율을 강조하여 구매 동기를 높였습니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>빠른 거래를 원한다는 점을 명시하여 즉시 구매를 유도합니다</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleCopy} variant="outline" size="lg" className="flex-1 rounded-full bg-transparent">
                  {copied ? (
                    <>
                      <CheckCircle2 className="mr-2" size={20} />
                      복사됨!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      텍스트 복사하기
                    </>
                  )}
                </Button>
                <Button onClick={handlePublish} size="lg" className="flex-1 rounded-full">
                  바로 게시하기
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
