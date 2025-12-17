"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { DollarSign, Heart, Trash2, ArrowRight, Sparkles, AlertCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

type Item = {
  name: string
  category: "sell" | "donate" | "discard"
  price?: string
  reason: string
  disposalMethod?: string
}

export default function AnalysisResultPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  useEffect(() => {
    const image = sessionStorage.getItem("uploadedImage")
    if (image) {
      setUploadedImage(image)
      sessionStorage.removeItem("uploadedImage")
    }
  }, [])

  const items: Item[] = [
    {
      name: "에어프라이어",
      category: "sell",
      price: "25,000원",
      reason: "최근 모델이고 상태 양호, 자취생들의 필수템으로 수요 높음",
    },
    {
      name: "플라스틱 수납함 12개 (뚜껑 포함)",
      category: "sell",
      price: "35,000원",
      reason: "깨끗한 상태, 이사철 신입생 수요 많음, 묶음 판매로 고가 가능",
    },
    {
      name: "선풍기",
      category: "sell",
      price: "15,000원",
      reason: "여름철 필수품, 작동 상태 양호하면 빠른 판매 가능",
    },
    {
      name: "프라이팬 2개 + 냄비",
      category: "sell",
      price: "12,000원",
      reason: "주방용품 묶음으로 자취 시작하는 학생들에게 인기",
    },
    {
      name: "나무 도마",
      category: "sell",
      price: "3,000원",
      reason: "실용적인 주방 소품, 저렴한 가격으로 빠른 판매",
    },
    {
      name: "매트리스 (핑크색)",
      category: "donate",
      reason: "대형 물품으로 판매보다 기부가 더 효율적, 세탁 후 기부 추천",
    },
    {
      name: "멀티탭",
      category: "donate",
      reason: "저렴한 물품으로 기부하여 빠르게 처리 가능",
    },
    {
      name: "낡은 전선 및 케이블",
      category: "discard",
      reason: "오래되고 사용하지 않는 전선류",
      disposalMethod: "전자제품 전용 수거함에 배출하거나 주민센터 소형가전 수거 서비스 이용",
    },
  ]

  const sellItems = items.filter((item) => item.category === "sell")
  const donateItems = items.filter((item) => item.category === "donate")
  const discardItems = items.filter((item) => item.category === "discard")

  const totalPrice = sellItems.reduce((sum, item) => {
    return sum + Number.parseInt(item.price?.replace(/[^0-9]/g, "") || "0")
  }, 0)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sell":
        return <DollarSign size={20} />
      case "donate":
        return <Heart size={20} />
      case "discard":
        return <Trash2 size={20} />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sell":
        return "bg-primary text-primary-foreground"
      case "donate":
        return "bg-chart-2 text-white"
      case "discard":
        return "bg-muted text-muted-foreground"
      default:
        return ""
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "sell":
        return "판매"
      case "donate":
        return "기부"
      case "discard":
        return "폐기"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>분석 완료</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">AI 분석 결과</h1>
            <p className="text-lg text-muted-foreground text-pretty">총 {items.length}개의 물건을 분석했습니다</p>
          </div>

          <Card className="mb-12 overflow-hidden">
            <div className="relative w-full h-[400px] bg-muted">
              {uploadedImage ? (
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt="업로드한 사진"
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image src="/images/room-items.png" alt="분석된 물건들" fill className="object-contain" />
              )}
            </div>
          </Card>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-primary text-primary-foreground">
              <DollarSign className="w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold mb-1">{sellItems.length}개</h3>
              <p className="text-sm opacity-90 mb-2">판매 추천</p>
              <p className="text-xl font-semibold">예상 수익: {totalPrice.toLocaleString()}원</p>
            </Card>

            <Card className="p-6 bg-chart-2 text-white">
              <Heart className="w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold mb-1">{donateItems.length}개</h3>
              <p className="text-sm opacity-90">기부 추천</p>
            </Card>

            <Card className="p-6 bg-muted text-muted-foreground">
              <Trash2 className="w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold mb-1">{discardItems.length}개</h3>
              <p className="text-sm">폐기 추천</p>
            </Card>
          </div>

          {/* Item List */}
          <div className="space-y-8">
            {/* Sell Items */}
            {sellItems.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="text-primary" />
                  판매 추천 물건
                </h2>
                <div className="space-y-3">
                  {sellItems.map((item, index) => (
                    <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <Badge className={getCategoryColor(item.category)}>{getCategoryLabel(item.category)}</Badge>
                            {item.price && <Badge variant="outline">{item.price}</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{item.reason}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 p-6 bg-accent/50 border-primary/20">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="text-primary" size={20} />
                    묶음 판매 제안
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    "자취 시작 풀세트 (주방용품 + 생활가전)" 으로 묶어서 판매하면 더 빠르게 판매될 수 있어요!
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">예상 묶음 가격:</span>
                    <span className="text-lg font-bold text-primary">
                      {(totalPrice * 0.85).toLocaleString()}원 ~ {(totalPrice * 0.95).toLocaleString()}원
                    </span>
                  </div>
                </Card>
              </div>
            )}

            {/* Donate Items */}
            {donateItems.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="text-chart-2" />
                  기부 추천 물건
                </h2>
                <div className="space-y-3">
                  {donateItems.map((item, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <Badge className={getCategoryColor(item.category)}>{getCategoryLabel(item.category)}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.reason}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 p-6 bg-chart-2/10 border-chart-2/30">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="text-chart-2" size={20} />
                    기부 추천 장소
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 아름다운가게 - 전국 매장에서 의류, 생활용품 기부 가능</li>
                    <li>• 굿윌스토어 - 대형 가구 및 가전제품 기부 가능</li>
                    <li>• 구세군 자선냄비 - 방문 수거 서비스 제공</li>
                    <li>• 지역 주민센터 - 소형 생활용품 기부 접수</li>
                  </ul>
                </Card>
              </div>
            )}

            {/* Discard Items */}
            {discardItems.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Trash2 className="text-muted-foreground" />
                  폐기 추천 물건
                </h2>
                <div className="space-y-3">
                  {discardItems.map((item, index) => (
                    <Card key={index} className="p-6 bg-muted/30">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <Badge className={getCategoryColor(item.category)}>{getCategoryLabel(item.category)}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{item.reason}</p>
                          {item.disposalMethod && (
                            <div className="bg-background p-4 rounded-lg border-2 border-dashed">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                                <div>
                                  <p className="font-medium text-sm mb-1">올바른 처리 방법</p>
                                  <p className="text-sm text-muted-foreground">{item.disposalMethod}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1 rounded-full">
              <Link href="/create-listing">
                판매글 자동 생성하기
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 rounded-full bg-transparent">
              <Link href="/tips">실전 꿀팁 보기</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
