"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { sampleListings } from "@/lib/sample-data"
import { ArrowLeft, Clock, Eye, MapPin, User, CheckCircle2, Share2, MessageCircle } from "lucide-react"

export default function MarketplaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const listing = sampleListings.find((item) => item.id === id)

  if (!listing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />
        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-2xl font-bold mb-4">판매글을 찾을 수 없습니다</h1>
            <Button asChild>
              <Link href="/marketplace">목록으로 돌아가기</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10 rounded-full">
            <Link href="/marketplace">
              <ArrowLeft className="mr-2" size={18} />
              목록으로 돌아가기
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Image Section */}
            <div className="space-y-4">
              <Card className="overflow-hidden border-2">
                <div className="relative w-full h-96 md:h-[500px] bg-muted">
                  <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
                </div>
              </Card>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">{listing.status}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{listing.title}</h1>
                <p className="text-4xl font-bold text-primary mb-6">{listing.price.toLocaleString()}원</p>
              </div>

              {/* Stats */}
              <Card className="p-6 bg-gradient-to-br from-background to-muted/50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Eye className="text-muted-foreground" size={18} />
                    <div>
                      <p className="text-sm text-muted-foreground">조회수</p>
                      <p className="font-semibold">{listing.views}회</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-muted-foreground" size={18} />
                    <div>
                      <p className="text-sm text-muted-foreground">등록일</p>
                      <p className="font-semibold">
                        {new Date(listing.date).toLocaleDateString("ko-KR", {
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Seller Info */}
              <Card className="p-6 bg-gradient-to-br from-background to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">김방끗</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>서울 강남구</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30">
                    <CheckCircle2 size={14} className="mr-1" />
                    정리 고수
                  </Badge>
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 rounded-full shadow-lg hover:shadow-xl transition-all text-lg h-14"
                >
                  <Link href={`/chat/${listing.id}`}>
                    <MessageCircle className="mr-2" size={20} />
                    판매자와 채팅하기
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-2 bg-transparent">
                  <Share2 size={20} />
                </Button>
              </div>

              <Card className="p-4 bg-amber-50 border-amber-200">
                <p className="text-sm text-amber-900 flex items-start gap-2">
                  <span className="text-xl">💡</span>
                  <span>
                    <strong>안전 거래 팁:</strong> 직거래 시 공공장소에서 만나고, 물건 상태를 꼼꼼히 확인하세요.
                  </span>
                </p>
              </Card>
            </div>
          </div>

          {/* Description */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">상품 설명</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{listing.description}</p>

            {listing.items && listing.items.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">포함 물품</h3>
                <ul className="space-y-2">
                  {listing.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          {/* Related Items */}
          <div>
            <h2 className="text-2xl font-bold mb-6">비슷한 물건</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sampleListings
                .filter((item) => item.id !== id && item.status === "판매중")
                .slice(0, 3)
                .map((item) => (
                  <Link key={item.id} href={`/marketplace/${item.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer">
                      <div className="relative w-full h-48 bg-muted overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xl font-bold text-primary">{item.price.toLocaleString()}원</p>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
