import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, Sparkles, DollarSign, Heart, ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">방끗 사용방법</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              5단계로 간단하게 방 비우기를 완성하세요
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <Card className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5">1</div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  STEP 1
                </div>
                <h2 className="text-3xl font-bold mb-4">정리 존(Zone) 만들기</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  방 한쪽에 버릴지 애매한 물건만 모아주세요. 개인 물건이나 고가 물품은 제외하세요.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-primary">포함할 물건</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 행거, 거울, 멀티탭</li>
                      <li>• 수납함, 생활용품</li>
                      <li>• 책 몇 권, 세제</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">제외할 물건</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 옷, 노트북 등 개인물품</li>
                      <li>• 고가 전자기기</li>
                      <li>• 귀중품</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5">2</div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  STEP 2
                </div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Camera className="text-primary" />
                  사진 1~3장 업로드
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  정리하지 마세요. 그냥 찍으세요. 깔끔할 필요도, 각도를 신경 쓸 필요도 없습니다.
                </p>
                <div className="bg-accent/50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    💡 <span className="font-semibold">팁:</span> 여러 각도에서 찍으면 AI가 더 정확하게 인식합니다
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5">3</div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  STEP 3
                </div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Sparkles className="text-primary" />
                  AI가 자동 분류
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  사진 업로드 후, 방끗이 대신 처리합니다. 물건을 인식하고 자동으로 분류합니다.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">판매 적합</h3>
                    <p className="text-xs text-muted-foreground">잘 팔리는 물건</p>
                  </div>
                  <div className="bg-chart-2/10 rounded-lg p-4 text-center">
                    <Heart className="w-8 h-8 text-chart-2 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">기부 추천</h3>
                    <p className="text-xs text-muted-foreground">기부가 더 빠른 물건</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <span className="text-3xl block mb-2">🗑️</span>
                    <h3 className="font-semibold mb-1">폐기 추천</h3>
                    <p className="text-xs text-muted-foreground">재사용 어려운 물건</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5">4</div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  STEP 4
                </div>
                <h2 className="text-3xl font-bold mb-4">판매 방식 고정</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  자동으로 이렇게 설정됩니다. 구매자 메시지 제한을 통해 번거로움을 최소화합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                    <span className="text-xl">❌</span>
                    <span className="text-sm">부분 구매 불가</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                    <span className="text-xl">❌</span>
                    <span className="text-sm">개별 흥정 불가</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <span className="text-xl">⭕</span>
                    <span className="text-sm font-semibold">일괄 거래만 가능</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 5 */}
            <Card className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5">5</div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  STEP 5
                </div>
                <h2 className="text-3xl font-bold mb-4">끝까지 책임지는 방 비우기</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  일정 시간 내 판매되지 않으면 기부처 안내와 폐기 가이드를 제공합니다.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">1차 전략 (즉시 MVP)</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 기숙사 토탈</li>
                      <li>• 현관 앞</li>
                      <li>• 약속된 시간 10분</li>
                    </ul>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">2차 전략 (행장 단계)</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 필요 것만 소각</li>
                      <li>• 나머지 폐기 가이드 제공</li>
                      <li>• 큰 폐기 대행 연결</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full text-lg px-8">
              <Link href="/upload">
                지금 바로 시작하기
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
