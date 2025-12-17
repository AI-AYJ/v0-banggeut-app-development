import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Eye, Clock, MapPin, Share2 } from "lucide-react"
import { sampleListings } from "@/lib/sample-data"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = sampleListings.find((item) => item.id === params.id)

  if (!listing) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/my-page">
              <ArrowLeft className="mr-2" size={18} />내 판매글로 돌아가기
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-3xl font-bold">{listing.title}</h1>
                  <Badge className={listing.status === "판매완료" ? "bg-chart-2 text-white" : "bg-primary"}>
                    {listing.status}
                  </Badge>
                </div>
                <p className="text-4xl font-bold text-primary mb-6">{listing.price.toLocaleString()}원</p>
              </div>

              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{new Date(listing.date).toLocaleDateString("ko-KR")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={18} />
                  <span>조회수 {listing.views}회</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>서울 관악구 (직거래 선호)</span>
                </div>
              </div>

              <div className="pt-6 border-t space-y-3">
                <Button className="w-full rounded-full" size="lg">
                  구매자와 채팅하기
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 rounded-full bg-transparent">
                    <Share2 className="mr-2" size={18} />
                    공유하기
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-full bg-transparent">
                    수정하기
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">상품 설명</h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {listing.id === "1" &&
                  "이사 가면서 사용하던 물건들을 한번에 판매합니다. 자취를 시작하시는 분께 딱 좋은 세트입니다. 에어프라이어, 주방용품, 수납함, 선풍기 등 생활에 필요한 모든 것이 포함되어 있습니다. 개별 구매시 훨씬 비싸지만, 묶음으로 저렴하게 드립니다. 직거래 우선이며, 상태는 모두 양호합니다."}
                {listing.id === "2" &&
                  "플라스틱 수납함 12개 세트입니다. 뚜껑도 모두 있고 깨끗한 상태입니다. 이사철 짐 정리용으로 딱 좋습니다. 색상은 노란색과 초록색 뚜껑이 섞여있습니다. 크기는 중형으로 옷, 책, 소품 등을 정리하기에 적당합니다."}
                {listing.id === "3" &&
                  "1년 정도 사용한 에어프라이어입니다. 작동 상태 매우 좋고 청소도 깨끗하게 해뒀습니다. 자취생 필수템이죠! 설명서도 있습니다. 원래 7만원대 제품인데 저렴하게 드립니다."}
                {listing.id === "4" &&
                  "선풍기 판매합니다. 작동 잘 되고 소음도 없습니다. 여름철 필수품인데 미리 구매하시면 저렴하게 드려요. 리모컨도 포함되어 있습니다."}
                {listing.id === "5" &&
                  "주방용품 세트입니다. 프라이팬 2개, 냄비 1개, 나무 도마 1개 포함되어 있습니다. 자취 시작하시는 분들께 추천합니다. 상태 양호하고 사용감 적습니다."}
              </p>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">거래 방법</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 직거래 선호 (서울 관악구)</li>
                  <li>• 택배 가능 (착불)</li>
                  <li>• 안전거래 가능</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
